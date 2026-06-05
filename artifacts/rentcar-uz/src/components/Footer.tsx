import { CarFront, Facebook, Instagram, Send, MapPin, Phone, Mail } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#0A0E1A] border-t border-white/10 pt-16 pb-8" id="yordam">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <CarFront className="w-8 h-8 text-primary group-hover:text-primary/80 transition-colors" />
              <span className="font-display font-bold text-xl tracking-wider text-white">
                RentCar <span className="text-primary">UZ</span>
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              O'zbekistondagi premium avtomobillar ijarasi tarmog'i. Ishonchlilik va sifat bizning ustuvorligimiz.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Send className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Sahifalar</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="/" className="hover:text-primary transition-colors">Bosh Sahifa</a></li>
              <li><a href="#mashinalar" className="hover:text-primary transition-colors">Mashinalar</a></li>
              <li><a href="#xizmatlar" className="hover:text-primary transition-colors">Xizmatlar</a></li>
              <li><a href="#yordam" className="hover:text-primary transition-colors">Yordam</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Kabinet</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Turlar</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Premium Sedan</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Sport & Cabrio</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Yo'ltanlamas SUV</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Elektr avtolar</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-white mb-6 uppercase tracking-wider">Bog'lanish</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Toshkent shahri, Amir Temur shoh ko'chasi 108-uy</span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+998 71 123-45-67</span>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@rentcar.uz</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2025 RentCar O'zbekistan. Barcha huquqlar himoyalangan.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">Maxfiylik siyosati</a>
            <a href="#" className="hover:text-white">Foydalanish shartlari</a>
          </div>
        </div>
      </div>
    </footer>
  );
}