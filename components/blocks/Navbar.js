'use client'
import { useState } from 'react'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScrollTo = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Simple
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleScrollTo('hero')} className="text-gray-700 hover:text-blue-600 transition-colors">Home</button>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <button onClick={() => handleScrollTo('solution')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">90-Day Recovery</button>
                  <button onClick={() => handleScrollTo('problem')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Revenue Diagnostic</button>
                  <button onClick={() => handleScrollTo('case-studies')} className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Case Studies</button>
                </div>
              </div>
            </div>
            
            <button onClick={() => handleScrollTo('case-studies')} className="text-gray-700 hover:text-blue-600 transition-colors">Results</button>
            <button onClick={() => handleScrollTo('cta')} className="text-gray-700 hover:text-blue-600 transition-colors">Contact</button>
            <Button size="sm" className="animate-pulse bg-red-600 hover:bg-red-700 text-white" data-testid="navbar-cta">
              Free Revenue Audit →
            </Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="mobile-menu-button"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <button onClick={() => handleScrollTo('hero')} className="text-left text-gray-700 hover:text-blue-600">Home</button>
              <button onClick={() => handleScrollTo('solution')} className="text-left text-gray-700 hover:text-blue-600">90-Day Recovery</button>
              <button onClick={() => handleScrollTo('problem')} className="text-left text-gray-700 hover:text-blue-600">Revenue Diagnostic</button>
              <button onClick={() => handleScrollTo('case-studies')} className="text-left text-gray-700 hover:text-blue-600">Case Studies</button>
              <button onClick={() => handleScrollTo('cta')} className="text-left text-gray-700 hover:text-blue-600">Contact</button>
              <Button className="w-fit bg-red-600 hover:bg-red-700 text-white" data-testid="mobile-navbar-cta">
                Free Revenue Audit →
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}