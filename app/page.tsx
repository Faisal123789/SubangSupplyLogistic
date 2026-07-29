'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import RequestOrderModal from '@/components/RequestOrderModal';

export default function HomePage() {
  const { t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-100 text-slate-800 overflow-x-hidden w-full">
      
      {/* 1. HERO BANNER */}
      <section className="relative bg-blue-950 text-white pt-16 pb-28 md:pt-20 md:pb-36 px-4 sm:px-6 md:px-12 overflow-hidden w-full">
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none">
          <img
            src="/kapalbg.jpg"
            alt="Cargo Ship Maritime Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="absolute -top-20 -left-20 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse pointer-events-none delay-1000" />

        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10 relative z-10 w-full">
          <div className="w-full lg:max-w-3xl space-y-5 sm:space-y-6 text-center lg:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-blue-800/80 text-cyan-300 text-xs font-semibold border border-blue-700/80 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              {t('General Ship Supplier & Ship Chandler Patimban', 'General Ship Supplier & Ship Chandler Patimban')}
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white drop-shadow-sm">
              {t(
                'Solusi Rantai Pasok Maritim Patimban — End to End',
                'Patimban Maritime Supply Chain Solutions — End to End'
              )}
            </h1>

            <p className="text-blue-100 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {t(
                'CV. Subang Supply Logistic siap melayani perbekalan bahan makanan segar (fresh provisions), bahan kering (dry food), perbekalan geladak (deck stores), hingga perlengkapan teknis mesin kapal 24/7.',
                'CV. Subang Supply Logistic delivers fresh provisions, dry food, deck stores, and engine technical supplies 24/7 at Subang Smartport Patimban.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2 w-full">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                <span>📦</span>
                <span>{t('Request Order Sekarang', 'Request Order Now')}</span>
              </button>
              <Link
                href="/about"
                className="w-full sm:w-auto bg-blue-900/80 hover:bg-blue-800 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-blue-700/80 backdrop-blur-md transition-all duration-300 text-center hover:scale-[1.02] text-sm sm:text-base"
              >
                {t('Pelajari Lebih Lanjut', 'Learn More')}
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-4/5 md:w-3/4 lg:w-80 bg-blue-900/40 backdrop-blur-xl border border-blue-700/50 p-5 sm:p-6 rounded-3xl shadow-2xl space-y-4 sm:space-y-5 shrink-0 mt-4 lg:mt-0">
            <div className="text-center p-3.5 sm:p-4 bg-blue-950/60 rounded-2xl border border-blue-800/80">
              <p className="text-2xl sm:text-3xl font-black text-cyan-300">24 / 7</p>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">
                {t('Respon Operasional', 'Operational Response')}
              </p>
            </div>
            <div className="text-center p-3.5 sm:p-4 bg-blue-950/60 rounded-2xl border border-blue-800/80">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">100%</p>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">
                {t('Ketepatan Spesifikasi', 'Item Specification Precision')}
              </p>
            </div>
            <div className="text-center p-3.5 sm:p-4 bg-blue-950/60 rounded-2xl border border-blue-800/80">
              <p className="text-2xl sm:text-3xl font-black text-amber-300">PATIMBAN</p>
              <p className="text-[11px] sm:text-xs text-slate-300 font-medium uppercase tracking-wider mt-1">
                {t('Dedicated Smartport Area', 'Dedicated Smartport Area')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURED SERVICES */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 -mt-14 sm:-mt-20 pb-16 sm:pb-20 relative z-20 w-full">
        <div className="text-center mb-8 sm:mb-10 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xl">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
            {t('Layanan Utama Kami', 'Our Main Services')}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold text-slate-900">
            {t('Perbekalan & Logistik Kapal Terpadu', 'Integrated Ship Supply & Logistics')}
          </h2>
          <p className="text-slate-600 text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-2">
            {t(
              'Jaminan mutu kesegaran bahan makanan serta kepastian spesifikasi teknis untuk operasional kapal Anda.',
              'Guaranteed fresh provisions quality and exact technical specifications for your vessel operations.'
            )}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?auto=format&fit=crop&w=800&q=80"
                  alt="Fresh Provisions & Dry Food"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-blue-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-blue-700">
                  🥦 Fresh & Frozen
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition">
                  {t('Fresh Provisions & Dry Food', 'Fresh Provisions & Dry Food')}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {t(
                    'Pasokan sayur segar, buah-buahan, daging, ikan frozen, serta dry provisions berkualitas tinggi untuk kebutuhan nutrisi seluruh kru kapal.',
                    'High-quality fresh vegetables, fruits, meats, frozen fish, and dry provisions to support crew nutritional needs.'
                  )}
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6 pt-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-blue-700 hover:text-blue-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>{t('Order Perbekalan', 'Order Provisions')}</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
            <div>
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80"
                  alt="Deck & Cabin Stores"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-cyan-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-cyan-700">
                  ⚓ Deck & Safety
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-cyan-700 transition">
                  {t('Deck & Cabin Stores', 'Deck & Cabin Stores')}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {t(
                    'Perlengkapan geladak, tali temali mooring, perlengkapan keselamatan pelayaran (SOLAS), hingga kebutuhan konsumables kabin.',
                    'Deck equipment, mooring ropes, navigation safety gear (SOLAS standard), and complete cabin consumables.'
                  )}
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6 pt-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-cyan-700 hover:text-cyan-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>{t('Order Deck Stores', 'Order Deck Stores')}</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between sm:col-span-2 lg:col-span-1">
            <div>
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-800">
                <img
                  src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80"
                  alt="Engine Technical Equipment"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute top-3 left-3 bg-emerald-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full border border-emerald-700">
                  ⚙️ Engine & Technical
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition">
                  {t('Engine Technical Equipment', 'Engine Technical Equipment')}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {t(
                    'Peralatan teknis kamar mesin, suku cadang (spare parts), oli pelumas, valves, tools, serta konsumabel perbaikan kapal.',
                    'Engine room technical tools, replacement spare parts, lubricants, valves, and ship maintenance consumables.'
                  )}
                </p>
              </div>
            </div>
            <div className="p-5 sm:p-6 pt-0">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
              >
                <span>{t('Order Engine Tools', 'Order Engine Tools')}</span>
                <span>&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3. ALUR KERJA PASOKAN LOGISTIK (PENGGANTI GALERI) */}
        <div className="mt-12 sm:mt-16 bg-white p-6 sm:p-8 md:p-10 rounded-3xl border border-slate-200 shadow-lg w-full">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-3 sm:gap-4">
            <div>
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest block mb-1">
                {t('Sistem & Standar Kerja', 'Workflow & Service Standard')}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-slate-900">
                {t('Alur Pelayanan Pasokan Kapal', 'Vessel Supply Service Workflow')}
              </h3>
            </div>
            <p className="text-slate-500 text-xs sm:text-sm max-w-md">
              {t(
                'Tahapan operasional yang terstruktur untuk memastikan ketepatan waktu dan kualitas barang di Pelabuhan Patimban.',
                'Structured operational steps ensuring punctuality and item quality at Patimban Port.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 font-extrabold flex items-center justify-center mb-4 text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                01
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {t('Request & Quote', 'Request & Quote')}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t(
                  'Penerimaan spesifikasi order perbekalan dan penerbitan penawaran harga cepat.',
                  'Receiving supply order specs and issuing quick competitive price quotations.'
                )}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-cyan-100 text-cyan-700 font-extrabold flex items-center justify-center mb-4 text-sm group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                02
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {t('Quality Inspection', 'Quality Inspection')}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t(
                  'Pemeriksaan kualitas bahan makanan segar & kualifikasi teknis perbekalan kapal.',
                  'Quality checks for fresh provisions and technical qualification of vessel stores.'
                )}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-teal-100 text-teal-700 font-extrabold flex items-center justify-center mb-4 text-sm group-hover:bg-teal-600 group-hover:text-white transition-colors">
                03
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {t('Safe Transport', 'Safe Transport')}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t(
                  'Pengangkutan terorganisasi langsung ke area operasional Pelabuhan Patimban.',
                  'Organized transport directly to Patimban Port operational area.'
                )}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition-all group">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center mb-4 text-sm group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                04
              </div>
              <h4 className="font-bold text-slate-900 text-base mb-1">
                {t('On-Board Delivery', 'On-Board Delivery')}
              </h4>
              <p className="text-slate-600 text-xs leading-relaxed">
                {t(
                  'Serah terima perbekalan langsung ke atas kapal bersama perwakilan kapal/kru.',
                  'Direct supply handover on board with vessel representatives or crew.'
                )}
              </p>
            </div>
          </div>
        </div>

        {/* 4. CALLOUT BANNER */}
        <div className="mt-8 sm:mt-10 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 text-white p-6 sm:p-8 md:p-12 rounded-3xl border border-blue-800 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 w-full">
          <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 mb-3">
              {t('Prosedur H-14 Kerja', 'Advanced 14-Day Procedure')}
            </span>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold mb-2">
              {t('Siap Mengirimkan Request Order Perbekalan?', 'Ready to Send Supply Request Order?')}
            </h3>
            <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
              {t(
                'Gunakan tombol di sebelah untuk membuka Form Request Order cepat yang terintegrasi langsung dengan WhatsApp tim operasional kami.',
                'Use the button to open our fast Request Order form directly integrated with our operational WhatsApp.'
              )}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setIsModalOpen(true)}
            className="relative z-10 w-full sm:w-auto bg-emerald-500 hover:bg-emerald-400 text-white font-black px-8 py-4 rounded-xl shadow-xl hover:shadow-emerald-500/30 transition-all duration-300 hover:scale-105 active:scale-95 shrink-0 text-center text-sm sm:text-base"
          >
            {t('Request Order Sekarang', 'Request Order Now')} &rarr;
          </button>
        </div>

      </section>

      {/* MODAL REQUEST ORDER */}
      <RequestOrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

    </main>
  );
}