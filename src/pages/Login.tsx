import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, CheckCircle2, AlertCircle } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const isEmailValid = email.includes("@") && email.includes(".");
  const isPasswordValid = password.length >= 6;

  const navigate = useNavigate();

  const [Admin] = useState({
    email: "javohiribrohimov644@gmail.com",
    password: "12345678",
  });

  function getSingIn() {
    if (!isEmailValid) return;
    if (!password) return;

    if (email === Admin.email && password === Admin.password) {
      navigate("/admin-Management");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
        })
        .catch((err) => {
          alert("Xatolik: " + err.message);
        });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#080C10]">
      <div className="p-8 bg-[#111827] border border-gray-800 rounded-xl shadow-2xl w-96">
        
        <Link 
          to="/" 
          className="flex items-center text-sm text-gray-400 hover:text-white mb-6 transition"
        >
          &larr; Orqaga qaytish
        </Link>

        <h2 className="mb-6 text-2xl font-bold text-center text-white">
          Kirish
        </h2>

        <div className="space-y-4">
          {/* Email input */}
          <div className="mb-4">
            <label className="block mb-2 text-sm text-gray-400">Email</label>
            <div className="relative">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 pr-10 bg-[#080C10] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="namuna@gmail.com"
              />
              {email && (
                <div className="absolute right-3 top-4">
                  {isEmailValid ? (
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  ) : (
                    <AlertCircle className="h-4 w-4 text-red-500" />
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Parol input */}
          <div className="mb-6">
            <label className="block mb-2 text-sm text-gray-400">Parol</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 pr-10 bg-[#080C10] border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-4 text-gray-500 hover:text-white"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={getSingIn}
            className="w-full p-3 text-white font-bold bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            Kirish
          </button>
        </div>

        <p className="mt-4 text-center text-gray-500 text-sm">
          Hisobingiz yo'qmi?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Ro'yxatdan o'tish
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;