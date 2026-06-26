import { signOut } from "firebase/auth";
import { Car, LogOut, LayoutDashboard, ShoppingCart } from "lucide-react";
import { auth } from "../../firebase.config";
import { useNavigate, NavLink } from "react-router-dom";

const Navber = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
    } catch (error) {
      console.error("Xatolik:", error);
    }
  };

  // Aktiv linklar uchun stil funksiyasi
  const activeLink = "text-emerald-500 bg-emerald-500/10";
  const normalLink = "text-slate-400 hover:text-white hover:bg-white/5";

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-[#090909]/80 backdrop-blur-md border border-white/10 px-6 py-4 mb-8 rounded-2xl shadow-xl">
      {/* Logo qismi */}
      <div className="flex items-center gap-2">
        <div className="bg-emerald-500 p-2 rounded-xl text-black">
          <Car size={20} strokeWidth={3} />
        </div>
        <span className="font-bold text-lg">
          AutoRent <span className="text-emerald-500">Admin</span>
        </span>
      </div>

      {/* Navigatsiya Linklari */}
      <div className="flex items-center gap-2">
        <NavLink
          to="/admin"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${isActive ? activeLink : normalLink}`
          }
        >
          <LayoutDashboard size={16} />
          <span className="hidden sm:inline">Boshqaruv</span>
        </NavLink>

        <NavLink
          to="/admin-Management"
          className={({ isActive }) =>
            `flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${isActive ? activeLink : normalLink}`
          }
        >
          <ShoppingCart size={16} />
          <span className="hidden sm:inline">Buyurtmalar</span>
        </NavLink>
      </div>

      {/* Chiqish (Logout) */}
      <div
        onClick={handleLogout}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <div className="text-right hidden sm:block">
          <p className="text-xs font-bold text-white">Admin</p>
          <p className="text-[10px] text-rose-500">Chiqish</p>
        </div>
        <div className="w-9 h-9 rounded-full bg-rose-500/10 flex items-center justify-center text-rose-400 border border-rose-500/20 group-hover:bg-rose-500 group-hover:text-white transition-all">
          <LogOut size={16} />
        </div>
      </div>
    </nav>
  );
};

export default Navber;
