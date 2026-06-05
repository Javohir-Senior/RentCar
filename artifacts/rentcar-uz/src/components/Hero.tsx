import { Button } from "@/components/ui/button";
import { CarCanvas } from "./CarCanvas";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-[100dvh] flex items-center pt-24 overflow-hidden">
      {/* Background with manga/anime styling */}
      <div className="absolute inset-0 z-0 bg-[#0A0E1A]">
        {/* Halftone dots pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at center, #ffffff 1px, transparent 1.5px)',
          backgroundSize: '16px 16px'
        }} />
        
        {/* Diagonal speed lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5" style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #ffffff 10px, #ffffff 12px)'
        }} />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 opacity-5" style={{
          background: 'repeating-linear-gradient(45deg, transparent, transparent 20px, #ffffff 20px, #ffffff 21px)'
        }} />
        
        {/* Radial gradient overlay for focus */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0A0E1A_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6"
          >
            <div className="inline-flex items-center gap-2">
              <span className="h-px w-8 bg-primary"></span>
              <span className="text-primary font-display text-sm tracking-[0.3em] uppercase">Premium Avtomobil Ijarasi</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight text-white drop-shadow-lg">
              Sayohatni <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">ushbu yerdan</span> <br/>
              boshlang!
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-xl leading-relaxed">
              O'zbekistonda eng yaxshi avtomobil ijara xizmati — sifat, ishonchlilik va qulaylik bir yerda. Manga illyustratsiyasi bilan bezatilgan premium darajadagi avtopark.
            </p>
            
            <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white font-display tracking-widest relative group overflow-hidden border border-transparent hover:border-primary/50 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all h-14 px-8"
                data-testid="button-hero-cta"
              >
                <span className="relative z-10">BRON QILISH</span>
                <div className="absolute inset-0 h-full w-0 bg-white/20 group-hover:w-full transition-all duration-500 ease-out z-0"></div>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10 mt-6">
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-1">500+</h4>
                <p className="text-sm text-muted-foreground">Avtomobil</p>
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-1">10k+</h4>
                <p className="text-sm text-muted-foreground">Mijoz</p>
              </div>
              <div>
                <h4 className="text-2xl font-display font-bold text-white mb-1">15</h4>
                <p className="text-sm text-muted-foreground">Yil Tajriba</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center"
          >
            {/* Ink stroke decorative elements */}
            <div className="absolute top-10 right-10 w-32 h-32 border-t-2 border-r-2 border-primary/30 rounded-tr-3xl" />
            <div className="absolute bottom-10 left-10 w-32 h-32 border-b-2 border-l-2 border-primary/30 rounded-bl-3xl" />
            
            <CarCanvas />
          </motion.div>

        </div>
      </div>
    </section>
  );
}