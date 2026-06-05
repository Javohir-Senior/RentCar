import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function Testimonials() {
  const testimonials = [
    {
      initials: "AO",
      name: "Alisher Oripov",
      quote: "Xizmat ko'rsatish darajasi juda yuqori. Mashinalar toza va yangi holatda berildi. Tavsiya qilaman!",
      rating: 5
    },
    {
      initials: "DK",
      name: "Dilnoza Karimovna",
      quote: "Biznes hamkorlarimni kutib olish uchun Premium sedan oldim. Haydovchi o'z vaqtida keldi, rahmat.",
      rating: 5
    },
    {
      initials: "RU",
      name: "Rustam Umarov",
      quote: "Toshkentdan Samarqandga sayohat uchun SUV qulay keldi. Narxlar ham mijozbop.",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Mijozlarimiz Fikri</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6 mx-auto"></div>
        </div>

        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 md:grid md:grid-cols-3 md:overflow-visible">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="min-w-[85%] md:min-w-0 snap-center bg-card border border-white/5 p-8 rounded-2xl relative"
            >
              <div className="absolute top-6 right-6 text-6xl font-display text-white/5">"</div>
              
              <div className="flex gap-1 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic mb-8 relative z-10">"{t.quote}"</p>
              
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12 border-2 border-primary/20">
                  <AvatarFallback className="bg-[#1A2235] text-primary font-display">{t.initials}</AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">Mijoz</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}