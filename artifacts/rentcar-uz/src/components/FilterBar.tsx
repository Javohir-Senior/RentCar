import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Car, Search, Wallet } from "lucide-react";

export function FilterBar() {
  return (
    <div className="container mx-auto px-4 relative z-20 -mt-8 mb-20" id="mashinalar">
      <div className="bg-[#111111] border border-white/[0.08] shadow-[0_-1px_0_rgba(201,168,76,0.2),0_10px_40px_rgba(0,0,0,0.5)] p-6 backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-end">
          
          <div className="space-y-3">
            <label className="text-xs font-sans text-[#888880] flex items-center gap-2 uppercase tracking-widest">
              Avtomobil turi
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-[#F5F0E8] focus:ring-0 focus:border-[#C9A84C] transition-colors">
                <SelectValue placeholder="Tanlang" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10 text-[#F5F0E8]">
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="sedan">Premium Sedan</SelectItem>
                <SelectItem value="suv">Yo'ltanlamas SUV</SelectItem>
                <SelectItem value="sport">Sport / Cabrio</SelectItem>
                <SelectItem value="electric">Elektr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent self-center justify-self-center"></div>

          <div className="space-y-3">
            <label className="text-xs font-sans text-[#888880] flex items-center gap-2 uppercase tracking-widest">
              Narx oralig'i
            </label>
            <Select defaultValue="any">
              <SelectTrigger className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-[#F5F0E8] focus:ring-0 focus:border-[#C9A84C] transition-colors">
                <SelectValue placeholder="Narx" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A1A1A] border-white/10 text-[#F5F0E8]">
                <SelectItem value="any">Istalgan</SelectItem>
                <SelectItem value="low">100k - 300k UZS</SelectItem>
                <SelectItem value="mid">300k - 800k UZS</SelectItem>
                <SelectItem value="high">800k+ UZS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:block w-[1px] h-12 bg-gradient-to-b from-transparent via-[#C9A84C]/30 to-transparent self-center justify-self-center"></div>

          <div className="space-y-3">
            <label className="text-xs font-sans text-[#888880] flex items-center gap-2 uppercase tracking-widest">
              Sana
            </label>
            <div className="flex items-center gap-2">
              <Input type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-[#F5F0E8] focus-visible:ring-0 focus-visible:border-[#C9A84C] [color-scheme:dark] block w-full" />
              <span className="text-white/20">-</span>
              <Input type="date" className="bg-transparent border-0 border-b border-white/10 rounded-none px-0 h-10 text-[#F5F0E8] focus-visible:ring-0 focus-visible:border-[#C9A84C] [color-scheme:dark] block w-full" />
            </div>
          </div>

          <div className="flex justify-end md:ml-4">
            <Button className="h-12 w-full md:w-auto px-8 bg-[#C9A84C] hover:bg-[#E8C97A] text-black font-sans text-xs tracking-widest uppercase font-semibold transition-all group rounded-none" data-testid="button-search">
              QIDIRISH
            </Button>
          </div>

        </div>
      </div>
    </div>
  );
}