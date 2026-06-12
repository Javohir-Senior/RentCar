import React, { useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../firebase.config";
import { collection, getDocs, doc, updateDoc, increment, deleteDoc } from "firebase/firestore";
import { ArrowLeft, Clock, CalendarDays, RefreshCw, Loader2 } from "lucide-react";

const DateManager = () => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  // BUGUNGI SANANI ANIQ STRING FORMATDA OLISH (YYYY-MM-DD)
  const getTodayStr = () => {
    const now = new Date();
    // Uzbekistan vaqt zonasi bilan ishlash uchun
    const offset = now.getTimezoneOffset();
    const localDate = new Date(now.getTime() - (offset * 60 * 1000));
    return localDate.toISOString().split("T")[0];
  };

  const [currentDate, setCurrentDate] = useState(getTodayStr());

  const handleProcessDate = async () => {
    setLoading(true);
    try {
      const snapshot = await getDocs(collection(db, "brons"));
      let deletedCount = 0;

      for (const docSnap of snapshot.docs) {
        const data = docSnap.data();
        
        // 1. Bazadagi sanani tozalash: "2026-06-12" holatiga keltiramiz
        const bronSanasi = data.topshirishSanasi ? data.topshirishSanasi.split("T")[0].trim() : "";

        // 2. FAQAT TENG BO'LSA O'CHIR!
        if (bronSanasi === currentDate) {
          if (data.carId) {
            await updateDoc(doc(db, "cars", data.carId), { count: increment(1) });
          }
          await deleteDoc(doc(db, "brons", docSnap.id));
          deletedCount++;
        }
      }

      // 3. Sanani 1 kunga surish
      const nextDate = new Date(currentDate);
      nextDate.setDate(nextDate.getDate() + 1);
      const nextDateStr = nextDate.toISOString().split("T")[0];
      
      setCurrentDate(nextDateStr);
      setStatus(`${deletedCount} ta bron o'chirildi. Yangi sana: ${nextDateStr}`);
      
    } catch (error) {
      console.error(error);
      setStatus("Xatolik yuz berdi!");
    } finally {
      setLoading(false);
    }
  };

  const refreshPage = () => window.location.reload();

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6">
      <Link to="/admin-management" className="flex items-center gap-2 text-slate-400 mb-6"><ArrowLeft /> Orqaga</Link>
      
      <div className="max-w-xl bg-[#090909] border border-white/10 p-8 rounded-3xl">
        <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
          <Clock className="text-emerald-500"/> Vaqtni boshqarish: 
          <span className="bg-emerald-500/10 px-3 py-1 rounded text-emerald-500 font-mono">{currentDate}</span>
        </h2>

        <div className="flex gap-4">
          <button 
            onClick={handleProcessDate} 
            disabled={loading}
            className="flex-1 py-4 bg-emerald-500 hover:bg-emerald-400 text-black font-bold rounded-2xl flex items-center justify-center gap-2"
          >
            {loading ? <Loader2 className="animate-spin" /> : <><CalendarDays size={20}/> Sana qo'shish va tozalash</>}
          </button>
          
          <button onClick={refreshPage} className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl">
            <RefreshCw size={20}/>
          </button>
        </div>

        {status && <div className="mt-6 p-4 bg-white/5 rounded-xl text-sm border border-white/10 text-emerald-500">{status}</div>}
      </div>
    </div>
  );
};

export default DateManager;