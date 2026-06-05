import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
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
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? "bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5 py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex flex-col items-center group cursor-pointer" data-testid="link-logo">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center">
              <span className="font-serif-light italic text-[#C9A84C] text-xl">R</span>
            </div>
            <span className="font-serif-light italic text-2xl tracking-wide text-[#F5F0E8]">
              RentCar O'zbekistan
            </span>
          </div>
          <span className="text-[10px] tracking-[0.3em] uppercase text-[#888880] mt-1">Premium Avtopark</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-xs font-sans font-normal tracking-widest text-[#F5F0E8] relative group py-2"
              data-testid={`link-nav-${link.name.toLowerCase()}`}
            >
              {link.name}
              <span className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-[#C9A84C] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0 origin-center" />
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button 
            variant="outline" 
            className="border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] font-sans text-xs tracking-widest transition-colors duration-300 h-10 px-8"
            data-testid="button-kabinet"
          >
            KIRISH
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-[#F5F0E8] p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="button-mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-[#0A0A0A]/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-[400px] py-6" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-sm font-sans tracking-widest text-[#F5F0E8]"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            variant="outline" 
            className="w-48 border-[#C9A84C]/50 text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] mt-4 tracking-widest"
          >
            KIRISH
          </Button>
        </div>
      </div>
    </header>
  );
}