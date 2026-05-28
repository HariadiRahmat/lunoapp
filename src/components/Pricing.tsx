import { useState } from "react";
import { motion } from "motion/react";
import { Check, Info } from "lucide-react";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

  const starterFeatures = [
    "Sistem POS Kasir (1 Outlet)",
    "Pencatatan Transaksi & Kas Laci",
    "Metode QRIS & Manual POS",
    "Analisis Penjualan Dasar (Laporan harian)",
    "Hingga 3 Staff Barista",
    "Pembaruan Sistem Standar"
  ];

  const growthFeatures = [
    "Sistem POS Kasir (Outlet tidak terbatas)",
    "Aplikasi Mobile Custom Brand (Andr/iOS)",
    "Loyalty Program & Poin Member Digital",
    "Dasbor Analitik Lengkap & Export Excel",
    "Manajemen Bahan Baku & Stok Otomatis",
    "Sistem GPS Absensi Staf & Hak Akses",
    "Prioritas Bantuan CS Chat WA 10 Menit"
  ];

  const enterpriseFeatures = [
    "Semua Fitur Paket Growth",
    "Integrasi IoT Mesin Kopi / Timbangan",
    "Custom Desain UI/UX Unik Brand Anda",
    "Infrastruktur Server Mandiri Dedicated",
    "Manajemen Lintas Cabang Kantor Pusat",
    "Perjanjian SLA Ketersediaan Sistem 99.99%",
    "Technical Director Pendamping Eksklusif"
  ];

  const lifetimeFeatures = [
    "Lisensi Penggunaan Sistem Selamanya",
    "Akses Kode Sumber (Source Code Repo)",
    "Bebas Biaya Bulanan / Tahunan Selamanya",
    "Instalasi dan Konfigurasi Server Gratis",
    "Pembaruan Versi Inti Gratis 3 Tahun",
    "Dokumentasi Teknis Lengkap & API Mandiri",
    "Onboarding Developer & Handover 5 Sesi"
  ];

  // Price formater
  const formatIDR = (value: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0
    }).format(value);
  };

  const getWaLinkWithText = (planName: string, priceText: string) => {
    const text = encodeURIComponent(
      `Halo LunoApp, saya tertarik untuk berkonsultasi mengenai pembangunan sistem digital dengan sistem *Paket ${planName} (${priceText})* untuk bisnis Coffee Shop saya.`
    );
    return `https://wa.me/6285710300560?text=${text}`;
  };

  return (
    <section id="harga" className="py-20 bg-white relative overflow-hidden">
      
      {/* Background gradients */}
      <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-blue-50/30 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-150 px-3 py-1.5 rounded-full inline-block">
            Investasi Digital Bergaransi
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900">
            Pilih Paket Keberhasilan <span className="text-gradient-blue text-blue-600">Sistem</span> Anda.
          </h2>
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed font-normal">
            Skema harga transparan tanpa biaya tersembunyi. Disesuaikan khusus untuk pertumbuhan skala bisnis lokal Anda, dari kafe rumahan tunggal hingga franchise ratusan outlet.
          </p>

          {/* Billing Toggle Widget */}
          <div className="pt-6 flex items-center justify-center gap-4">
            <span className={`text-xs font-bold ${billingCycle === "monthly" ? "text-neutral-900" : "text-neutral-450"}`}>
              Bayar Bulanan
            </span>
            
            <button
              onClick={() => setBillingCycle(billingCycle === "monthly" ? "annual" : "monthly")}
              className="w-14 h-7 rounded-full bg-neutral-200 p-1 flex items-center transition-colors cursor-pointer"
              aria-label="Toggle billing billing cycle"
            >
              <div
                className={`w-5 h-5 rounded-full bg-blue-600 transition-all ${
                  billingCycle === "annual" ? "translate-x-7 bg-blue-700" : ""
                }`}
              />
            </button>

            <div className="flex items-center gap-1.5">
              <span className={`text-xs font-bold ${billingCycle === "annual" ? "text-neutral-900" : "text-neutral-450"}`}>
                Bayar Tahunan
              </span>
              <span className="bg-blue-50 text-blue-600 text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-wider border border-blue-100">
                Hemat 20%
              </span>
            </div>
          </div>
        </div>

        {/* Pricing Layout Structure */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          
          {/* STARTER CARD */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-8 border border-neutral-200/80 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-neutral-400">BAGI RINTISAN</span>
                <h3 className="text-xl font-black text-neutral-900 mt-1">Starter</h3>
                <p className="text-xs text-neutral-500 mt-1.5 min-h-[32px]">
                  Fokus kelancaran laci kasir, pembukuan digital, dan e-wallet.
                </p>
              </div>
 
              <div className="py-2 border-y border-neutral-100 flex flex-col gap-0.5">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-[18px] xl:text-2xl font-black text-neutral-900 tracking-tight leading-none">
                  {billingCycle === "monthly" ? formatIDR(799000) : formatIDR(639200)}
                </span>
                <span className="text-[10px] font-bold text-neutral-400">/bulan</span>
                {billingCycle === "annual" && (
                  <p className="text-[9px] text-blue-600 font-bold mt-1">Ditagih tahunan ({formatIDR(7670400)}/thn)</p>
                )}
              </div>

              <ul className="space-y-3">
                {starterFeatures.map((f, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[11px] font-semibold text-neutral-700">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWaLinkWithText("Starter", billingCycle === "monthly" ? "Rp 799.000/bln" : "Rp 639.200/bln (Annual)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold bg-neutral-50 hover:bg-blue-600 hover:text-white border border-neutral-200 text-neutral-900 transition-all duration-200"
            >
              Mulai Konsultasi Starter
            </a>
          </div>

          {/* GROWTH CARD (Highlighted) */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-8 border-2 border-blue-600 flex flex-col justify-between shadow-md relative scale-100 lg:scale-[1.03] z-20">
            {/* Featured Ribon */}
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[9px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">
              Paling Direkomendasikan
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-blue-600">MAJU BERSAMA</span>
                  <span className="bg-blue-50 border border-blue-100 text-blue-600 text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Lengkap</span>
                </div>
                <h3 className="text-xl font-black text-neutral-900 mt-1">Growth</h3>
                <p className="text-xs text-neutral-500 mt-1.5 min-h-[32px]">
                  Integrasi app pelanggan multiplatform, loyalty point, dan absensi barista.
                </p>
              </div>

              <div className="py-2 border-y border-neutral-100 flex flex-col gap-0.5">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-[18px] xl:text-2xl font-black text-neutral-900 tracking-tight leading-none">
                  {billingCycle === "monthly" ? formatIDR(1999000) : formatIDR(1599200)}
                </span>
                <span className="text-[10px] font-bold text-neutral-400">/bulan</span>
                {billingCycle === "annual" && (
                  <p className="text-[9px] text-blue-600 font-bold mt-1">Ditagih tahunan ({formatIDR(19190400)}/thn)</p>
                )}
              </div>

              <ul className="space-y-3">
                {growthFeatures.map((f, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[11px] font-semibold text-neutral-700">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWaLinkWithText("Growth", billingCycle === "monthly" ? "Rp 1.999.000/bln" : "Rp 1.599.200/bln (Annual)")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-all duration-200 shadow-sm"
            >
              Mulai Konsultasi Growth
            </a>
          </div>

          {/* ENTERPRISE CARD */}
          <div className="bg-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-8 border border-neutral-200/80 flex flex-col justify-between shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-300">
            <div className="space-y-6">
              <div>
                <span className="text-[10px] font-extrabold tracking-widest uppercase text-neutral-400">SKALA NASIONAL</span>
                <h3 className="text-xl font-black text-neutral-900 mt-1">Enterprise</h3>
                <p className="text-xs text-neutral-500 mt-1.5 min-h-[32px]">
                  Sistem bergaransi SLA, kustomisasi total, serta infrastruktur mandiri.
                </p>
              </div>

              <div className="py-2 border-y border-neutral-100 flex flex-col gap-0.5">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-[18px] xl:text-2xl font-black text-neutral-900 tracking-tight leading-none">Custom Pricing</span>
                <span className="text-[10px] font-bold text-neutral-400 block">Nego Sesuai Keberlanjutan</span>
              </div>

              <ul className="space-y-3">
                {enterpriseFeatures.map((f, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[11px] font-semibold text-neutral-700">
                    <Check className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWaLinkWithText("Enterprise", "Hubungi untuk Nego Custom")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold bg-neutral-50 hover:bg-blue-600 hover:text-white border border-neutral-200 text-neutral-900 transition-all duration-200"
            >
              Hubungi Spesialis Kami
            </a>
          </div>

          {/* LIFETIME LICENSE CARD */}
          <div className="bg-neutral-900 text-white rounded-3xl p-5 sm:p-6 lg:p-5 xl:p-8 flex flex-col justify-between shadow-md border border-neutral-800">
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold tracking-widest uppercase text-blue-400">INVESTASI TOTAL</span>
                  <span className="bg-blue-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full uppercase">Paling Premium</span>
                </div>
                <h3 className="text-xl font-black text-white mt-1">Lifetime Buyout</h3>
                <p className="text-xs text-neutral-300 mt-1.5 min-h-[32px]">
                  Miliki seluruh file source code, hak distribusi mandiri, tanpa limitasi.
                </p>
              </div>

              <div className="py-2 border-y border-neutral-800 flex flex-col gap-0.5">
                <span className="text-lg sm:text-xl md:text-2xl lg:text-[17px] xl:text-2xl font-black text-white tracking-tight leading-none">Bayar sekali, miliki selamanya</span>
                <span className="text-[10px] font-bold text-neutral-400 block">Hak milik permanen</span>
              </div>

              <ul className="space-y-3">
                {lifetimeFeatures.map((f, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-[11px] font-semibold text-neutral-200">
                    <Check className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <a
              href={getWaLinkWithText("Lifetime Buyout", "Rp 49.000.000 Sekali Bayar")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 w-full py-3.5 rounded-xl text-center text-xs font-bold bg-blue-600 hover:bg-white hover:text-neutral-950 text-white transition-all duration-200"
            >
              Mulai Lisensi Lifetime
            </a>
          </div>

        </div>

        {/* Security / FAQ hint line */}
        <div className="mt-12 text-center flex items-center justify-center gap-1.5">
          <Info className="w-4 h-4 text-blue-600" />
          <p className="text-xs text-neutral-500 font-medium">
            Bingung menentukan pilihan? Silakan ambil layanan konsultasi gratis, tim kami siap mengaudit alur kerja kafe Anda.
          </p>
        </div>

      </div>
    </section>
  );
}
