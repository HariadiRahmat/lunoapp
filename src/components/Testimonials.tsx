import { Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: "rev-1",
      name: "Andi Wijaya",
      role: "Founder Kopi Senja",
      avatarBg: "bg-amber-100 text-amber-800",
      initial: "AW",
      comment: "Aplikasi POS  LunoApp merubah total alur kerja kafe kami. Laporan penjualan harian 12 cabang sekarang tersentralisasi otomatis. Kehilangan stok biji kopi bisa terpantau real-time!",
      stars: 5,
      date: "Dua minggu lalu"
    },
    {
      id: "rev-2",
      name: "Siti Rahma",
      role: "Marketing Director Brew & Co",
      avatarBg: "bg-emerald-100 text-emerald-800",
      initial: "SR",
      comment: "Meluncurkan aplikasi pemesanan mobile kami sendiri sangat menaikkan wibawa brand di mata customer. Jumlah pesanan online naik 40%, customer sangat suka karena tidak perlu antri di jam sibuk pagi.",
      stars: 5,
      date: "Satu bulan lalu"
    },
    {
      id: "rev-3",
      name: "Reza Mahendra",
      role: "Operations Manager Daily Sip",
      avatarBg: "bg-blue-100 text-blue-800",
      initial: "RM",
      comment: "Sangat bersyukur mempercayakan sistem kami ke  LunoApp. Layanan bantuan mereka sangat responsif, jika ada isu laci kasir macet langsung diarahkan step by step via WhatsApp dalam 5 menit.",
      stars: 5,
      date: "Tiga bulan lalu"
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Visual background details */}
      <div className="absolute top-1/4 -right-12 w-64 h-64 bg-blue-50/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[11px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 border border-blue-150 px-3 py-1.5 rounded-full inline-block">
            Testimoni Kemitraan
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            Dengarkan Kisah Sukses <span className="text-blue-600">Mitra Seperjuangan</span> Kami.
          </h2>
          <p className="text-sm text-neutral-500 leading-relaxed font-normal">
            Kepercayaan para owner dan direktur operasional coffee shop terkemuka adalah bukti konkret keandalan teknologi yang kami bangun.
          </p>
        </div>

        {/* Bento Review layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-neutral-100 shadow-sm hover:shadow hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* 5-Star track */}
                <div className="flex items-center gap-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-500 fill-amber-500" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-neutral-750 leading-relaxed font-medium italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Founder bio bar */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full font-bold text-xs flex items-center justify-center ${review.avatarBg}`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-neutral-950 leading-none">{review.name}</h4>
                    <span className="text-[10px] text-neutral-400 font-semibold block mt-1">{review.role}</span>
                  </div>
                </div>
                
                <span className="text-[9px] font-bold text-neutral-400 font-mono">
                  {review.date}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
