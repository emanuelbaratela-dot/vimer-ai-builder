import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    {
      name: "Produtos",
      href: "/produtos",
      children: [
        { name: "Torneiras Lavatório", href: "/produtos/torneiras-lavatorio" },
        { name: "Torneiras Cozinha", href: "/produtos/torneiras-cozinha" },
        { name: "Misturadores", href: "/produtos/misturadores" },
        { name: "Ducha Higiênica", href: "/produtos/ducha-higienica" },
        { name: "Chuveiros", href: "/produtos/chuveiros" },
        { name: "Cubas Inox", href: "/produtos/cubas-inox" },
        { name: "Ralos", href: "/produtos/ralos" },
      ],
    },
    { name: "Coleções", href: "/colecoes" },
    { name: "Onde comprar", href: "/onde-comprar" },
    { name: "Downloads", href: "/downloads" },
    { name: "Suporte", href: "/suporte" },
    { name: "Institucional", href: "/institucional" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-vimer">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img 
              src="/lovable-uploads/f6c9363b-5d5d-4564-989a-4d4be4e5326a.png" 
              alt="Vimer - Metais Sanitários" 
              className="h-8 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList>
                {navigation.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    {item.children ? (
                      <>
                        <NavigationMenuTrigger className="bg-transparent">
                          {item.name}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                            {item.children.map((child) => (
                              <li key={child.name}>
                                <Link
                                  to={child.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">
                                    {child.name}
                                  </div>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </>
                    ) : (
                      <Link
                        to={item.href}
                        className={`text-sm font-medium transition-colors hover:text-primary ${
                          location.pathname === item.href
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      >
                        {item.name}
                      </Link>
                    )}
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-10 w-64"
              />
            </div>
            <Button variant="cta">Seja Revendedor</Button>
          </div>

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
            {/* Mobile Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="pl-10 w-full"
              />
            </div>

            {/* Mobile Navigation */}
            <nav className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block py-2 text-base font-medium text-foreground hover:text-primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mobile CTA */}
            <Button variant="cta" className="w-full">
              Seja Revendedor
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;