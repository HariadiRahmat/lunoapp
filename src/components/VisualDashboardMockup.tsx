import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { 
  TrendingUp, Users, DollarSign, Coffee, Bell, 
  ChevronRight, ArrowUpRight, BarChart3, QrCode, LucideIcon 
} from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  trendUp: boolean;
}

function StatCard({ icon: Icon, label, value, change, trendUp }: StatCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 border border-neutral-200 shadow-sm flex flex-col justify-between animate-fadeIn">
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-medium text-neutral-500 uppercase tracking-wider">{label}</span>
        <div className="p-1.5 rounded-lg bg-blue-50 border border-blue-100">
          <Icon className="w-3.5 h-3.5 text-blue-600" />
        </div>
      </div>
      <div className="mt-2.5 flex items-baseline justify-between">
        <span className="text-lg font-bold text-neutral-900 font-sans tracking-tight">{value}</span>
        <span className={`text-[10px] font-semibold flex items-center gap-0.5 px-1.5 py-0.5 rounded-full ${
          trendUp ? "bg-emerald-50 text-emerald-700 font-bold" : "bg-neutral-100 text-neutral-700"
        }`}>
          {trendUp ? "↑" : "↓"} {change}
        </span>
      </div>
    </div>
  );
}

export default function VisualDashboardMockup() {
  const [currentTime, setCurrentTime] = useState("");
  const [activeTab, setActiveTab] = useState<"sales" | "orders">("sales");
  
  // Real-time date update
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const orders = [
    { id: "ORD-9402", time: "Baru saja", name: "Iced Aren Latte", status: "Antrian", amount: "Rp 28.000", table: "Meja 4" },
    { id: "ORD-9401", time: "2 mnt lalu", name: "Espresso Macchiato + Croissant", status: "Diproses", amount: "Rp 45.000", table: "Takeaway" },
    { id: "ORD-9400", time: "5 mnt lalu", name: "Avocado Espresso", status: "Selesai", amount: "Rp 32.500", table: "Meja 12" },
  ];

  return (
    <div className="w-full bg-slate-50 rounded-2xl p-4 sm:p-5 border border-neutral-200 shadow-sm origin-right">
      {/* Header bar */}
      <div className="flex items-center justify-between border-b border-neutral-200/50 pb-4 mb-4">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400 block" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 block" />
            <span className="w-3 h-3 rounded-full bg-green-400 block" />
          </div>
          <span className="text-[11px] font-mono text-neutral-400 ml-2 py-0.5 px-2 bg-neutral-100 border border-neutral-200/30 rounded-md">
            dashboard. Luno 
          </span>
        </div>
        
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono text-neutral-600 bg-neutral-100 px-2 py-1 rounded-md flex items-center gap-1.5 border border-neutral-200/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE: {currentTime}
          </span>
          <div className="relative">
            <Bell className="w-4 h-4 text-neutral-600 cursor-pointer hover:text-neutral-900 transition-colors" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-blue-600" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1.5 mb-5 bg-neutral-100 p-1 rounded-xl w-fit border border-neutral-200/40">
        <button 
          onClick={() => setActiveTab("sales")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "sales" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          <TrendingUp className="w-3.5 h-3.5" />
          Penjualan Hari Ini
        </button>
        <button 
          onClick={() => setActiveTab("orders")}
          className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
            activeTab === "orders" ? "bg-white text-neutral-950 shadow-sm" : "text-neutral-500 hover:text-neutral-800"
          }`}
        >
          <Coffee className="w-3.5 h-3.5" />
          Live Orders
          <span className="bg-blue-600 text-white text-[9px] px-1.5 py-0.2 rounded-full font-bold">3</span>
        </button>
      </div>

      {activeTab === "sales" ? (
        <div className="space-y-4">
          {/* Bento Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <StatCard 
              icon={DollarSign} 
              label="OMSET HARIAN" 
              value="Rp 4.821.500" 
              change="12.4%" 
              trendUp={true} 
            />
            <StatCard 
              icon={Coffee} 
              label="TOTAL CUP TERJUAL" 
              value="156 Cup" 
              change="8.2%" 
              trendUp={true} 
            />
            <StatCard 
              icon={Users} 
              label="PELANGGAN BARU (MOBILE)" 
              value="42 Member" 
              change="18.5%" 
              trendUp={true} 
            />
          </div>

          <div className="bg-white rounded-xl p-4 border border-neutral-200 shadow-sm">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Performa Mingguan</h4>
                <p className="text-[10px] text-neutral-500 -mt-0.5">Kenaikan 24% dibanding minggu lalu</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-semibold text-neutral-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-blue-500" />
                  Sistem POS
                </span>
                <span className="text-[10px] font-semibold text-neutral-600 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-cyan-500" />
                  Aplikasi Mobile
                </span>
              </div>
            </div>

            {/* Custom SVG Line Chart */}
            <div className="h-32 w-full mt-4 flex items-end relative">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                {/* Grid Lines */}
                <line x1="0" y1="25" x2="100" y2="25" stroke="#f1f5f9" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="50" x2="100" y2="50" stroke="#f1f5f9" strokeDasharray="3 3" strokeWidth="0.5" />
                <line x1="0" y1="75" x2="100" y2="75" stroke="#f1f5f9" strokeDasharray="3 3" strokeWidth="0.5" />

                {/* POS Sales Line */}
                <path
                  d="M 5 80 L 20 65 L 35 70 L 50 45 L 65 55 L 80 30 L 95 15"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-[dash_2s_ease-out_forwards]"
                />

                {/* Mobile Sales Line */}
                <path
                  d="M 5 95 L 20 85 L 35 75 L 50 60 L 65 40 L 80 32 L 95 10"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-[dash_2.5s_ease-out_forwards]"
                />
              </svg>

              {/* Day Labels */}
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-[9px] font-bold text-neutral-400 px-1 pt-1 border-t border-neutral-100">
                <span>Sen</span>
                <span>Sel</span>
                <span>Rab</span>
                <span>Kam</span>
                <span>Jum</span>
                <span>Sab</span>
                <span>Min</span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wider">Antrian Pesanan Berjalan</h4>
            <span className="text-[10px] text-neutral-500">Auto-refresh aktif</span>
          </div>

          <div className="space-y-2">
            {orders.map((order, i) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-3 border border-neutral-200 shadow-sm flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-2.5 h-2.5 rounded-full ${
                    order.status === "Antrian" ? "bg-amber-400 animate-pulse" : 
                    order.status === "Diproses" ? "bg-blue-400 animate-pulse" : "bg-emerald-400"
                  }`} />
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-neutral-900">{order.name}</span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-blue-50 text-blue-600 border border-blue-100 rounded font-bold">{order.table}</span>
                    </div>
                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="text-[10px] text-neutral-400 font-mono">{order.id}</span>
                      <span className="text-[10px] text-neutral-400">•</span>
                      <span className="text-[10px] text-neutral-500 font-medium">{order.time}</span>
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <span className="text-xs font-bold text-neutral-900 block">{order.amount}</span>
                  <span className="text-[9px] uppercase font-bold text-neutral-500 mt-0.5">{order.status}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick POS simulation */}
          <div className="bg-slate-50 border border-neutral-200 rounded-xl p-3 mt-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <QrCode className="w-5 h-5 text-blue-600" />
              <div>
                <p className="text-[11px] font-extrabold text-neutral-900">QRIS Dynamic Integrated</p>
                <p className="text-[9px] text-neutral-400">Pembayaran langsung tercatat otomatis</p>
              </div>
            </div>
            <span className="text-[10px] py-1 px-2.5 rounded bg-blue-600 text-white font-extrabold flex items-center gap-1">
              AKTIF
              <ArrowUpRight className="w-3 h-3" />
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
