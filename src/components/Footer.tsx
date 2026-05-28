import { Mail, Phone, MapPin, Instagram, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  const handleCtaClick = () => {
    window.open("https://wa.me/6285710300560", "_blank", "referrer");
  };

  return (
    <footer className="bg-slate-50 border-t border-neutral-200/50 pt-16 pb-8 text-xs font-semibold text-neutral-500 font-sans select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-neutral-200/50">
        
        {/* Branding summary (Left corner - spans 4 columns) */}
        <div className="lg:col-span-4 space-y-5">
          <a href="#" className="flex items-center gap-2 group w-fit">
            <span className="font-extrabold text-xl tracking-tight text-neutral-900 font-sans">
              Luno<span className="text-blue-600">App</span>
            </span>
          </a>

          <p className="text-neutral-500 leading-relaxed font-normal max-w-sm">
            LunoApp adalah premium software house khusus Food & Beverage di Indonesia. Kami fokus membawa coffee shop lokal berkembang mapan melalui keandalan sistem POS, mobile app, dan dasbor analitis.
          </p>

          <div className="space-y-2 border-t border-neutral-200/40 pt-4 max-w-sm font-medium">
            <div className="flex items-center gap-2 text-neutral-700">
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>+62 857-1030-0560</span>
            </div>
            <div className="flex items-center gap-2 text-neutral-700">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>lunoappofficial@gmail.com</span>
            </div>
            <div className="flex items-start gap-2 text-neutral-700 font-normal">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
              <span>WJ66+56W, Damai, Kec. Tanralili, Kabupaten Maros, Sulawesi Selatan 90553</span>
            </div>
          </div>
        </div>

        {/* Column 2: Layanan (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] font-black uppercase text-neutral-900 tracking-widest">
            Layanan Utama
          </h4>
          <ul className="space-y-2.5 font-normal text-neutral-500">
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Sistem POS Modern</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Mobile Ordering App</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Loyalty & Membership</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Dashboard Analitik</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Employee Management</a></li>
            <li><a href="#layanan" className="hover:text-blue-600 hover:underline transition-all">Sistem Custom & IoT</a></li>
          </ul>
        </div>

        {/* Column 3: Perusahaan (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] font-black uppercase text-neutral-900 tracking-widest">
            Perusahaan
          </h4>
          <ul className="space-y-2.5 font-normal text-neutral-500">
            <li><a href="#tentang" className="hover:text-blue-600 hover:underline transition-all">Tentang Kami</a></li>
            <li><a href="#portfolio" className="hover:text-blue-600 hover:underline transition-all">Portfolio Showcase</a></li>
            <li><a href="#harga" className="hover:text-blue-600 hover:underline transition-all">Daftar Paket Harga</a></li>
            <li><a href="#faq" className="hover:text-blue-600 hover:underline transition-all">FAQ & Panduan</a></li>
            <li><button onClick={handleCtaClick} className="hover:text-blue-600 hover:underline transition-all text-left cursor-pointer font-semibold">Konsultasi Gratis</button></li>
          </ul>
        </div>

        {/* Column 4: Legal & Garansi (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] font-black uppercase text-neutral-900 tracking-widest">
            Ketentuan & Jaminan
          </h4>
          <ul className="space-y-2.5 font-normal text-neutral-500">
            <li><span className="cursor-default">Garansi Uptime SLA 99%</span></li>
            <li><span className="cursor-default">Bebas Pajak Pemeliharaan</span></li>
            <li><span className="cursor-default">Kebebasan Akses Lisensi</span></li>
            <li><span className="cursor-default">Kebijakan Privasi Data</span></li>
            <li><span className="cursor-default">Perjanjian Kerja Sama Resmi</span></li>
          </ul>
        </div>

        {/* Column 5: Social Connections (Spans 2 columns) */}
        <div className="lg:col-span-2 space-y-4">
          <h4 className="text-[10px] font-black uppercase text-neutral-900 tracking-widest">
            Terhubung Bersama
          </h4>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={handleCtaClick}
              className="w-8 h-8 rounded-lg bg-neutral-200/60 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center cursor-pointer text-neutral-700 font-semibold"
              aria-label="Direct WhatsApp Support"
            >
              <MessageSquare className="w-4 h-4" />
            </button>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener" 
              className="w-8 h-8 rounded-lg bg-neutral-200/60 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center text-neutral-700 font-semibold"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a 
              href="#" 
              className="w-8 h-8 rounded-lg bg-neutral-200/60 hover:bg-blue-600 hover:text-white transition-all duration-200 flex items-center justify-center text-neutral-700 font-semibold"
              aria-label="Visit corporate website"
            >
              <Globe className="w-4 h-4" />
            </a>
          </div>

    
        </div>

      </div>

      {/* Copy-claim footer line */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-normal text-neutral-400 text-[11px]">
        <p>© 2026 LunoApp. Seluruh hak cipta dilindungi undang-undang.</p>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-neutral-900">Syarat & Ketentuan</a>
          <span>•</span>
          <a href="#" className="hover:text-neutral-900">Kebijakan Privasi</a>
          <span>•</span>
          <a href="#" className="hover:text-brand-900">F&B SLA Guarantee</a>
        </div>
      </div>
    </footer>
  );
}
