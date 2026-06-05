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
      icon: <Car className="w-6 h-6 text-[#0099FF]" strokeWidth={1.5} />,
      number: 500,
      suffix: "+",
      title: "Keng tanlov",
      desc: "Barcha toifadagi eng so'nggi premium rusumdagi avtomobillar parki."
    },
    {
      icon: <Clock className="w-6 h-6 text-[#0099FF]" strokeWidth={1.5} />,
      number: 24,
      suffix: "/7",
      title: "Doim yordamda",
      desc: "Kunning istalgan vaqtida professional texnik va informatsion yordam."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#0099FF]" strokeWidth={1.5} />,
      number: 100,
      suffix: "%",
      title: "Eng yaxshi narxlar",
      desc: "Premium xizmat uchun raqobatbardosh va shaffof narxlash."
    },
    {
      icon: <Zap className="w-6 h-6 text-[#0099FF]" strokeWidth={1.5} />,
      number: 1,
      suffix: " soat",
      title: "1 soat ichida",
      desc: "Avtomobilni ko'rsatilgan manzilga qisqa vaqt ichida yetkazib berish."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#0E1318]" id="xizmatlar">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="font-sans text-xs tracking-widest text-[#0099FF] uppercase mb-2 block">
            NIMA UCHUN BIZ?
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white">
            Afzalliklarimiz
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-[#141B22] border border-white/5 p-8 group relative transition-colors duration-300 rounded-none"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-[#0099FF] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              
              <div className="mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
                {feat.icon}
              </div>
              <h3 className="font-display font-light text-3xl text-white mb-2 flex items-baseline">
                <Counter target={feat.number} visible={isVisible} />
                <span className="text-xl text-[#0099FF] ml-1">{feat.suffix}</span>
              </h3>
              <h4 className="font-sans text-xs uppercase tracking-widest text-white/40 mb-3">{feat.title}</h4>
              <p className="text-[#6B7A84] text-sm leading-relaxed font-light">{feat.desc}</p>
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