import { Link } from 'wouter'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-2xl font-bold mb-4" data-testid="text-footer-brand">Simple</div>
            <p className="text-gray-400 mb-6">
              Revenue operations frameworks for predictable, scalable revenue.<br />
              Delivering actual solutions.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-400 hover:text-white cursor-pointer" data-testid="link-footer-home">Home</span>
                </Link>
              </li>
              <li>
                <Link href="/services">
                  <span className="text-gray-400 hover:text-white cursor-pointer" data-testid="link-footer-services">Services</span>
                </Link>
              </li>
              <li>
                <Link href="/company">
                  <span className="text-gray-400 hover:text-white cursor-pointer" data-testid="link-footer-company">Company</span>
                </Link>
              </li>
              <li>
                <Link href="/book-strategy-call">
                  <span className="text-gray-400 hover:text-white cursor-pointer" data-testid="link-footer-book-call">Book a Strategy Call</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">hello@simplerevenue.io 👋</li>
              <li className="text-gray-400">+1 650-485-1632</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Simple, LLC. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy">
                <span className="text-gray-400 hover:text-white text-sm cursor-pointer" data-testid="link-footer-privacy">Privacy Policy</span>
              </Link>
              <Link href="/terms">
                <span className="text-gray-400 hover:text-white text-sm cursor-pointer" data-testid="link-footer-terms">Terms of Use</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
