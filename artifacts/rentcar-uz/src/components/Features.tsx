import { useState, useEffect, useRef } from "react";
import { Car, Clock, ShieldCheck, Zap } from "lucide-react";

export function Features() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Car className="w-8 h-8 text-[#C9A84C]" strokeWidth={1.5} />,
      number: 500,
      suffix: "+",
      title: "Keng tanlov",
      desc: "Barcha toifadagi eng so'nggi premium rusumdagi avtomobillar parki."
    },
    {
      icon: <Clock className="w-8 h-8 text-[#C9A84C]" strokeWidth={1.5} />,
      number: 24,
      suffix: "/7",
      title: "Doim yordamda",
      desc: "Kunning istalgan vaqtida professional texnik va informatsion yordam."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#C9A84C]" strokeWidth={1.5} />,
      number: 100,
      suffix: "%",
      title: "Eng yaxshi narxlar",
      desc: "Premium xizmat uchun raqobatbardosh va shaffof narxlash."
    },
    {
      icon: <Zap className="w-8 h-8 text-[#C9A84C]" strokeWidth={1.5} />,
      number: 1,
      suffix: " soat",
      title: "1 soat ichida",
      desc: "Avtomobilni ko'rsatilgan manzilga qisqa vaqt ichida yetkazib berish."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0A0A0A] border-t border-white/[0.04]" id="xizmatlar">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <span className="font-sans text-xs tracking-[0.2em] text-[#C9A84C] uppercase mb-4 block">
            AFZALLIKLARIMIZ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
            Nima uchun RentCar?
          </h2>
          <div className="divider-gold w-24 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-[#111111] border border-white/[0.04] p-10 group hover:border-[#C9A84C]/50 transition-colors duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="mb-8">
                {feat.icon}
              </div>
              <h3 className="text-3xl font-display font-semibold text-white mb-2 flex items-baseline gap-1">
                <Counter target={feat.number} visible={isVisible} /><span className="text-xl font-serif-light text-[#C9A84C]">{feat.suffix}</span>
              </h3>
              <h4 className="text-lg font-sans font-medium text-[#F5F0E8] mb-4 uppercase tracking-widest text-xs">{feat.title}</h4>
              <p className="text-[#888880] text-sm leading-relaxed font-light">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Counter({ target, visible }: { target: number; visible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    
    let start = 0;
    const duration = 2000; 
    const increment = target / (duration / 16); // 60fps

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, visible]);

  return <span>{count}</span>;
}