import { Button } from "@/components/ui/button";
import { Gauge, Users, Fuel, ArrowRight } from "lucide-react";

const cars = [
  {
    id: 1,
    name: "BMW 7 Series",
    category: "Premium Sedan",
    price: "1,200,000",
    speed: "250",
    seats: 4,
    fuel: "Benzin",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80"
  },
  {
    id: 2,
    name: "Mercedes S-Class",
    category: "Premium Sedan",
    price: "1,500,000",
    speed: "250",
    seats: 4,
    fuel: "Gibrid",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80"
  },
  {
    id: 3,
    name: "Porsche Cayenne",
    category: "Luxury SUV",
    price: "950,000",
    speed: "280",
    seats: 5,
    fuel: "Benzin",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=600&q=80"
  },
  {
    id: 4,
    name: "Range Rover",
    category: "Luxury SUV",
    price: "1,100,000",
    speed: "240",
    seats: 5,
    fuel: "Dizel",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
  },
  {
    id: 5,
    name: "Audi A8",
    category: "Premium Sedan",
    price: "1,050,000",
    speed: "250",
    seats: 4,
    fuel: "Benzin",
    image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&q=80"
  },
  {
    id: 6,
    name: "Tesla Model S",
    category: "Elektr",
    price: "850,000",
    speed: "320",
    seats: 5,
    fuel: "Elektr",
    image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&q=80"
  }
];

export function CarGrid() {
  return (
    <section className="py-24 bg-[#0A0A0A]" id="mashinalar">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-16">
          <span className="font-sans text-xs tracking-[0.2em] text-[#C9A84C] uppercase mb-4">
            BIZNING AVTOPARK
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-semibold text-white mb-6">
            Tanlangan Premium Avtomobillar
          </h2>
          <div className="divider-gold w-24"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="group card-luxury relative overflow-hidden"
              data-testid={`car-card-${car.id}`}
            >
              <div className="h-56 w-full relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent"></div>
              </div>

              <div className="p-8 relative">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 border border-[#C9A84C]/40 text-[#C9A84C] text-[10px] uppercase tracking-widest mb-3 rounded-full">
                      {car.category}
                    </span>
                    <h3 className="text-2xl font-display font-semibold text-white tracking-wide">{car.name}</h3>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-[#888880] font-sans text-sm mb-1">Kunlik tarif</p>
                  <p className="text-[#F5F0E8] font-sans text-lg">{car.price} UZS <span className="text-xs text-[#555550]">/ kun</span></p>
                </div>

                <div className="flex justify-between py-4 border-t border-b border-white/[0.04] mb-8">
                  <div className="flex items-center gap-2 text-[#888880]">
                    <Gauge className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs font-sans">{car.speed}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888880]">
                    <Users className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs font-sans">{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-2 text-[#888880]">
                    <Fuel className="w-4 h-4 text-[#C9A84C]" />
                    <span className="text-xs font-sans">{car.fuel}</span>
                  </div>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center text-[#C9A84C] font-sans text-xs uppercase tracking-widest font-semibold group/btn"
                >
                  BRON QILISH
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover/btn:translate-x-2" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" className="border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-black rounded-none px-10 h-14 font-sans text-xs tracking-widest uppercase">
            BARCHA AVTOMOBILLARNI KO'RISH
          </Button>
        </div>
      </div>
    </section>
  );
}