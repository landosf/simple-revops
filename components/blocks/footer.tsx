import { Container } from "@/components/ui/container";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-card border-t border-border py-16">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <span className="text-2xl font-bold gradient-text mb-4 block" data-testid="footer-logo">
                Simple Revenue
              </span>
              <p className="text-muted-foreground mb-6 max-w-md">
                Unifying revenue ecosystems for sustainable, measurable growth. Transform misaligned teams into revenue machines.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="social-linkedin"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  data-testid="social-twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Navigation Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Services</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-foreground transition-colors text-left" data-testid="footer-infrastructure">Revenue Infrastructure</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-foreground transition-colors text-left" data-testid="footer-analytics">Analytics & BI</button></li>
                <li><button onClick={() => scrollToSection('solution')} className="hover:text-foreground transition-colors text-left" data-testid="footer-strategy">Strategy & GTM</button></li>
              </ul>
            </div>
            
            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Company</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors" data-testid="footer-about">About Us</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors" data-testid="footer-blog">Blog</a></li>
                <li><button onClick={() => scrollToSection('contact')} className="hover:text-foreground transition-colors text-left" data-testid="footer-contact">Contact</button></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-border mt-12 pt-8 text-center">
            <p className="text-muted-foreground" data-testid="copyright">
              © 2025 Simple. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
