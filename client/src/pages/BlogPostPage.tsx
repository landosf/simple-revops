import { Link, useRoute } from 'wouter'
import { useQuery } from '@tanstack/react-query'
import Navbar from '@/../../components/blocks/Navbar'
import Footer from '@/../../components/blocks/Footer'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'
import { NotionPage } from '@/../../components/NotionPage'
import { useEffect } from 'react'

export default function BlogPostPage() {
  const [, params] = useRoute('/blog/:slug')
  const slug = params?.slug

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [slug])

  const { data: post, isLoading: isLoadingPost } = useQuery({
    queryKey: ['/api/blog/post', slug],
    queryFn: async () => {
      const response = await fetch(`/api/blog/post/${slug}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch post');
      }
      return response.json();
    },
    enabled: !!slug
  })

  const { data: recordMap, isLoading: isLoadingContent, error } = useQuery({
    queryKey: ['/api/blog/content', post?.id],
    queryFn: async () => {
      const response = await fetch(`/api/blog/content/${post?.id}`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to fetch content');
      }
      return response.json();
    },
    enabled: !!post?.id
  })

  const isLoading = isLoadingPost || isLoadingContent

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Section className="pt-20 lg:pt-24">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog">
            <a className="inline-flex items-center text-primary hover:text-primary/80 font-medium mb-8">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </a>
          </Link>

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
            <article>
              <header className="mb-12">
                <Heading level={1} className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  {post.title}
                </Heading>
                
                <div className="flex items-center space-x-6 text-gray-600">
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    <span>{post.author}</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>
                      {(() => {
                        const date = new Date(post.publishedAt);
                        return isNaN(date.getTime()) ? 'Recently published' : date.toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        });
                      })()}
                    </span>
                  </div>
                </div>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-6">
                    {post.tags.map((tag: string, idx: number) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              <div className="notion-content">
                {recordMap && <NotionPage recordMap={recordMap} />}
              </div>
            </article>
          )}

          <div className="mt-16 pt-8 border-t border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to optimize your revenue operations?
            </h3>
            <p className="text-gray-600 mb-6">
              Schedule a free strategy session to discuss your specific challenges.
            </p>
            <Link href="/book-strategy-call">
              <a className="inline-flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all">
                Book a Strategy Call
              </a>
            </Link>
          </div>
        </div>
      </Section>

      <Footer />
    </main>
  )
}
