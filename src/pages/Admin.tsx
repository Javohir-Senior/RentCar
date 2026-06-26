import React, { useEffect, useState } from 'react';
import { db } from '../../firebase.config';
import { collection, getDocs } from 'firebase/firestore';
import Navber from './Navber';

const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'brons'));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setOrders(data);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const getStatusStyle = (status:any) => {
    switch (status) {
      case 'tasdiqlandi': return 'bg-emerald-900/50 text-emerald-400 border-emerald-900';
      case 'bekor qilindi': return 'bg-rose-900/50 text-rose-400 border-rose-900';
      case 'tugatildi': return 'bg-blue-900/50 text-blue-400 border-blue-900';
      default: return 'bg-amber-900/50 text-amber-400 border-amber-900';
    }
  };

  if (loading) return <div className="p-10 text-center text-gray-500">Yuklanmoqda...</div>;

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 text-gray-200">
        <Navber/>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6 text-white">Buyurtmalar boshqaruvi</h1>

        <div className="bg-gray-900 rounded-2xl border border-gray-800 overflow-hidden shadow-2xl">

          <div className="grid grid-cols-4 gap-4 p-4 border-b border-gray-800 text-xs font-bold uppercase tracking-wider text-gray-500">
            <div>Mijoz</div>
            <div>Mashina</div>
            <div>Narxi</div>
            <div>Status</div>
          </div>


          <div className="divide-y divide-gray-800">
            {orders.map((order:any) => (
              <div key={order.id} className="grid grid-cols-4 gap-4 p-4 items-center hover:bg-gray-800/50 transition-colors">
                <div className="truncate text-sm font-medium text-gray-300">
                  {order.userId.slice(0, 8)}...
                </div>
                <div className="text-sm">{order.carName}</div>
                <div className="text-sm font-semibold">
                  {new Intl.NumberFormat('uz-UZ').format(order.jamiTolov)} UZS
                </div>
                <div>
                  <span className={`px-3 py-1 rounded-full text-[10px] border ${getStatusStyle(order.status)}`}>
                    {order.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;