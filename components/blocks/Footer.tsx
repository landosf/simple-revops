export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-width">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold gradient-text mb-4">Simple</h3>
            <p className="text-gray-300 mb-6 text-balance">
              Transform your revenue operations with our proven 90-day recovery system. 
              Stop revenue chaos and build predictable growth.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:hello@simple-revenue.com" className="text-gray-300 hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#problem" className="hover:text-white transition-colors">Revenue Audit</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">90-Day Recovery</a></li>
              <li><a href="#results" className="hover:text-white transition-colors">Case Studies</a></li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#results" className="hover:text-white transition-colors">Results</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            © 2024 Simple Revenue Operations. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}