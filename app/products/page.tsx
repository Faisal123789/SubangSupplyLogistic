'use client';

import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import RequestOrderModal from '@/components/RequestOrderModal';
import ContactModal from '@/components/ContactModal';

export default function ProductsPage() {
  const { t } = useLanguage();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const productCategories = [
    {
      id: 'provisions',
      badge: t('🥦 Fresh & Frozen', '🥦 Fresh & Frozen'),
      title: t('Fresh Provisions & Dry Food', 'Fresh Provisions & Dry Food'),
      desc: t(
        'Pasokan bahan makanan segar pilihan dengan kontrol suhu ketat serta dry food berkualitas tinggi untuk memenuhi standar nutrisi kru kapal niaga.',
        'High quality fresh provisions under strict cold-chain management and premium dry food supplies to meet nutrition standards for vessel crews.'
      ),
      items: [
        t('Sayuran & Buah-buahan Segar Harian', 'Daily Fresh Fruits & Vegetables'),
        t('Daging Sapi, Ayam, & Seafood Beku (Frozen)', 'Frozen Meat, Poultry, & Seafood'),
        t('Bahan Pokok & Makanan Kering (Beras, Tepung, Gula)', 'Dry Food Staples (Rice, Flour, Sugar, Grains)'),
        t('Makanan Kaleng, Bumbu Dapur, & Rempah Internasional', 'Canned Foods, Sauces, & International Spices'),
        t('Susu, Telur, Keju, & Bahan Roti / Bakery', 'Dairy, Eggs, Cheese, & Bakery Essentials'),
        t('Air Mineral Kemasan Galon & Botol', 'Bottled & Gallon Drinking Water'),
      ],
      border: 'border-emerald-200',
      badgeBg: 'bg-emerald-50 text-emerald-800 border-emerald-200',
      btnColor: 'bg-emerald-600 hover:bg-emerald-500',
    },
    {
      id: 'deck',
      badge: t('⚓ Deck & Safety', '⚓ Deck & Safety'),
      title: t('Deck & Cabin Stores', 'Deck & Cabin Stores'),
      desc: t(
        'Perlengkapan operasional geladak, tali mooring, serta alat keselamatan pelayaran berstandar SOLAS demi kelancaran dan keselamatan kapal.',
        'Deck operations equipment, mooring ropes, and certified SOLAS safety gears to ensure safe and smooth vessel berthing.'
      ),
      items: [
        t('Tali Mooring, Kawat Baja (Wire Ropes), & Shackles', 'Mooring Lines, Wire Ropes, & Shackles'),
        t('Alat Keselamatan SOLAS (Life Jacket, Lifebuoy, Flares)', 'SOLAS Safety Items (Life Jackets, Lifebuoys, Pyrotechnics)'),
        t('Cat Kapal (Marine Coatings), Thinner, & Kuas/Roll', 'Marine Paints, Thinners, & Applicators'),
        t('Peralatan Pengikat Kontainer & Kargo (Lashing Gear)', 'Cargo Lashing Gears, Chains, & Netting'),
        t('Kebutuhan Konsumabel Kabin, Linen, & Chemical Pembersih', 'Cabin Consumables, Linens, & Cleaning Agents'),
        t('Alat Pelindung Diri Kru (Wearpack, Helm, Sepatu Safety)', 'Crew PPE (Boiler Suits, Safety Helmets, Boots)'),
      ],
      border: 'border-sky-200',
      badgeBg: 'bg-sky-50 text-sky-800 border-sky-200',
      btnColor: 'bg-sky-700 hover:bg-sky-600',
    },
    {
      id: 'engine',
      badge: t('⚙ Engine & Technical', '⚙ Engine & Technical'),
      title: t('Engine Technical Equipment', 'Engine Technical Equipment'),
      desc: t(
        'Penyediaan suku cadang teknis kamar mesin, pelumas industri, valves, dan perlengkapan perkakas untuk perawatan darurat maupun rutin.',
        'Engine room spare parts, industrial lubricants, valves, and precision maintenance tools for emergency or routine repairs.'
      ),
      items: [
        t('Minyak Pelumas Kapal (Marine Lubricants) & Chemical Mesin', 'Marine Lubricants & Engine Treatment Chemicals'),
        t('Filter Bahan Bakar, Filter Oli, & Air Filters', 'Fuel, Oil, and Air Filter Cartridges'),
        t('Katup Industri (Marine Valves), Gaskets, & Packing Sheet', 'Marine Valves, Gaskets, & Packing Sheets'),
        t('Hand Tools, Power Tools, & Alat Ukur Presisi', 'Hand Tools, Power Tools, & Precision Gauges'),
        t('Baut, Mur, & Fasteners Khusus Maritim (Anti Korosi)', 'Corrosion-Resistant Marine Fasteners & Bolts'),
        t('Peralatan Elektrikal Kamar Mesin & Lampu Sorot Kapal', 'Engine Electrical Fittings & Marine Floodlights'),
      ],
      border: 'border-amber-200',
      badgeBg: 'bg-amber-50 text-amber-800 border-amber-200',
      btnColor: 'bg-amber-600 hover:bg-amber-500',
    },
  ];

  return (
    <>
      <main className="min-h-screen bg-slate-50/70 pb-20 pt-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          
          {/* HEADER SECTION */}
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-100/70 rounded-full border border-blue-200 mb-3">
              {t('Katalog Perbekalan & Suplai Kapal', 'Ship Chandling & Marine Supply Catalog')}
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 tracking-tight">
              {t('Produk & Layanan Logistik', 'Products & Logistics Services')}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              {t(
                'CV. Subang Supply Logistic menyediakan suplai kebutuhan operasional kapal niaga secara terpadu di kawasan Pelabuhan Patimban, mulai dari makanan segar hingga perlengkapan teknis kamar mesin dengan kesiapan 24/7.',
                'CV. Subang Supply Logistic provides integrated provisions and technical stores for commercial vessels in Patimban Port area, covering fresh food to engine technical equipment with 24/7 standby.'
              )}
            </p>
          </div>

          {/* GRID PRODUK */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl border ${cat.border} p-6 sm:p-7 shadow-sm hover:shadow-md transition flex flex-col justify-between`}
              >
                <div>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-bold border mb-4 ${cat.badgeBg}`}
                  >
                    {cat.badge}
                  </span>
                  <h2 className="text-xl font-black text-blue-950 mb-3">
                    {cat.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                    {cat.desc}
                  </p>

                  <div className="border-t border-slate-100 pt-4">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                      {t('Daftar Pasokan Utama:', 'Key Supply Items:')}
                    </p>
                    <ul className="space-y-2.5">
                      {cat.items.map((item, idx) => (
                        <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
                          <span className="text-emerald-600 font-bold mr-2 shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col gap-2.5">
                  <button
                    type="button"
                    onClick={() => setIsOrderOpen(true)}
                    className={`w-full text-white font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm shadow-sm transition text-center cursor-pointer ${cat.btnColor}`}
                  >
                    {t('Request Kategori Ini →', 'Order This Category →')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsContactOpen(true)}
                    className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-2.5 px-4 rounded-xl text-xs sm:text-sm transition text-center cursor-pointer"
                  >
                    {t('Tanya Ketersediaan', 'Inquire Availability')}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CUSTOM ORDER / WHATSAPP BANNER */}
          <div className="mt-14 bg-gradient-to-r from-blue-950 to-slate-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                {t('Butuh Spesifikasi Tertentu?', 'Need Custom Specifications?')}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-1">
                {t(
                  'Perbekalan Khusus atau Suku Cadang Mesin Langka?',
                  'Looking for Rare Engine Spares or Custom Provisions?'
                )}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                {t(
                  'Kirimkan daftar requisition atau inquiry Anda. Tim Ship Chandler kami siap melakukan sourcing dan pengantaran langsung ke lambung kapal (on-board delivery) di Pelabuhan Patimban.',
                  'Send us your requisition list or inquiry. Our Ship Chandler team will source and deliver directly on-board your vessel at Patimban Port.'
                )}
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <button
                type="button"
                onClick={() => setIsOrderOpen(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md transition cursor-pointer text-center"
              >
                {t('Buka Form Order', 'Open Order Form')}
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* MODALS */}
      <RequestOrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </>
  );
}