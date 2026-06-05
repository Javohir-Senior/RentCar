import { Instagram, Send, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0E13] border-t border-[rgba(0,153,255,0.2)] pt-16 pb-8" id="yordam">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
          
          <div className="md:col-span-4">
            <Link href="/" className="flex items-center gap-1 group cursor-pointer mb-6">
              <span className="font-display font-bold text-xl text-white">RentCar</span>
              <span className="font-display font-bold text-xl text-[#0099FF]">UZ</span>
            </Link>
            <p className="text-[#6B7A84] font-sans font-light text-sm leading-relaxed mb-8 max-w-sm">
              O'zbekistondagi premium avtomobillar ijarasi tarmog'i. Hashamat, ishonchlilik va oliy darajadagi xizmat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:border-[#0099FF] hover:text-[#0099FF] text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:border-[#0099FF] hover:text-[#0099FF] text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-none border border-white/10 flex items-center justify-center hover:border-[#0099FF] hover:text-[#0099FF] text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-[#0099FF] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Kompaniya</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-[#6B7A84]">
              <li><a href="/" className="hover:text-[#0099FF] transition-colors">Biz haqimizda</a></li>
              <li><a href="#mashinalar" className="hover:text-[#0099FF] transition-colors">Avtopark</a></li>
              <li><a href="#xizmatlar" className="hover:text-[#0099FF] transition-colors">Xizmatlar</a></li>
              <li><a href="#yordam" className="hover:text-[#0099FF] transition-colors">Kontaktlar</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-[#0099FF] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Kategoriyalar</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-[#6B7A84]">
              <li><a href="#" className="hover:text-[#0099FF] transition-colors">Premium Sedan</a></li>
              <li><a href="#" className="hover:text-[#0099FF] transition-colors">Luxury SUV</a></li>
              <li><a href="#" className="hover:text-[#0099FF] transition-colors">Sport & Cabriolet</a></li>
              <li><a href="#" className="hover:text-[#0099FF] transition-colors">Biznes Klass</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-[#0099FF] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Bog'lanish</h4>
            <ul className="space-y-5 text-sm font-sans font-light text-[#6B7A84]">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#0099FF] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed text-white/80">Toshkent shahri,<br/>Amir Temur shoh ko'chasi 108-uy</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#0099FF] shrink-0" strokeWidth={1.5} />
                <span className="text-white/80">+998 71 123-45-67</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#0099FF] shrink-0" strokeWidth={1.5} />
                <span className="text-white/80">concierge@rentcar.uz</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-white/30">
          <p>© 2025 RentCar O'zbekistan. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#0099FF] transition-colors">Maxfiylik Siyosati</a>
            <a href="#" className="hover:text-[#0099FF] transition-colors">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}