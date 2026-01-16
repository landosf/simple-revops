export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

export const siteConfig: SiteConfig = {
  rootNotionPageId: (typeof process !== 'undefined' ? process.env.VITE_NOTION_PAGE_ID : (import.meta as any).env.VITE_NOTION_PAGE_ID) || '',
  name: 'Simple',
  domain: (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : (import.meta as any).env.VITE_SITE_URL) || 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
