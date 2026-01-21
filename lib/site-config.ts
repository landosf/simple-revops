export interface SiteConfig {
  rootNotionPageId: string
  name: string
  domain: string
  author: string
  description: string
  dateFormat: string
}

// Normalize Notion ID - handles URLs, IDs with/without dashes
function normalizeNotionId(id: string): string {
  // If it's a URL, extract the ID from it
  if (id.includes('notion.so')) {
    const match = id.match(/([a-f0-9]{32}|[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})/i);
    if (match) {
      id = match[0];
    }
  }
  // Remove dashes and convert to lowercase
  return id.replace(/-/g, '').toLowerCase();
}

const rawPageId = (typeof process !== 'undefined' ? process.env.VITE_NOTION_PAGE_ID : (import.meta as any).env.VITE_NOTION_PAGE_ID) || '2e6ce325786580dca80fe35fa1a9e7ff';

export const siteConfig: SiteConfig = {
  rootNotionPageId: normalizeNotionId(rawPageId),
  name: 'Simple',
  domain: (typeof process !== 'undefined' ? process.env.VITE_SITE_URL : (import.meta as any).env.VITE_SITE_URL) || 'https://simplerevenue.io',
  author: 'Simple Team',
  description: 'Revenue Operations Excellence',
  dateFormat: 'MMMM DD, YYYY',
}
