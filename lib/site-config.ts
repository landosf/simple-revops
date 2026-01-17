export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

export const siteConfig: SiteConfig = {
  // Use the ID with dashes which is more compatible with the Notion API
  rootNotionPageId: '2e6ce325-7865-80dc-a80f-e35fa1a9e7ff',
  name: 'Simple',
  domain: 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
