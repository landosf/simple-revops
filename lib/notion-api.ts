import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle, getPageProperty } from 'notion-utils'
import { siteConfig } from './site-config'
import { NotionPost } from './notion-types'

const notion = new NotionAPI()

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
  // Format ID as: 8-4-4-4-12
  const cleanId = pageId.replace(/-/g, '')
  if (cleanId.length !== 32) {
    console.error(`Invalid Notion page ID: ${pageId}`);
    throw new Error(`Invalid Notion page ID: ${pageId}`);
  }
  
  const id = `${cleanId.slice(0, 8)}-${cleanId.slice(8, 12)}-${cleanId.slice(12, 16)}-${cleanId.slice(16, 20)}-${cleanId.slice(20, 32)}`

  return await notion.getPage(id)
}

function safeGetProperty<T>(propertyName: string, block: any, recordMap: ExtendedRecordMap): T | null {
  try {
    return getPageProperty<T>(propertyName, block, recordMap)
  } catch (e) {
    return null
  }
}

// Helper to sanitize text from control characters (\t, \n, etc) that Notion might reject
const sanitizeText = (str: string | undefined | null) => {
  if (!str) return "";
  return str.replace(/[\x00-\x1F\x7F-\x9F]/g, "").trim();
};

export async function getAllPosts(): Promise<NotionPost[]> {
  const rootPageId = siteConfig.rootNotionPageId
  if (!rootPageId) throw new Error('NOTION_PAGE_ID not configured')

  try {
    const recordMap = await getNotionPage(rootPageId)
    if (!recordMap.block) return []

    const collectionId = Object.keys(recordMap.collection || {})[0]
    const collectionViewId = Object.keys(recordMap.collection_view || {})[0]

    let pageIds: string[] = []

    if (collectionId && collectionViewId) {
      const collectionQuery = recordMap.collection_query?.[collectionId]?.[collectionViewId]
      if (collectionQuery?.blockIds) {
        pageIds = collectionQuery.blockIds
      }
    }

    if (pageIds.length === 0) {
      pageIds = Object.keys(recordMap.block).filter(id => {
        const block = recordMap.block[id].value
        if (!block) return false
        const cleanId = id.replace(/-/g, '')
        const cleanRootId = rootPageId.replace(/-/g, '')
        return (block.type === 'page' || block.type === 'collection_view_page') && cleanId !== cleanRootId
      })
    }

    const posts = pageIds
      .map((pageId): NotionPost | null => {
        try {
          const block = recordMap.block[pageId]?.value
          if (!block) return null

          const rawTitle = getPageTitle(recordMap, pageId)
          const title = sanitizeText(rawTitle)
          if (!title || title === 'Untitled') return null

          const properties = (block as any).properties || {}

          // Safely get and sanitize each property
          let rawSlug = safeGetProperty<string>('Slug', block, recordMap)
          if (!rawSlug && properties.Slug) rawSlug = properties.Slug[0]?.[0]
          const slug = rawSlug ? sanitizeText(rawSlug) : pageId

          let published = safeGetProperty<string>('Published', block, recordMap)
          if (!published && properties.Published) {
            const dateProp = properties.Published[0]
            if (dateProp?.[1]?.[0]?.[1]?.start_date) published = dateProp[1][0][1].start_date
          }

          // Ensure strict ISO 8601 format for the frontend
          let publishedAt = new Date().toISOString()
          if (published) {
            const d = new Date(published)
            if (!isNaN(d.getTime())) {
              publishedAt = d.toISOString()
            }
          }

          let rawExcerpt = safeGetProperty<string>('Description', block, recordMap)
          if (!rawExcerpt && properties.Description) rawExcerpt = properties.Description[0]?.[0]
          const excerpt = sanitizeText(rawExcerpt)

          let rawAuthor = safeGetProperty<string>('Author', block, recordMap)
          if (!rawAuthor && properties.Author) rawAuthor = properties.Author[0]?.[0]
          const author = rawAuthor ? sanitizeText(rawAuthor) : sanitizeText(siteConfig.author)

          return {
            id: pageId,
            title,
            slug,
            publishedAt,
            excerpt,
            author,
            tags: [],
          }
        } catch (error) {
          console.error(`Error processing page ${pageId}:`, error)
          return null
        }
      })
      .filter((post): post is NotionPost => post !== null)
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

    return posts
  } catch (error) {
    console.error('Error in getAllPosts:', error)
    throw error
  }
}

export async function getPostBySlug(slug: string): Promise<NotionPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}
