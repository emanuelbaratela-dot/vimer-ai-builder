import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navigation = [
    { name: "Início", href: "#inicio" },
    { name: "Coleções", href: "#colecoes" },
    { name: "Downloads", href: "#downloads" },
    { name: "Assistência", href: "#assistencia" },
    { name: "Suporte", href: "#suporte" },
    { name: "Newsletter", href: "#newsletter" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-vimer">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#inicio');
            }}
            className="flex items-center space-x-2 hover:opacity-90 transition-opacity"
          >
            <img 
              src="/lovable-uploads/f6c9363b-5d5d-4564-989a-4d4be4e5326a.png" 
              alt="Vimer - Metais Sanitários" 
              className="h-8 w-auto"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 gap-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-sm font-medium transition-colors hover:text-primary text-muted-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Spacer for layout balance */}
          <div className="hidden lg:block w-[140px]"></div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden animate-slide-in">
          <div className="container-vimer py-4 space-y-4">
            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block py-2 text-base font-medium text-foreground hover:text-primary"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.href);
                    }}
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;