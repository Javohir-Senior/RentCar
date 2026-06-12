import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export function FilterBar() {
  return (
    <div className="bg-[#0E1318] border-b border-white/5 relative z-20" id="mashinalar">
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex flex-col md:flex-row gap-6 md:gap-0 items-center">
          
          <div className="w-full md:flex-1 space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              Avtomobil turi
            </label>
            <Select defaultValue="all">
              <SelectTrigger className="bg-transparent border-0 px-0 h-8 text-sm text-white focus:ring-0 shadow-none">
                <SelectValue placeholder="Tanlang" />
              </SelectTrigger>
              <SelectContent className="bg-[#1A2332] border-white/10 text-white rounded-none">
                <SelectItem value="all">Barchasi</SelectItem>
                <SelectItem value="sedan">Premium Sedan</SelectItem>
                <SelectItem value="suv">Yo'ltanlamas SUV</SelectItem>
                <SelectItem value="sport">Sport / Cabrio</SelectItem>
                <SelectItem value="electric">Elektr</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/[0.07] mx-6"></div>

          <div className="w-full md:flex-1 space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              Narx oralig'i
            </label>
            <div className="flex h-8 items-center text-sm text-white px-0 cursor-default">
              100k – 500k UZS
            </div>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/[0.07] mx-6"></div>

          <div className="w-full md:flex-1 space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              Boshlanish sanasi
            </label>
            <Input type="date" className="bg-transparent border-0 px-0 h-8 text-sm text-white focus-visible:ring-0 shadow-none scheme-dark block w-full rounded-none" />
          </div>

          <div className="hidden md:block w-px h-10 bg-white/[0.07] mx-6"></div>

          <div className="w-full md:flex-1 space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-white/40">
              Tugash sanasi
            </label>
            <Input type="date" className="bg-transparent border-0 px-0 h-8 text-sm text-white focus-visible:ring-0 shadow-none scheme-dark block w-full rounded-none" />
          </div>

          <div className="w-full md:w-auto md:ml-8 mt-4 md:mt-0">
            <button className="btn-bmw-primary w-full md:w-auto py-3! px-10! whitespace-nowrap" data-testid="button-search">
              QIDIRISH
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}