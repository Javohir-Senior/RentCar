import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FilterBar } from "./components/FilterBar";
import { CarGrid } from "./components/CarGrid";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Testimonials } from "./components/Testimonials";
import { Footer } from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingModal from "./pages/BookingModal";
import AdminManagement from "./pages/Admin-Management";
import Buyurtmalar from "./pages/Buyurtmalar";
import OrderDetailsPage from "./pages/OrderDetailsPage";
import DateManager from "./pages/DateManager";

const queryClient = new QueryClient();

function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col bg-[#080C10]">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <FilterBar />
        <CarGrid />
        <Features />
        <Gallery />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin-Management" element={<AdminManagement />} />
            <Route path="/bronqilish/:id" element={<BookingModal />} />
            <Route path="/buyurtmalar" element={<Buyurtmalar />} />
            <Route path="/buyurtmalar/:id" element={<OrderDetailsPage />} />
            <Route path="/admin/date-management" element={<DateManager />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
