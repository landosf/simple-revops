export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

export const siteConfig: SiteConfig = {
  rootNotionPageId: '2e6ce325786580dca80fe35fa1a9e7ff', // Hardcoded for testing
  name: 'Simple',
  domain: 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
