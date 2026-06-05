import { Button } from "@/components/ui/button";
import { Gauge, Users, Fuel } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "SUV Max",
    category: "SUV",
    price: "450,000",
    speed: "220",
    seats: 7,
    fuel: "Benzin",
    color: "#3B82F6", // blue
    bgGradient: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(17,24,39,1))",
    bgPattern: "radial-gradient(circle at top right, rgba(59,130,246,0.2) 0%, transparent 60%)"
  },
  {
    id: 2,
    name: "Sport Convertible",
    category: "Sport",
    price: "850,000",
    speed: "320",
    seats: 2,
    fuel: "Benzin",
    color: "#EF4444", // red
    bgGradient: "linear-gradient(135deg, rgba(239,68,68,0.1), rgba(17,24,39,1))",
    bgPattern: "linear-gradient(45deg, transparent 48%, rgba(239,68,68,0.1) 49%, rgba(239,68,68,0.1) 51%, transparent 52%)"
  },
  {
    id: 3,
    name: "Elektr Sedan",
    category: "Elektr",
    price: "350,000",
    speed: "250",
    seats: 5,
    fuel: "Elektr",
    color: "#10B981", // green
    bgGradient: "linear-gradient(135deg, rgba(16,185,129,0.1), rgba(17,24,39,1))",
    bgPattern: "radial-gradient(circle at center, rgba(16,185,129,0.15) 0%, transparent 70%)"
  },
  {
    id: 4,
    name: "Premium Biznes",
    category: "Biznes",
    price: "600,000",
    speed: "260",
    seats: 4,
    fuel: "Gibrid",
    color: "#F59E0B", // gold
    bgGradient: "linear-gradient(135deg, rgba(245,158,11,0.1), rgba(17,24,39,1))",
    bgPattern: "repeating-linear-gradient(90deg, transparent, transparent 20px, rgba(245,158,11,0.05) 20px, rgba(245,158,11,0.05) 21px)"
  },
  {
    id: 5,
    name: "Kompakt Plus",
    category: "Sedan",
    price: "250,000",
    speed: "180",
    seats: 5,
    fuel: "Benzin",
    color: "#C0C8DC", // silver
    bgGradient: "linear-gradient(135deg, rgba(192,200,220,0.1), rgba(17,24,39,1))",
    bgPattern: "linear-gradient(180deg, rgba(192,200,220,0.1) 0%, transparent 100%)"
  },
  {
    id: 6,
    name: "Offroad Pro",
    category: "Offroad",
    price: "500,000",
    speed: "200",
    seats: 5,
    fuel: "Dizel",
    color: "#F97316", // orange
    bgGradient: "linear-gradient(135deg, rgba(249,115,22,0.1), rgba(17,24,39,1))",
    bgPattern: "radial-gradient(circle at bottom left, rgba(249,115,22,0.2) 0%, transparent 60%)"
  }
];

export function CarGrid() {
  return (
    <section className="py-20 bg-background" id="mashinalar">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">Bizning Avtomobillar</h2>
          <div className="w-24 h-1 bg-primary rounded-full mb-6"></div>
          <p className="text-muted-foreground max-w-2xl">
            Har qanday ehtiyoj uchun mukammal avtomobil. Sport avtomobillaridan tortib, oilaviy SUV largacha.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="group bg-card rounded-2xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20 relative"
              data-testid={`car-card-${car.id}`}
            >
              {/* Manga/Anime stylized background area */}
              <div 
                className="h-48 w-full relative overflow-hidden flex items-center justify-center border-b border-white/5"
                style={{ background: car.bgGradient }}
              >
                <div className="absolute inset-0 opacity-50 group-hover:translate-x-2 transition-transform duration-700" style={{ background: car.bgPattern }}></div>
                {/* Silhouette placeholder for car (since no images) */}
                <div className="relative z-10 w-3/4 h-24 bg-gradient-to-r from-black/40 to-transparent blur-md absolute bottom-4 rounded-[100%]"></div>
                <div className="relative z-20 font-display text-5xl font-black italic opacity-20 text-white select-none pointer-events-none tracking-tighter" style={{ color: car.color }}>
                  {car.category.toUpperCase()}
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 font-display">{car.name}</h3>
                    <span 
                      className="text-xs font-semibold px-2 py-1 rounded-sm uppercase tracking-wider border"
                      style={{ color: car.color, borderColor: `${car.color}40`, backgroundColor: `${car.color}10` }}
                    >
                      {car.category}
                    </span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground mb-1">Kunlik</p>
                    <p className="text-lg font-bold text-white">{car.price} <span className="text-xs font-normal">UZS</span></p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 py-4 border-y border-white/5 mb-6">
                  <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
                    <Gauge className="w-5 h-5" />
                    <span className="text-xs">{car.speed} km/h</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground border-x border-white/5">
                    <Users className="w-5 h-5" />
                    <span className="text-xs">{car.seats} o'rindiq</span>
                  </div>
                  <div className="flex flex-col items-center justify-center gap-1 text-muted-foreground">
                    <Fuel className="w-5 h-5" />
                    <span className="text-xs">{car.fuel}</span>
                  </div>
                </div>

                <Button className="w-full bg-white/5 hover:bg-primary text-white border border-white/10 hover:border-primary transition-colors font-display tracking-widest">
                  BRON QILISH
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}