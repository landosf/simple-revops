import { useState, useEffect } from 'react'
import { Link } from 'wouter'
import { Button } from '@/../../components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-200 ${
      isScrolled 
        ? 'bg-white shadow-sm' 
        : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/">
            <a className="text-2xl font-bold text-gray-900" data-testid="link-logo">
              Simple
            </a>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services">
              <a className="text-gray-700 hover:text-primary font-medium transition-colors" data-testid="link-services">
                Services
              </a>
            </Link>
            <Link href="/company">
              <a className="text-gray-700 hover:text-primary font-medium transition-colors" data-testid="link-company">
                Company
              </a>
            </Link>
            <Link href="/book-strategy-call">
              <a data-testid="button-book-call">
                <Button size="sm" className="ml-4">
                  Book a Strategy Call
                </Button>
              </a>
            </Link>
          </div>

          <button 
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="button-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/services">
                <a className="text-gray-700 hover:text-primary font-medium" data-testid="link-mobile-services">
                  Services
                </a>
              </Link>
              <Link href="/company">
                <a className="text-gray-700 hover:text-primary font-medium" data-testid="link-mobile-company">
                  Company
                </a>
              </Link>
              <Link href="/book-strategy-call">
                <a data-testid="button-mobile-book-call">
                  <Button size="sm" className="w-fit">
                    Book a Strategy Call
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
