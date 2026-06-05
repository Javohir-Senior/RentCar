import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 h-14 flex items-center ${
        scrolled ? "bg-[#080C10]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <Link href="/" className="flex items-center gap-1 group cursor-pointer" data-testid="link-logo">
          <span className="font-display font-bold text-xl text-white">RentCar</span>
          <span className="font-display font-bold text-xl text-[#0099FF]">UZ</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 h-full">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="font-sans text-xs uppercase tracking-widest text-white/70 hover:text-white transition-colors h-full flex items-center nav-link-bmw"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <button 
            className="btn-bmw-ghost py-2 px-6"
            data-testid="button-kabinet"
          >
            KIRISH
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#080C10]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-widest text-white/70 hover:text-white transition-colors uppercase"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button 
            className="btn-bmw-ghost w-48 mt-4"
          >
            KIRISH
          </button>
        </div>
      </div>
    </header>
  );
}