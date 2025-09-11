'use client'

import { useState, useEffect } from 'react'

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
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 hero-gradient ${
      isScrolled 
        ? 'opacity-95 backdrop-blur-md shadow-2xl' 
        : 'opacity-80 backdrop-blur-sm'
    }`}>
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-3xl font-bold gradient-text hover:scale-105 transition-transform"
            data-testid="button-logo"
          >
            Simple Revenue
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')} 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 relative group"
              data-testid="link-home"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
            </button>
            <button 
              onClick={() => scrollToSection('problem')} 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 relative group"
              data-testid="link-assessment"
            >
              Assessment
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
            </button>
            <button 
              onClick={() => scrollToSection('solution')} 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 relative group"
              data-testid="link-system"
            >
              90-Day System
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
            </button>
            <button 
              onClick={() => scrollToSection('results')} 
              className="text-white hover:text-yellow-300 font-semibold transition-colors duration-200 relative group"
              data-testid="link-results"
            >
              Results
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-300 group-hover:w-full transition-all duration-200"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="btn-cta"
              data-testid="button-cta-nav"
            >
              Free Revenue Audit →
            </button>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 text-white hover:text-yellow-300 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-white/20 hero-gradient opacity-95">
            <div className="flex flex-col space-y-6">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="text-left text-white hover:text-yellow-300 font-semibold text-lg transition-colors duration-200"
                data-testid="link-mobile-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('problem')} 
                className="text-left text-white hover:text-yellow-300 font-semibold text-lg transition-colors duration-200"
                data-testid="link-mobile-assessment"
              >
                Assessment
              </button>
              <button 
                onClick={() => scrollToSection('solution')} 
                className="text-left text-white hover:text-yellow-300 font-semibold text-lg transition-colors duration-200"
                data-testid="link-mobile-system"
              >
                90-Day System
              </button>
              <button 
                onClick={() => scrollToSection('results')} 
                className="text-left text-white hover:text-yellow-300 font-semibold text-lg transition-colors duration-200"
                data-testid="link-mobile-results"
              >
                Results
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn-cta w-fit"
                data-testid="button-mobile-cta"
              >
                Free Revenue Audit →
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}