import { Button } from "@/components/ui/button";
import { CarCanvas } from "./CarCanvas";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden bg-[#0A0A0A]">
      {/* Background Textures */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1A1A14_0%,#0A0A0A_100%)] opacity-80" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-tr from-white/[0.02] to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <div className="inline-flex items-center gap-4">
              <span className="h-[1px] w-12 bg-[#C9A84C]"></span>
              <span className="text-[#C9A84C] font-serif-light italic text-lg md:text-xl tracking-wide">
                — Premium Avtomobil Ijarasi
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-white">
              Sayohatni <br/>
              ushbu yerdan boshlang!
            </h1>
            
            <p className="text-[#888880] font-sans font-light text-lg max-w-md leading-relaxed">
              O'zbekistondagi eng yaxshi premium avtomobil ijara xizmati. Toshkentdan dunyoning istalgan nuqtasiga.
            </p>
            
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Button 
                className="bg-[#C9A84C] hover:bg-[#E8C97A] text-black font-sans tracking-widest text-xs font-semibold uppercase h-14 px-8 transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                data-testid="button-hero-book"
              >
                BRON QILISH
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:text-[#C9A84C] font-sans tracking-widest text-xs font-semibold uppercase h-14 px-8 transition-all"
                data-testid="button-hero-fleet"
              >
                PARKNI KO'RISH
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-10 mt-4 border-t border-white/10">
              <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-display font-semibold text-white">500+</h4>
                <p className="font-serif-light text-[#888880] text-lg">Avtomobil</p>
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/50 to-transparent"></div>
              <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-display font-semibold text-white">10,000+</h4>
                <p className="font-serif-light text-[#888880] text-lg">Mijoz</p>
              </div>
              <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/50 to-transparent"></div>
              <div className="flex flex-col gap-1">
                <h4 className="text-3xl font-display font-semibold text-white">15 Yil</h4>
                <p className="font-serif-light text-[#888880] text-lg">Tajriba</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="relative w-full flex justify-center items-center"
          >
            {/* Halo Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[radial-gradient(circle,rgba(201,168,76,0.1)_0%,transparent_70%)] pointer-events-none rounded-full" />
            
            <CarCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}