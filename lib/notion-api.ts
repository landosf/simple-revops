import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle, getPageProperty } from 'notion-utils'
import { siteConfig } from './site-config'
import { NotionPost } from './notion-types'

const notion = new NotionAPI()

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
  // Format ID as: 8-4-4-4-12
  let id = pageId.replace(/-/g, '')
  id = `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20, 32)}`

  return await notion.getPage(id)
}

function safeGetProperty<T>(propertyName: string, block: any, recordMap: ExtendedRecordMap): T | null {
  try {
    return getPageProperty<T>(propertyName, block, recordMap)
  } catch (e) {
    return null
  }
}

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

          const title = getPageTitle(recordMap, pageId)
          if (!title || title === 'Untitled') return null

          const properties = (block as any).properties || {}

          // Safely get each property
          let slug = safeGetProperty<string>('Slug', block, recordMap)
          if (!slug && properties.Slug) slug = properties.Slug[0]?.[0]
          slug = slug || pageId

          let published = safeGetProperty<string>('Published', block, recordMap)
          if (!published && properties.Published) {
            const dateProp = properties.Published[0]
            if (dateProp?.[1]?.[0]?.[1]?.start_date) published = dateProp[1][0][1].start_date
          }

          let publishedAt = new Date().toISOString()
          if (published) {
            const d = new Date(published)
            if (!isNaN(d.getTime())) publishedAt = d.toISOString()
          }

          // Use Description as Excerpt
          let excerpt = safeGetProperty<string>('Description', block, recordMap)
          if (!excerpt && properties.Description) excerpt = properties.Description[0]?.[0]
          excerpt = excerpt || ''

          let author = safeGetProperty<string>('Author', block, recordMap)
          if (!author && properties.Author) author = properties.Author[0]?.[0]
          author = author || siteConfig.author

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
