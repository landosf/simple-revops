import { useRoute } from 'wouter'
import { useQuery } from '@tanstack/react-query'
import Navbar from '../../components/blocks/Navbar'
import Footer from '../../components/blocks/Footer'
import { Section } from '../../components/ui/section'
import { Heading } from '../../components/ui/heading'
import { NotionPage } from '../../components/NotionPage'
import { getPostBySlug, getNotionPage } from '../../lib/notion-api'
import { useEffect } from 'react'

export default function BlogPostPage() {
  const [, params] = useRoute('/blog/:slug')
  const slug = params?.slug

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ['/api/blog/post', slug],
    queryFn: () => getPostBySlug(slug!),
    enabled: !!slug
  })

  const { data: recordMap, isLoading: isLoadingContent, error } = useQuery({
    queryKey: ['/api/blog/content', post?.id],
    queryFn: () => getNotionPage(post!.id),
    enabled: !!post?.id
  })

  const isLoading = isLoadingPost || isLoadingContent

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <article className="pt-20 lg:pt-24 pb-16">
        <Section>
          <div className="max-w-3xl mx-auto">
            {isLoading && (
              <div className="text-center py-20">
                <p className="text-gray-600">Loading post...</p>
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8">
                <p className="text-red-800">
                  <strong>Error:</strong> {error instanceof Error ? error.message : 'Unknown error'}
                </p>
              </div>
            )}

            {post && !isLoading && (
              <>
                <div className="mb-8">
                  <div className="text-sm text-gray-500 mb-4">
                    {new Date(post.publishedAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })} • By {post.author}
                  </div>
                  <Heading level={1} className="mb-6">
                    {post.title}
                  </Heading>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-8">
                      {post.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="prose prose-lg max-w-none">
                  {recordMap && <NotionPage recordMap={recordMap} />}
                </div>
              </>
            )}
          </div>
        </Section>
      </article>

      <Footer />
    </main>
  )
}
