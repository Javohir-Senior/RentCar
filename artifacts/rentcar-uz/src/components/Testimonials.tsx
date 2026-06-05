import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      name: "Alisher Oripov",
      quote: "Xizmat ko'rsatish darajasi juda yuqori. Mashinalar toza va yangi holatda berildi. Har bir detalida premium his qilinadi.",
      rating: 5,
      role: "Mijoz"
    },
    {
      name: "Dilnoza Karimovna",
      quote: "Biznes hamkorlarimni kutib olish uchun Premium sedan oldim. Haydovchi o'z vaqtida keldi, xizmat benuqson.",
      rating: 5,
      role: "Tadbirkor"
    },
    {
      name: "Rustam Umarov",
      quote: "Toshkentdan Samarqandga sayohat uchun SUV qulay keldi. Avtomobil holati va xodimlar muomalasi a'lo darajada.",
      rating: 5,
      role: "Sayyoh"
    }
  ];

  return (
    <section className="py-24 bg-[#0E1318]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="font-display font-light text-4xl md:text-5xl text-white">
            Mijozlarimiz fikri
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div 
              key={idx} 
              className="bg-[#141B22] border border-white/5 p-8 flex flex-col justify-between"
            >
              <div className="mb-8">
                <p className="font-sans font-light italic text-white/80 text-sm leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              
              <div className="flex items-end justify-between border-t border-white/5 pt-6">
                <div>
                  <h4 className="font-display font-normal text-white text-lg">{t.name}</h4>
                  <span className="font-sans text-xs text-white/40">{t.role}</span>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#0099FF] text-[#0099FF]" />
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