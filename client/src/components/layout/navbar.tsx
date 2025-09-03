import { useState, useEffect } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={cn(
      "sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border transition-shadow duration-200",
      isScrolled && "shadow-lg"
    )}>
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold gradient-text" data-testid="logo">
              Simple Revenue
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {/* Services Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium flex items-center" data-testid="nav-services">
                  Services
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => scrollToSection('solution')} data-testid="dropdown-infrastructure">
                    Revenue Infrastructure
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('solution')} data-testid="dropdown-analytics">
                    Analytics & BI
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => scrollToSection('solution')} data-testid="dropdown-strategy">
                    Strategy & GTM
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <a 
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                data-testid="nav-company"
              >
                Company
              </a>
              
              <a 
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium"
                data-testid="nav-blog"
              >
                Blog
              </a>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-foreground" data-testid="mobile-menu-button">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </nav>
  );
}
