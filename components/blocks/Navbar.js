'use client'
import { useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Simple
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
            
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link href="/services/infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Infrastructure</Link>
                  <Link href="/services/analytics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Analytics</Link>
                  <Link href="/services/strategy" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Strategy</Link>
                </div>
              </div>
            </div>
            
            <Link href="/company" className="text-gray-700 hover:text-blue-600 transition-colors">Company</Link>
            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">Blog</Link>
            <Button size="sm">Book a Call</Button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link href="/services/infrastructure" className="text-gray-700 hover:text-blue-600">Infrastructure</Link>
              <Link href="/services/analytics" className="text-gray-700 hover:text-blue-600">Analytics</Link>
              <Link href="/services/strategy" className="text-gray-700 hover:text-blue-600">Strategy</Link>
              <Link href="/company" className="text-gray-700 hover:text-blue-600">Company</Link>
              <Link href="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Button className="w-fit">Book a Call</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}