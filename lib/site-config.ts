export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

export const siteConfig: SiteConfig = {
  rootNotionPageId: (import.meta as any).env.VITE_NOTION_PAGE_ID || '',
  name: 'Simple',
  domain: (import.meta as any).env.VITE_SITE_URL || 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
