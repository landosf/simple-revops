export interface NotionPost {
  id: string
  title: string
  slug: string
  publishedAt: string
  excerpt?: string
  author: string
  tags?: string[]
}

export interface NotionPageData {
  recordMap: any
  post: NotionPost
}
