import { CarCanvas } from "./CarCanvas";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] bg-[#080C10] overflow-hidden pt-14">
      <div className="absolute inset-0 grid lg:grid-cols-2 gap-0">
        
        {/* Left Content */}
        <div className="relative z-10 flex flex-col justify-center px-[clamp(24px,6vw,96px)] py-20 lg:py-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <span className="text-[#0099FF] text-xs uppercase tracking-[0.3em] font-medium">
              PREMIUM AVTOMOBIL IJARASI
            </span>
            
            <h1 className="font-display font-light text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-none">
              Sayohatni ushbu<br/>
              <span className="pl-4 md:pl-8 lg:pl-12">yerdan boshlang!</span>
            </h1>
            
            <p className="font-sans font-light text-[#B8C4CC] max-w-sm text-sm leading-relaxed mt-4">
              O'zbekistondagi eng premium avtomobil ijara xizmati. Toshkentdan dunyoning istalgan nuqtasiga.
            </p>
            
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button 
                className="btn-bmw-primary w-full sm:w-auto text-center"
                data-testid="button-hero-book"
              >
                BRON QILISH
              </button>
              <button 
                className="btn-bmw-ghost w-full sm:w-auto text-center"
                data-testid="button-hero-fleet"
              >
                PARKNI KO'RISH
              </button>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex items-center">
              <div className="flex-1 flex flex-col gap-1 pr-6 border-r border-white/10">
                <h4 className="font-display font-light text-3xl text-white">500+</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">AVTOMOBIL</p>
              </div>
              <div className="flex-1 flex flex-col gap-1 px-6 border-r border-white/10">
                <h4 className="font-display font-light text-3xl text-white">10,000+</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">MIJOZ</p>
              </div>
              <div className="flex-1 flex flex-col gap-1 pl-6">
                <h4 className="font-display font-light text-3xl text-white">15 YIL</h4>
                <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-white/40">TAJRIBA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Canvas */}
        <div className="relative h-[60vh] lg:h-full bg-gradient-to-tr from-[#0E1B2A] to-[#080C10]">
          {/* Subtle blue glow */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-20 bg-[radial-gradient(circle,rgba(0,153,255,0.1)_0%,transparent_70%)] blur-3xl pointer-events-none" />
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="w-full h-full relative"
          >
            <CarCanvas />
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}