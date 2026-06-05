import { motion } from "framer-motion";

const FADE_UP = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function Hero() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden">

      {/* ── Video background ── */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        data-testid="hero-video"
      >
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-driving-a-modern-sports-car-at-high-speed-34710-large.mp4"
          type="video/mp4"
        />
        <source
          src="https://assets.mixkit.co/videos/preview/mixkit-sports-car-passing-by-in-blurred-light-trail-34695-large.mp4"
          type="video/mp4"
        />
      </video>

      {/* ── Dark overlay (top 40% → solid middle → bottom fade to page bg) ── */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#080C10]" />
      {/* Extra lateral vignette for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30" />

      {/* ── Navbar height spacer ── */}
      <div className="h-14" />

      {/* ── Main content ── */}
      <div className="relative z-10 h-[calc(100dvh-56px)] flex flex-col justify-between px-6 md:px-12 lg:px-20 xl:px-28 py-12">

        {/* Top: headline + buttons */}
        <div className="flex flex-col gap-5 max-w-3xl mt-8 lg:mt-16">

          <motion.span
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0}
            className="text-[#0099FF] text-[11px] uppercase tracking-[0.35em] font-medium"
          >
            Premium Avtomobil Ijarasi
          </motion.span>

          <motion.h1
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="font-display font-light leading-[0.95] text-white"
            style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
          >
            Sayohatni ushbu<br />
            <span className="pl-6 md:pl-12 lg:pl-20">yerdan boshlang!</span>
          </motion.h1>

          <motion.p
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.22}
            className="font-sans font-light text-white/60 text-sm leading-relaxed max-w-md mt-1"
          >
            O'zbekistondagi eng premium avtomobil ijara xizmati.
            Toshkentdan dunyoning istalgan nuqtasiga.
          </motion.p>

          <motion.div
            variants={FADE_UP}
            initial="hidden"
            animate="visible"
            custom={0.34}
            className="flex flex-col sm:flex-row gap-3 mt-4"
          >
            <button
              className="btn-bmw-primary"
              data-testid="button-hero-book"
            >
              BRON QILISH
            </button>
            <button
              className="btn-bmw-ghost"
              data-testid="button-hero-fleet"
            >
              PARKNI KO'RISH
            </button>
          </motion.div>
        </div>

        {/* Bottom: stats row — pinned above the page transition */}
        <motion.div
          variants={FADE_UP}
          initial="hidden"
          animate="visible"
          custom={0.5}
          className="flex items-end gap-0 border-t border-white/10 pt-6 pb-2 w-full max-w-lg"
        >
          <div className="flex-1 flex flex-col gap-1 pr-6 border-r border-white/10">
            <span className="font-display font-light text-2xl md:text-3xl text-white">500+</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Avtomobil</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 px-6 border-r border-white/10">
            <span className="font-display font-light text-2xl md:text-3xl text-white">10,000+</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Mijoz</span>
          </div>
          <div className="flex-1 flex flex-col gap-1 pl-6">
            <span className="font-display font-light text-2xl md:text-3xl text-white">15 Yil</span>
            <span className="font-sans text-[9px] uppercase tracking-[0.28em] text-white/35">Tajriba</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
