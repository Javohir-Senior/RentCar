import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alisher Oripov",
      quote: "Xizmat ko'rsatish darajasi juda yuqori. Mashinalar toza va yangi holatda berildi. Har bir detalida premium his qilinadi.",
      rating: 5
    },
    {
      name: "Dilnoza Karimovna",
      quote: "Biznes hamkorlarimni kutib olish uchun Premium sedan oldim. Haydovchi o'z vaqtida keldi, xizmat benuqson.",
      rating: 5
    },
    {
      name: "Rustam Umarov",
      quote: "Toshkentdan Samarqandga sayohat uchun SUV qulay keldi. Avtomobil holati va xodimlar muomalasi a'lo darajada.",
      rating: 5
    }
  ];

  return (
    <section className="py-32 bg-[#0A0A0A] relative border-t border-white/[0.04]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,#111111_0%,#0A0A0A_60%)] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-white mb-6">
            Mijozlarimiz fikri
          </h2>
          <div className="divider-gold w-16 mx-auto"></div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="flex-1 bg-[#111111] border border-[#C9A84C]/20 p-10 relative"
            >
              <div className="absolute -top-4 left-10 bg-[#0A0A0A] px-2 text-4xl font-serif-light text-[#C9A84C] italic leading-none">
                "
              </div>
              
              <p className="text-[#F5F0E8] font-serif-light italic text-xl leading-relaxed mb-8 relative z-10">
                {t.quote}
              </p>
              
              <div className="flex items-center justify-between border-t border-white/[0.06] pt-6">
                <div>
                  <h4 className="font-display font-semibold text-white tracking-wide">{t.name}</h4>
                  <span className="text-[10px] text-[#888880] uppercase tracking-widest">Premium Mijoz</span>
                </div>
                <div className="flex gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}