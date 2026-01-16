import { Link } from 'wouter'
import { useQuery } from '@tanstack/react-query'
import Navbar from '@/../../components/blocks/Navbar'
import Footer from '@/../../components/blocks/Footer'
import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'
import { getAllPosts } from '@/../../lib/notion-api'
import { useEffect } from 'react'

export default function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const { data: posts = [], isLoading, error } = useQuery({
    queryKey: ['/api/blog/posts'],
    queryFn: () => getAllPosts()
  })

  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Section className="pt-20 lg:pt-24">
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20">
              Insights & Thought Leadership
            </span>
          </div>
          <Heading level={1} className="mb-6">
            Simple <span className="text-primary">Blog</span>
          </Heading>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights on revenue operations, growth strategies, and scaling B2B companies.
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-8 max-w-2xl mx-auto">
            <p className="text-red-800">
              <strong>Error:</strong> {error instanceof Error ? error.message : 'Unknown error'}
            </p>
            <p className="text-red-600 text-sm mt-2">
              Check VITE_NOTION_PAGE_ID in your environment variables.
            </p>
          </div>
        )}

        {isLoading && (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading posts...</p>
          </div>
        )}

        {!isLoading && posts.length === 0 && !error && (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts published yet.</p>
          </div>
        )}

        {posts.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <a className="block h-full">
                  <Card className="p-6 h-full hover:shadow-lg transition-shadow cursor-pointer">
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">
                        {new Date(post.publishedAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      {post.excerpt && (
                        <p className="text-gray-600 line-clamp-3 mb-4">
                          {post.excerpt}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        By {post.author}
                      </div>
                      <div className="text-primary font-medium text-sm">
                        Read more →
                      </div>
                    </div>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.slice(0, 3).map((tag, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        )}
      </Section>

      <Footer />
    </main>
  )
}
