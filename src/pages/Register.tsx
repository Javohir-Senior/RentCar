import React, { useState } from "react";
import { Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  // Barcha input qiymatlari bitta stateda jamlandi
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Parollarni ko'rsatish/yashirish statelari
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Input o'zgarganda ishlaydigan funksiya
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Logik tekshiruvlar (Validatsiya)
  const isEmailValid =
    formData.email.includes("@") && formData.email.includes(".");
  const isPasswordMatch =
    formData.password === formData.confirmPassword && formData.password !== "";
  const isPasswordLengthValid = formData.password.length >= 6;

  const handleRegister = () => {
    if (
      !formData.name ||
      !isEmailValid ||
      !isPasswordLengthValid ||
      !isPasswordMatch
    ) {
      alert("Iltimos, barcha maydonlarni to'g'ri to'ldiring!");
      return;
    }

    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        console.log("Foydalanuvchi:", userCredential.user);
        navigate("/login");
      })
      .catch((err) => {
        if (err.code === "auth/email-already-in-use") {
          alert("Bu email allaqachon ro'yxatdan o'tgan!");
        } else {
          alert(err.message);
        }
      });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0d0e12] font-sans antialiased text-white">
      <div className="w-full max-w-md rounded-lg border border-gray-800 bg-[#12141c] p-8 shadow-2xl">
        <h2 className="mb-6 text-center text-2xl font-bold tracking-wide text-white">
          Roʻyxatdan oʻtish
        </h2>

        <div className="space-y-4">
          {/* Ism familiya */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Ism va familiya
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full rounded-md border border-gray-800 bg-[#161923] px-4 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Email
            </label>
            <div className="relative">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="namuna@gmail.com"
                className="w-full rounded-md border border-gray-800 bg-[#161923] pl-4 pr-10 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              {formData.email && (
                <div className="absolute right-3 top-3">
                  {isEmailValid ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Parol */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Parol
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-800 bg-[#161923] pl-4 pr-10 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-white"
              >
                {showPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {formData.password && !isPasswordLengthValid && (
              <span className="text-[11px] text-red-500 mt-1 block">
                Parol kamida 6 ta belgidan iborat bo'lsin!
              </span>
            )}
          </div>

          {/* Parolni tasdiqlash */}
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-400">
              Parolni tasdiqlang
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full rounded-md border border-gray-800 bg-[#161923] pl-4 pr-10 py-2.5 text-sm text-white placeholder-gray-600 outline-none transition-all focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-3 text-gray-500 hover:text-white"
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </button>
            </div>
            {formData.confirmPassword && (
              <span
                className={`text-[11px] mt-1 block ${isPasswordMatch ? "text-green-500" : "text-red-500"}`}
              >
                {isPasswordMatch
                  ? "Parollar mos keldi"
                  : "Parollar mos kelmadi!"}
              </span>
            )}
          </div>

          {/* Ro'yxatdan o'tish tugmasi */}
          <button
            type="button"
            onClick={handleRegister}
            className="w-full rounded-md bg-[#2563eb] py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
          >
            Roʻyxatdan oʻtish
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-400">
          Hisobingiz bormi?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Kirish
          </a>
        </div>
      </div>
    </div>
  );
};

export default Register;
