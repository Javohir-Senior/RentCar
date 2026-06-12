import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../../firebase.config";
import { Edit, Plus, Trash2, Car, LogOut, X } from "lucide-react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
  increment,
} from "firebase/firestore";

const AdminManagement = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cars, setCars] = useState<any>([]);
  const [current, setCurrent] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    price: "",
    fuel: "",
    speed: "",
    seats: "",
    image: "",
    count: "",
  });

  useEffect(() => {
    getCars();
    checkExpiredOrders();
  }, []);

  // Avtomatik tekshiruv logikasi
  const checkExpiredOrders = async () => {
    const today = new Date().toISOString().split("T")[0];
    const bronsRef = collection(db, "brons");
    const snapshot = await getDocs(bronsRef);

    snapshot.forEach(async (orderDoc) => {
      const order = orderDoc.data();
      if (order.topshirishSanasi && order.topshirishSanasi <= today) {
        if (order.carId) {
          const carRef = doc(db, "cars", order.carId);
          await updateDoc(carRef, { count: increment(1) });
        }
        await deleteDoc(doc(db, "brons", orderDoc.id));
      }
    });
  };

  const getCars = () => {
    const getCol = collection(db, "cars");
    getDocs(getCol).then((res) => {
      const a = res.docs.map((itm: any) => ({ ...itm.data(), id: itm.id }));
      setCars(a);
    });
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  function save() {
    const getCol = collection(db, "cars");
    const dataToSave = { ...formData, count: Number(formData.count) };

    if (current === null) {
      addDoc(getCol, dataToSave).then(() => {
        getCars();
        resetForm();
      });
    } else {
      const oneDoc = doc(db, "cars", current);
      updateDoc(oneDoc, dataToSave).then(() => {
        setCurrent(null);
        getCars();
        resetForm();
      });
    }
  }

  function resetForm() {
    setFormData({
      name: "",
      category: "",
      price: "",
      fuel: "",
      speed: "",
      seats: "",
      image: "",
      count: "",
    });
    setIsModalOpen(false);
  }

  function editItem(item: any) {
    setCurrent(item.id);
    setFormData({ ...item });
    setIsModalOpen(true);
  }

  function delItem(id: string) {
    const oneDoc = doc(db, "cars", id);
    deleteDoc(oneDoc).then(() => getCars());
  }

  return (
    <div className="min-h-screen bg-[#050505] text-white p-4 sm:p-6">
      <nav className="flex items-center justify-between bg-[#090909] border border-white/10 px-6 py-4 mb-8 rounded-2xl">
        <div className="flex items-center gap-2">
          <div className="bg-emerald-500 p-2 rounded-xl text-black">
            <Car size={20} strokeWidth={3} />
          </div>
          <span className="font-bold text-lg">
            AutoRent <span className="text-emerald-500">Admin</span>
          </span>
        </div>
        {/* <Link
          to="/admin/date-management"
          className="px-4 py-2 bg-emerald-500/10 text-emerald-500 rounded-xl text-xs font-bold hover:bg-emerald-500 hover:text-black transition-all"
        >
          Vaqtni boshqarish
        </Link> */}
        <div
          onClick={handleLogout}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="text-right hidden sm:block">
            <p className="text-xs font-bold text-white">Admin</p>
            <p className="text-[10px] text-slate-500">Chiqish</p>
          </div>
          <div className="w-9 h-9 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all">
            <LogOut size={16} />
          </div>
        </div>
      </nav>

      <div className="flex justify-between items-center bg-[#090909] p-4 border border-white/5 rounded-2xl mb-6">
        <span className="text-xs text-slate-400 font-medium">
          {cars.length} ta mashina ro'yxatda
        </span>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center gap-2 bg-emerald-500 text-black px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-emerald-400 transition-all"
        >
          <Plus size={15} strokeWidth={3} /> Yangi Avtomobil
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars?.map((itm: any) => (
          <div
            key={itm.id}
            className="bg-[#090909] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all"
          >
            <img
              src={itm.image}
              alt={itm.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-5">
              <h4 className="text-lg font-bold">{itm.name}</h4>
              <p className="text-xs text-emerald-500 mt-1 font-bold">
                Omborda: {itm.count} ta
              </p>
              <div className="grid grid-cols-2 gap-2 mt-4 text-[11px] text-slate-400">
                <div className="p-2 bg-white/[0.02] rounded-lg border border-white/5">
                  ⛽ {itm.fuel}
                </div>
                <div className="p-2 bg-white/[0.02] rounded-lg border border-white/5">
                  ⚡ {itm.speed} km/h
                </div>
                <div className="p-2 bg-white/[0.02] rounded-lg border border-white/5">
                  💺 {itm.seats} o'rindiq
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                <p className="text-emerald-400 font-bold">{itm.price} so'm</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => editItem(itm)}
                    className="p-2 bg-white/5 text-slate-400 rounded-lg hover:text-emerald-400"
                  >
                    <Edit size={14} />
                  </button>
                  <button
                    onClick={() => delItem(itm.id)}
                    className="p-2 bg-rose-500/10 text-rose-400 rounded-lg hover:bg-rose-500 hover:text-white"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-[#0e0e0e] border border-white/10 rounded-3xl w-full max-w-lg p-8">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-white">
                {current ? "Tahrirlash" : "Yangi qo'shish"}
              </h3>
              <button onClick={() => setIsModalOpen(false)}>
                <X size={20} className="text-slate-400" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Nomi", key: "name" },
                { label: "Kategoriya", key: "category" },
                { label: "Narxi", key: "price" },
                { label: "Yonilg'i", key: "fuel" },
                { label: "Tezlik", key: "speed" },
                { label: "O'rindiq", key: "seats" },
                { label: "Soni", key: "count", type: "number" },
              ].map((field) => (
                <input
                  key={field.key}
                  type={field.type || "text"}
                  placeholder={field.label}
                  value={formData[field.key as keyof typeof formData]}
                  onChange={(e) =>
                    setFormData({ ...formData, [field.key]: e.target.value })
                  }
                  className="w-full bg-[#161616] p-4 rounded-xl text-sm border border-white/5 outline-none text-white"
                />
              ))}
              <input
                placeholder="Rasm URL"
                value={formData.image}
                onChange={(e) =>
                  setFormData({ ...formData, image: e.target.value })
                }
                className="col-span-2 w-full bg-[#161616] p-4 rounded-xl text-sm border border-white/5 outline-none text-white"
              />
            </div>
            <button
              onClick={save}
              className="w-full mt-8 bg-emerald-500 text-black py-4 rounded-2xl font-bold text-sm"
            >
              {current ? "Saqlash" : "Qo'shish"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminManagement;
