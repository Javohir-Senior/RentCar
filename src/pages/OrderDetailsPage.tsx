import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";
import { ArrowLeft } from "lucide-react";

const OrderDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    if (id) {
      getDoc(doc(db, "brons", id)).then((res) => {
        if (res.exists()) setOrder(res.data());
      });
    }
  }, [id]);

  if (!order) return <div className="p-20 text-center text-white">Yuklanmoqda...</div>;

  return (
    <div className="min-h-screen bg-[#050505] text-white p-6 md:p-20">
      <div className="max-w-2xl mx-auto bg-[#0a0a0a] p-10 rounded-3xl border border-white/10">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-slate-500 hover:text-white mb-8">
          <ArrowLeft size={18} /> Orqaga
        </button>

        <h1 className="text-3xl font-bold mb-8">{order.carName}</h1>
        
        <div className="space-y-6">
          {[
            { label: "Olish manzili", value: order.olishManzili },
            { label: "Topshirish manzili", value: order.topshirishManzili },
            { label: "Olish sanasi", value: order.olishSanasi },
            { label: "Topshirish sanasi", value: order.topshirishSanasi },
            { label: "Kunlar soni", value: `${order.kunlarSoni} kun` },
            { label: "Status", value: order.status.toUpperCase() },
            { label: "Jami to'lov", value: `${order.jamiTolov.toLocaleString()} so'm` },
          ].map((item, idx) => (
            <div key={idx} className="flex justify-between border-b border-white/10 py-4">
              <span className="text-slate-500">{item.label}</span>
              <span className="font-bold">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderDetailsPage;