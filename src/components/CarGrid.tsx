import { collection, getDocs } from "firebase/firestore";
import { Gauge, Users, Fuel, ArrowRight, ExternalLink } from "lucide-react"; // ExternalLink ikonkasini qo'shdim
import { useEffect, useState } from "react";
import { db } from "../../firebase.config";
import { Link } from "react-router-dom";

export function CarGrid() {
  const [cars, setCars] = useState<any>([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    const getCol = collection(db, "cars");

    getDocs(getCol).then((res) => {
      const a: any = res.docs.map((itm: any) => {
        return { ...itm.data(), id: itm.id };
      });
      setCars(a);
    });
  };

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
          {cars.map((car: any) => {
            const isOutOfStock = car.count <= 0;

            return (
              <div
                key={car.id}
                className={`group bg-[#0E1318] border border-white/5 transition-colors duration-300 hover:border-[#0099FF]/25 rounded-none overflow-hidden ${
                  isOutOfStock ? "opacity-50 grayscale" : ""
                }`}
              >
                <div className="aspect-video w-full relative overflow-hidden">
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full h-full object-cover filter grayscale-[25%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white font-bold tracking-widest uppercase">
                      Tugagan
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <div className="text-[10px] text-[#0099FF] uppercase tracking-widest mb-2 font-medium flex justify-between">
                    <span>{car.category}</span>
                    <span className="text-white/40">
                      {isOutOfStock ? "Soni: 0" : `Soni: ${car.count}`}
                    </span>
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
                      <Gauge className="w-3 h-3" />{" "}
                      <span className="text-xs">{car.speed}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Users className="w-3 h-3" />{" "}
                      <span className="text-xs">{car.seats}</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-white/60">
                      <Fuel className="w-3 h-3" />{" "}
                      <span className="text-xs">{car.fuel}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mt-4">
                    {!isOutOfStock ? (
                      <Link
                        to={`/bronqilish/${car.id}`}
                        className="w-full py-2 bg-[#0099FF] hover:bg-[#0088EE] text-white text-center font-sans text-xs uppercase tracking-widest transition-colors flex items-center justify-center"
                      >
                        BRON QILISH <ArrowRight className="w-3 h-3 ml-2" />
                      </Link>
                    ) : (
                      <button
                        disabled
                        className="w-full py-2 bg-gray-800 text-gray-500 text-center font-sans text-xs uppercase tracking-widest cursor-not-allowed"
                      >
                        MASHINA QOLMAGAN
                      </button>
                    )}

                    <a
                      href={`https://en.wikipedia.org/wiki/${car.name.replace(/\s+/g, "_")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center text-white/40 hover:text-white font-sans text-[10px] uppercase tracking-widest transition-colors flex items-center justify-center gap-1"
                    >
                      Mashina haqida ma'lumot{" "}
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
