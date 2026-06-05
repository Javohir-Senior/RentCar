import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "BOSH SAHIFA", href: "/" },
    { name: "MASHINALAR", href: "#mashinalar" },
    { name: "XIZMATLAR", href: "#xizmatlar" },
    { name: "YORDAM", href: "#yordam" }
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" data-testid="link-logo">
          <CarFront className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
          <span className="font-display font-bold text-xl tracking-wider text-foreground">
            RentCar <span className="text-primary">UZ</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest text-muted-foreground hover:text-foreground transition-colors relative group py-2"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-primary transition-all duration-300 ease-out group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="border-primary/50 text-primary hover:bg-primary hover:text-primary-foreground font-display tracking-wider"
            data-testid="button-kabinet"
          >
            KABINET
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[400px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-medium tracking-widest text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="w-48 border-primary/50 text-primary mt-2"
          >
            KABINET
          </Button>
        </div>
      </div>
    </header>
  );
}