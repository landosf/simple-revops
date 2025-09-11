'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offsetTop = element.offsetTop - 80
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 transition-all duration-200',
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
        : 'bg-white/90 backdrop-blur-sm'
    )}>
      <div className="container-width">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-3xl font-bold gradient-text hover:scale-105 transition-transform"
          >
            Simple
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('problem')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Assessment
            </button>
            <button 
              onClick={() => scrollToSection('solution')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              90-Day System
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
            >
              Results
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-cta text-sm"
            >
              Free Revenue Audit →
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 bg-white/95">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-left text-gray-700 hover:text-blue-600 font-medium">Home</button>
              <button onClick={() => scrollToSection('problem')} className="text-left text-gray-700 hover:text-blue-600 font-medium">Assessment</button>
              <button onClick={() => scrollToSection('solution')} className="text-left text-gray-700 hover:text-blue-600 font-medium">90-Day System</button>
              <button onClick={() => scrollToSection('results')} className="text-left text-gray-700 hover:text-blue-600 font-medium">Results</button>
              <button onClick={() => scrollToSection('contact')} className="btn-cta text-sm w-fit">
                Free Revenue Audit →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}