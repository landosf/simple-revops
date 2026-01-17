import { NotionAPI } from 'notion-client'
import { ExtendedRecordMap } from 'notion-types'
import { getPageTitle, getPageProperty } from 'notion-utils'
import { siteConfig } from './site-config'
import { NotionPost } from './notion-types'

const notion = new NotionAPI()

export async function getNotionPage(pageId: string): Promise<ExtendedRecordMap> {
  return await notion.getPage(pageId)
}

export async function getAllPosts(): Promise<NotionPost[]> {
  const rootPageId = siteConfig.rootNotionPageId
  
  if (!rootPageId) {
    throw new Error('NOTION_PAGE_ID not configured')
  }
  
  const recordMap = await getNotionPage(rootPageId)
  
  // Extract posts from collection
  const collection = Object.values(recordMap.collection || {})[0]?.value
  const collectionView = Object.values(recordMap.collection_view || {})[0]?.value
  const collectionQuery = recordMap.collection_query?.[collection?.id]?.[collectionView?.id]
  
  if (!collectionQuery) {
    return []
  }
  
  const pageIds: string[] = collectionQuery.blockIds || []
  
  const posts = pageIds
    .map((pageId): NotionPost | null => {
      const block = recordMap.block[pageId]?.value
      if (!block) return null
      
      const title = getPageTitle(recordMap, pageId)
      const slug = getPageProperty<string>('Slug', block, recordMap) || pageId
      const published = getPageProperty<string>('Published', block, recordMap)
      const excerpt = getPageProperty<string>('Excerpt', block, recordMap) || ''
      const author = getPageProperty<string>('Author', block, recordMap) || siteConfig.author
      const tags = getPageProperty<string[]>('Tags', block, recordMap) || []
      
      return {
        id: pageId,
        title: title || 'Untitled',
        slug,
        publishedAt: published || new Date().toISOString(),
        excerpt,
        author,
        tags,
      }
    })
    .filter((post): post is NotionPost => post !== null)
    .filter((post) => post.publishedAt)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  
  return posts
}

export async function getPostBySlug(slug: string): Promise<NotionPost | undefined> {
  const posts = await getAllPosts()
  return posts.find((post) => post.slug === slug)
}
