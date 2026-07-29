'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800">
      {/* 1. HERO BANNER BIRU LAUT (OCEAN BLUE) */}
      <section className="bg-blue-900 text-white pt-16 pb-32 px-6 md:px-12 relative overflow-hidden">
        {/* Decorative Wave/Glow Background */}
        <div className="absolute -right-10 -bottom-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            {t('Solusi Logistik Maritim', 'Maritime Logistics Solutions')}
          </h1>
          <div className="flex items-center gap-3 text-sm md:text-base font-medium bg-blue-800/80 px-5 py-2.5 rounded-full border border-blue-700">
            <span>{t('Kami siap membantu, hubungi', 'We are ready to help, call')}</span>
            <a href="https://wa.me/6281311558121" target="_blank" className="font-bold underline text-cyan-300 hover:text-cyan-200">
              +62 813 1155 8121 📞
            </a>
          </div>
        </div>
      </section>

      {/* 2. OVERLAPPING WHITE CONTENT CARD (GAYA B-LOG BIRU LAUT) */}
      <section className="max-w-6xl mx-auto px-6 -mt-20 pb-20 relative z-20">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden grid lg:grid-cols-2 border border-slate-200">
          
          {/* KOLOM KIRI: TEKS DESKRIPSI */}
          <div className="p-8 md:p-12 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
              {t(
                'Memperkuat Rantai Pasok Maritim Patimban — End to End',
                'Strengthening Patimban Maritime Supply Chain — End to End'
              )}
            </h2>

            <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                {t(
                  'CV. Subang Supply Logistic adalah penyedia layanan general ship supplier dan ship chandler terkemuka yang berfokus di area Subang Smartport Patimban. Berpengalaman dalam melayani kapal domestik maupun internasional.',
                  'CV. Subang Supply Logistic is a leading general ship supplier and ship chandler operating in the Subang Smartport Patimban area, servicing both domestic and international vessels.'
                )}
              </p>
              <p>
                {t(
                  'Kami menyediakan layanan perbekalan bahan makanan segar (fresh provisions), bahan kering (dry food), perbekalan geladak (deck stores), hingga perlengkapan teknis mesin kapal dengan sistem pemesanan terencana.',
                  'We provide fresh food provisions, dry food, deck stores, and engine technical equipment with an advanced order workflow.'
                )}
              </p>
              <p className="font-semibold text-slate-800 border-l-4 border-blue-600 pl-4 py-1">
                {t(
                  'Dengan komitmen "Serve with Trust", kami memastikan ketepatan spesifikasi barang dan kesegaran pasokan tepat saat kapal Anda bersandar.',
                  'Guided by "Serve with Trust", we guarantee precise item specifications and maximum freshness the moment your vessel berths.'
                )}
              </p>
            </div>
          </div>

          {/* KOLOM KANAN: GAMBAR ARMADA / SHIP SUPPLIES */}
          <div className="relative min-h-[350px] bg-slate-200">
            <img
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80"
              alt="Subang Supply Logistics Maritime"
              className="w-full h-full object-cover"
            />
          </div>

        </div>
      </section>
    </main>
  );
}