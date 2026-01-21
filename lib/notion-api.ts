import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle, getPageProperty } from 'notion-utils'
import { siteConfig } from './site-config'
import { NotionPost } from './notion-types'

const notion = new NotionAPI()

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
  const id = pageId.includes('-') ? pageId : `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`

  try {
    return await notion.getPage(id)
  } catch (error) {
    console.error("Error fetching Notion page:", error)
    throw error
  }
}

export async function getAllPosts(): Promise<NotionPost[]> {
  const rootPageId = siteConfig.rootNotionPageId

  if (!rootPageId) throw new Error('NOTION_PAGE_ID not configured')

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
      const block = recordMap.block[pageId]?.value
      if (!block) return null

      const title = getPageTitle(recordMap, pageId)
      if (!title || title === 'Untitled') return null

      const properties = (block as any).properties || {}

      let slug = ''
      try { slug = getPageProperty<string>('Slug', block, recordMap) } catch (e) {}
      if (!slug && properties.Slug) slug = properties.Slug[0]?.[0]
      slug = slug || pageId

      let published = ''
      try { published = getPageProperty<string>('Published', block, recordMap) } catch (e) {}
      if (!published && properties.Published) {
        const dateProp = properties.Published[0]
        if (dateProp?.[1]?.[0]?.[1]?.start_date) published = dateProp[1][0][1].start_date
      }

      let publishedAt = new Date().toISOString()
      if (published) {
        const d = new Date(published)
        if (!isNaN(d.getTime())) publishedAt = d.toISOString()
      }

      const excerpt = properties.Excerpt?.[0]?.[0] || ''
      const author = siteConfig.author

      return {
        id: pageId,
        title,
        slug,
        publishedAt,
        excerpt,
        author,
        tags: [],
      }
    })
    .filter((post): post is NotionPost => post !== null)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())

  return posts
}

export async function getPostBySlug(slug: string): Promise<NotionPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}
