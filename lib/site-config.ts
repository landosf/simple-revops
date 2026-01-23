export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

export const siteConfig: SiteConfig = {
  rootNotionPageId: '2f1ce3257865805c94d7cff890d94236', // Hardcoded for testing
  name: 'Simple',
  domain: 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
