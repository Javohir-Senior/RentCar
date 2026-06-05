import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, Car, Search, Wallet } from "lucide-react";

export function FilterBar() {
  return (
    <div className="container mx-auto px-4 relative z-20 -mt-10 mb-20" id="mashinalar">
      <div className="bg-[#111827] border border-white/10 rounded-xl shadow-2xl p-4 md:p-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end">
          
          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
              <Car className="w-4 h-4 text-primary" /> Avtomobil turi
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-[#1A2235] border-white/5 h-12">
                <SelectValue placeholder="Tanlang" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="sedan">Sedan</SelectItem>
                <SelectItem value="suv">SUV</SelectItem>
                <SelectItem value="sport">Sport / Convertible</SelectItem>
                <SelectItem value="electric">Elektr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
              <Wallet className="w-4 h-4 text-primary" /> Narx oralig'i
            </label>
            <Select defaultValue="any">
              <SelectTrigger className="bg-[#1A2235] border-white/5 h-12">
                <SelectValue placeholder="Narx" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="any">Istalgan</SelectItem>
                <SelectItem value="low">100k - 300k UZS</SelectItem>
                <SelectItem value="mid">300k - 800k UZS</SelectItem>
                <SelectItem value="high">800k+ UZS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-primary" /> Boshlanish
            </label>
            <Input type="date" className="bg-[#1A2235] border-white/5 h-12 text-white block w-full [color-scheme:dark]" />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium text-muted-foreground flex items-center gap-2 uppercase tracking-wider">
              <Calendar className="w-4 h-4 text-primary" /> Tugash
            </label>
            <Input type="date" className="bg-[#1A2235] border-white/5 h-12 text-white block w-full [color-scheme:dark]" />
          </div>

          <Button className="h-12 w-full font-display tracking-widest group" data-testid="button-search">
            <Search className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" /> QIDIRISH
          </Button>

        </div>
      </div>
    </div>
  );
}