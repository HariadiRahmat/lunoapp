import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Award, ShieldCheck, HeartPulse, Building2 } from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

function Counter({ end, suffix = "", decimals = 0, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const current = progress * end;
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration]);

  return (
    <span className="font-sans font-bold text-4xl sm:text-5xl text-neutral-900 tabular-nums">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Trust() {
  return (
    <section className="py-12 bg-white border-y border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Modern Statistics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Stat 1 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-blue-50 border border-blue-100">
                <Building2 className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Coffee Outlet</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <Counter end={40} suffix="+" />
            </div>
            <p className="text-xs text-neutral-500 font-medium select-none">
              Brand Kafe & Coffee Shop Aktif
            </p>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-blue-50 border border-blue-100">
                <Award className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Sistem Rilis</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <Counter end={1} suffix="+" />
            </div>
            <p className="text-xs text-neutral-500 font-medium select-none">
              Aplikasi & POS Sukses Terdeploy
            </p>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-blue-50 border border-blue-100">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Kepuasan Client</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <Counter end={99} decimals={1} suffix="%" />
            </div>
            <p className="text-xs text-neutral-500 font-medium select-none">
              Review Bintang Lima di Google & WA
            </p>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
            <div className="flex items-center gap-2">
              <div className="p-1 rounded bg-blue-50 border border-blue-100">
                <HeartPulse className="w-4 h-4 text-blue-600" />
              </div>
              <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-widest">Uptime SLA</span>
            </div>
            <div className="flex items-baseline gap-0.5">
              <Counter end={99} decimals={2} suffix="%" />
            </div>
            <p className="text-xs text-neutral-500 font-medium select-none">
              Infrastruktur Aman Bebas Lag saat Peak
            </p>
          </div>

        </div>

        {/* Dynamic Partner Logo Ticker */}
        <div className="mt-12 pt-8 border-t border-neutral-100">
          <p className="text-center text-[10px] uppercase tracking-widest font-bold text-neutral-400 mb-6">
            Membantu Berbagai Coffee Brand Menjadi Pemimpin F&B di Indonesia
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-sm font-bold tracking-tight text-neutral-800">KOPI SENJA</span>
            <span className="text-sm font-bold tracking-tight text-neutral-800">BREW & CO</span>
            <span className="text-sm font-bold tracking-tight text-neutral-800">DAILY SIP</span>
            <span className="text-sm font-bold tracking-tight text-neutral-800">AMBROSIA DRIP</span>
            <span className="text-sm font-bold tracking-tight text-neutral-800">BEAN & BOND</span>
            <span className="text-sm font-bold tracking-tight text-neutral-800">SUGARSPICE COFFEE</span>
          </div>
        </div>

      </div>
    </section>
  );
}
