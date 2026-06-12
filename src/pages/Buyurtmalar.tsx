import { useEffect, useState } from "react";
import { Package, Clock, CheckCircle2, ChevronRight, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { collection, getDocs, query, where } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const OrdersPage = () => {
  const [orders, setOrders] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchOrders(user.uid);
      } else {
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const fetchOrders = async (uid: string) => {
    try {
      const q = query(collection(db, "brons"), where("userId", "==", uid));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(data);
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Buyurtmalarim</h1>
            <p className="text-slate-500">Sizning ijara tarixchangiz va buyurtmalar holati</p>
          </div>
        </div>

        <div className="space-y-4">
          {orders.length === 0 ? (
            <p className="text-slate-500">Hozircha hech qanday buyurtmalar mavjud emas.</p>
          ) : (
            orders.map((order) => (
              <div
                key={order.id}
                className="group relative bg-[#090909] p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-all"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white/[0.03] rounded-xl border border-white/5">
                      <Package size={24} className="text-slate-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{order.carName}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <p className="text-[11px] text-slate-500 font-mono">ID: {order.id.slice(-6).toUpperCase()}</p>
                        <p className="text-[11px] text-slate-500">Olish sanasi: {order.olishSanasi}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-8">
                    <div className="text-right">
                      <p className="text-xs text-slate-500">Jami to'lov</p>
                      <p className="text-sm font-bold">{Number(order.jamiTolov).toLocaleString()} so'm</p>
                    </div>

                    <div className={`flex items-center gap-2 px-4 py-2 rounded-full text-[10px] font-bold uppercase border ${order.status === "tasdiqlangan" ? "bg-emerald-500/5 border-emerald-500/20 text-emerald-500" : "bg-amber-500/5 border-amber-500/20 text-amber-500"}`}>
                      {order.status === "tasdiqlangan" ? <CheckCircle2 size={12} /> : <Clock size={12} />}
                      {order.status}
                    </div>

                    <button
                      onClick={() => navigate(`/buyurtmalar/${order.id}`)}
                      className="p-3 bg-white/5 rounded-xl hover:bg-white hover:text-black transition-all"
                    >
                      <ChevronRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default OrdersPage;