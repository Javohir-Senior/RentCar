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
      icon: <Car className="w-10 h-10 text-primary" />,
      number: 500,
      suffix: "+",
      title: "Keng Tanlov",
      desc: "Barcha toifadagi eng so'nggi rusumdagi avtomobillar parki."
    },
    {
      icon: <Clock className="w-10 h-10 text-primary" />,
      number: 24,
      suffix: "/7",
      title: "Mijozlarni Qo'llab",
      desc: "Kunning istalgan vaqtida texnik va informatsion yordam."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-primary" />,
      number: 100,
      suffix: "%",
      title: "To'liq Sug'urta",
      desc: "Xotirjam sayohat uchun har bir avtomobil to'liq sug'urtalangan."
    },
    {
      icon: <Zap className="w-10 h-10 text-primary" />,
      number: 1,
      suffix: " soat",
      title: "Tez Yetkazish",
      desc: "Avtomobilni ko'rsatilgan manzilga qisqa vaqt ichida yetkazamiz."
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 bg-[#111827] relative overflow-hidden" id="xizmatlar">
      {/* Decorative Manga lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(0deg,transparent_24%,rgba(255,255,255,.3)_25%,rgba(255,255,255,.3)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.3)_75%,rgba(255,255,255,.3)_76%,transparent_77%,transparent),linear-gradient(90deg,transparent_24%,rgba(255,255,255,.3)_25%,rgba(255,255,255,.3)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.3)_75%,rgba(255,255,255,.3)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Nima uchun biz?</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, idx) => (
            <div 
              key={idx} 
              className="bg-background/50 backdrop-blur-sm border border-white/10 p-8 rounded-2xl text-center group hover:bg-[#1A2235] transition-colors"
            >
              <div className="inline-flex items-center justify-center p-4 bg-white/5 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {feat.icon}
              </div>
              <h3 className="text-4xl font-display font-bold text-white mb-2">
                <Counter target={feat.number} visible={isVisible} />{feat.suffix}
              </h3>
              <h4 className="text-xl font-bold text-white mb-3">{feat.title}</h4>
              <p className="text-muted-foreground text-sm">{feat.desc}</p>
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