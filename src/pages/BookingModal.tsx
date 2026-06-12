import { collection, doc, getDoc, addDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../../firebase.config";
import { useParams, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const BookingPage = () => {
  const [car, setCar] = useState<any>({});
  const { id } = useParams();
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const BUKHARA_OFFICE = "Buxoro, RentCar filiali";

  function getCar(carId: string) {
    const getCol = collection(db, "cars");
    const oneDoc = doc(getCol, carId);

    getDoc(oneDoc).then((res) => {
      if (res.exists()) {
        setCar({ ...res.data(), id: res.id });
      }
    });
  }

  useEffect(() => {
    if (id) {
      getCar(id);
    }
  }, [id]);

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = diffTime / (1000 * 3600 * 24);
    return diffDays > 0 ? Math.ceil(diffDays) : 0;
  };

  const totalDays = calculateDays();
  const cleanPrice = car.price
    ? Number(String(car.price).replace(/,/g, ""))
    : 800000;
  const totalPrice = totalDays > 0 ? totalDays * cleanPrice : cleanPrice;
  const isOutOfStock = car.count <= 0;

  const handleBooking = async () => {
    const user = getAuth().currentUser;

    if (!user) {
      alert("Bron qilish uchun avval tizimga kiring!");
      navigate("/login");
      return;
    }

    if (!startDate || !endDate) {
      alert("Iltimos, barcha maydonlarni to'ldiring!");
      return;
    }

    setLoading(true);
    const carRef = doc(db, "cars", car.id);
    const carSnap = await getDoc(carRef);

    if (carSnap.exists()) {
      const currentCarData = carSnap.data();

      if (currentCarData.count <= 0) {
        alert("Kechirasiz, bu mashina qolmagan!");
        setLoading(false);
        return;
      }

      const bronData = {
        userId: user.uid,
        carId: car.id,
        carName: car.name,
        olishManzili: BUKHARA_OFFICE,
        topshirishManzili: BUKHARA_OFFICE,
        olishSanasi: startDate,
        topshirishSanasi: endDate,
        kunlarSoni: totalDays || 1,
        jamiTolov: totalPrice,
        status: "kutilmoqda",
        createdAt: new Date().toISOString(),
      };

      try {
        await addDoc(collection(db, "brons"), bronData);
        await updateDoc(carRef, {
          count: Number(currentCarData.count) - 1,
        });

        alert("Bron muvaffaqiyatli rasmiylashtirildi!");
        navigate("/");
      } catch (error) {
        console.error("Xatolik:", error);
        alert("Bron qilishda xatolik bo'ldi.");
      } finally {
        setLoading(false);
      }
    }
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-20 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-emerald-500 text-sm uppercase tracking-[0.2em] font-semibold mb-2">
            Bron qilish
          </p>
          <h1 className="text-5xl font-serif">Ijarani rasmiylashtirish</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-8 bg-[#0a0a0a]/50 border border-white/10 p-10 rounded-3xl backdrop-blur-xl">
            <div className="mb-8 p-6 bg-[#121212] border border-white/10 rounded-xl">
              <label className="text-[11px] uppercase text-slate-500 tracking-widest font-bold block mb-2">
                Manzil
              </label>
              <p className="text-xl font-medium text-white">{BUKHARA_OFFICE}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] uppercase text-slate-500 tracking-widest font-bold block">
                  Olish sanasi
                </label>
                <input
                  type="date"
                  value={startDate}
                  min={today}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 outline-none focus:border-emerald-500/50 transition-all text-white"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] uppercase text-slate-500 tracking-widest font-bold block">
                  Topshirish sanasi
                </label>
                <input
                  type="date"
                  value={endDate}
                  min={startDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full bg-[#121212] border border-white/10 rounded-xl p-4 outline-none focus:border-emerald-500/50 transition-all text-white"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 sticky top-10">
            <div className="bg-[#0a0a0a] border border-white/10 p-8 rounded-3xl">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-40 object-cover object-center rounded-2xl mb-6 border border-white/5"
              />
              <h2 className="text-2xl font-serif mb-2">{car.name}</h2>
              <p className="text-slate-500 text-sm mb-6">{car.category}</p>

              {totalDays > 0 && (
                <div className="flex justify-between text-sm text-slate-400 mb-2">
                  <span>Kunlar soni:</span>
                  <span>{totalDays} kun</span>
                </div>
              )}

              <div className="flex justify-between py-4 border-t border-white/10">
                <span className="text-slate-400">Jami to'lov</span>
                <span className="text-xl font-bold">
                  {totalPrice.toLocaleString("uz-UZ")} so'm
                </span>
              </div>

              <button
                onClick={handleBooking}
                disabled={loading || isOutOfStock}
                className={`w-full h-14 rounded-xl font-bold mt-4 transition-transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer ${
                  isOutOfStock
                    ? "bg-slate-800 text-slate-500 cursor-not-allowed"
                    : "bg-white text-black hover:bg-slate-200"
                }`}
              >
                <span>
                  {isOutOfStock
                    ? "Mashina qolmagan"
                    : loading
                      ? "Saqlanmoqda..."
                      : "Bronni tasdiqlash"}
                </span>
                {!loading && !isOutOfStock && <span>→</span>}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
