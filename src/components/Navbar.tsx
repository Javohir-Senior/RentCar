import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Menu, X, LogOut, User } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase.config";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [profileOpen, setProfileOpen] = useState(false); 
  const dropdownRef = useRef<any>(null);
  const navigate = useNavigate();


  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser:any) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setProfileOpen(false);
        setMobileMenuOpen(false);
        navigate("/");
      })
      .catch((err) => alert(err.message));
  };

  const navLinks = [
    { name: "BOSH SAHIFA", href: "/" },
    { name: "MASHINALAR", href: "#mashinalar" },
    { name: "XIZMATLAR", href: "#xizmatlar" },
    { name: "YORDAM", href: "#yordam" },
    { name: "BUYURTMALAR", href: "/buyurtmalar" }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-500 h-14 flex items-center ${
        scrolled ? "bg-[#080C10]/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-full">
        <Link to="/" className="flex items-center gap-1 group cursor-pointer" data-testid="link-logo">
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

        {/* Desktop Profil / Kirish qismi */}
        <div className="hidden md:block relative" ref={dropdownRef}>
          {user ? (
            <div>
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="w-9 h-9 rounded-full bg-blue-600 border border-gray-700 flex items-center justify-center overflow-hidden focus:outline-none hover:scale-105 transition-transform"
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Avatar" className="w-full h-full object-cover" />
                ) : (
                  <span className="text-white font-semibold text-sm uppercase">
                    {user.email ? user.email.charAt(0) : <User className="w-4 h-4" />}
                  </span>
                )}
              </button>

              {/* Chiqish menyusi (Dropdown) */}
              {profileOpen && (
                <div className="absolute right-0 mt-2 w-44 bg-[#111827] border border-gray-800 rounded-lg shadow-xl py-1 z-50 animate-in fade-in slide-in-from-top-1 duration-200">
                  <div className="px-4 py-2 text-xs text-gray-400 truncate border-b border-gray-800">
                    {user.email}
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center gap-2 px-4 py-2.5 text-sm text-red-400 hover:bg-gray-800 transition-colors text-left"
                  >
                    <LogOut className="w-4 h-4" />
                    Chiqish
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="btn-bmw-ghost py-2 px-6"
              data-testid="button-kabinet"
            >
              KIRISH
            </button>
          )}
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
          mobileMenuOpen ? "max-h-100 py-6" : "max-h-0"
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

          {/* Mobile versiyada tugma yoki chiqish logikasi */}
          {user ? (
            <div className="flex flex-col items-center gap-2 w-full px-6">
              <span className="text-xs text-gray-400 truncate max-w-50">{user.email}</span>
              <button
                onClick={handleLogout}
                className="w-48 py-2 px-6 text-sm font-semibold text-red-400 border border-red-500/30 bg-red-500/10 rounded-md hover:bg-red-500/20 transition-colors flex items-center justify-center gap-2"
              >
                <LogOut className="w-4 h-4" />
                CHIQUV
              </button>
            </div>
          ) : (
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigate("/login");
              }}
              className="btn-bmw-ghost w-48 mt-4"
            >
              KIRISH
            </button>
          )}
        </div>
      </div>
    </header>
  );
}