import { Instagram, Send, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-[#C9A84C]/30 pt-20 pb-10" id="yordam">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-20">
          
          <div className="md:col-span-4">
            <Link href="/" className="flex flex-col group cursor-pointer mb-6">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full border border-[#C9A84C] flex items-center justify-center">
                  <span className="font-serif-light italic text-[#C9A84C] text-lg">R</span>
                </div>
                <span className="font-serif-light italic text-xl tracking-wide text-[#F5F0E8]">
                  RentCar
                </span>
              </div>
            </Link>
            <p className="text-[#888880] font-sans font-light text-sm leading-relaxed mb-8 max-w-sm">
              O'zbekistondagi premium avtomobillar ijarasi tarmog'i. Hashamat, ishonchlilik va oliy darajadagi xizmat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] text-white transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] text-white transition-colors">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-sans text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Kompaniya</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-[#888880]">
              <li><a href="/" className="hover:text-white transition-colors">Biz haqimizda</a></li>
              <li><a href="#mashinalar" className="hover:text-white transition-colors">Avtopark</a></li>
              <li><a href="#xizmatlar" className="hover:text-white transition-colors">Xizmatlar</a></li>
              <li><a href="#yordam" className="hover:text-white transition-colors">Kontaktlar</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Kategoriyalar</h4>
            <ul className="space-y-4 text-sm font-sans font-light text-[#888880]">
              <li><a href="#" className="hover:text-white transition-colors">Premium Sedan</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Luxury SUV</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sport & Cabriolet</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biznes Klass</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-sans text-[#C9A84C] text-xs font-semibold uppercase tracking-[0.2em] mb-8">Bog'lanish</h4>
            <ul className="space-y-5 text-sm font-sans font-light text-[#888880]">
              <li className="flex gap-4 items-start">
                <MapPin className="w-5 h-5 text-[#C9A84C] shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="leading-relaxed">Toshkent shahri,<br/>Amir Temur shoh ko'chasi 108-uy</span>
              </li>
              <li className="flex gap-4 items-center">
                <Phone className="w-5 h-5 text-[#C9A84C] shrink-0" strokeWidth={1.5} />
                <span>+998 71 123-45-67</span>
              </li>
              <li className="flex gap-4 items-center">
                <Mail className="w-5 h-5 text-[#C9A84C] shrink-0" strokeWidth={1.5} />
                <span>concierge@rentcar.uz</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-[#555550] tracking-wider">
          <p>© 2025 RentCar O'zbekistan. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#888880] transition-colors">Maxfiylik Siyosati</a>
            <a href="#" className="hover:text-[#888880] transition-colors">Foydalanish Shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}