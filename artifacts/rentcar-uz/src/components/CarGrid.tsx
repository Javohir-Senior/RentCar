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
    <section className="py-24 bg-[#080C10]">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <span className="font-sans text-xs tracking-widest text-[#0099FF] uppercase mb-2 block">
            BIZNING AVTOPARK
          </span>
          <h2 className="font-display font-light text-4xl md:text-5xl text-white">
            Premium Avtomobillar
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car) => (
            <div 
              key={car.id}
              className="group bg-[#0E1318] border border-white/5 transition-colors duration-300 hover:border-[#0099FF]/25 rounded-none overflow-hidden"
              data-testid={`car-card-${car.id}`}
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover filter grayscale-[25%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <div className="text-[10px] text-[#0099FF] uppercase tracking-widest mb-2 font-medium">
                  {car.category}
                </div>
                
                <h3 className="font-display font-normal text-lg text-white mb-1">
                  {car.name}
                </h3>
                
                <div className="text-sm text-white/60 mb-3">
                  {car.price} UZS / kun
                </div>

                <div className="h-[1px] w-full bg-white/5 my-3"></div>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Gauge className="w-3 h-3 text-white/40" />
                    <span className="text-xs font-sans">{car.speed}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Users className="w-3 h-3 text-white/40" />
                    <span className="text-xs font-sans">{car.seats}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-white/60">
                    <Fuel className="w-3 h-3 text-white/40" />
                    <span className="text-xs font-sans">{car.fuel}</span>
                  </div>
                </div>

                <a 
                  href="#" 
                  className="inline-flex items-center text-[#0099FF] hover:text-[#33BBFF] font-sans text-xs uppercase tracking-widest transition-colors group/link"
                >
                  BRON QILISH
                  <ArrowRight className="w-3 h-3 ml-1.5 transition-transform group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}