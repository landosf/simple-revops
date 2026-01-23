import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle, getPageProperty } from 'notion-utils'
import { siteConfig } from './site-config'
import { NotionPost } from './notion-types'

const notion = new NotionAPI()

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
  console.log("=== getNotionPage called ===")
  console.log("Input pageId:", pageId)
  console.log("pageId length:", pageId.length)
  console.log("pageId has dashes:", pageId.includes('-'))

  const id = pageId.includes('-') ? pageId : `${pageId.slice(0, 8)}-${pageId.slice(8, 12)}-${pageId.slice(12, 16)}-${pageId.slice(16, 20)}-${pageId.slice(20)}`

  console.log("Formatted ID to use:", id)
  console.log("Formatted ID length:", id.length)

  try {
    const result = await notion.getPage(id)
    console.log("Successfully fetched page")
    return result
  } catch (error) {
    console.error("Error fetching Notion page:", error)
    if (error instanceof Error) {
      console.error("Error message:", error.message)
      console.error("Error stack:", error.stack)
    }
    throw error
  }
}

export async function getAllPosts(): Promise<NotionPost[]> {
  console.log("=== getAllPosts called ===")
  const rootPageId = siteConfig.rootNotionPageId
  console.log("rootPageId from config:", rootPageId)
  console.log("rootPageId type:", typeof rootPageId)

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

  console.log("Found pageIds:", pageIds.length)

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

      // Final fallback for date to avoid "Invalid Date"
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

  console.log("Returning posts:", posts.length)
  return posts
}

export async function getPostBySlug(slug: string): Promise<NotionPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}
