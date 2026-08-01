'use client';

import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function AboutPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  const [activeTab, setActiveTab] = useState<'all' | 'provision' | 'deck' | 'service'>('all');
  const [copiedNIB, setCopiedNIB] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleCopyNIB = () => {
    try {
      const textToCopy = '1307260029503';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(textToCopy);
        setCopiedNIB(true);
        setTimeout(() => setCopiedNIB(false), 2000);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedNIB(true);
        setTimeout(() => setCopiedNIB(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const services = [
    { 
      id: '01', 
      title: 'Provision & Ship Supply', 
      category: 'provision', 
      icon: '📦', 
      desc: {
        id: 'Pengadaan bahan makanan segar (fresh food), bahan beku (frozen food), dry store, minuman, dan air mineral untuk konsumsi kru serta tumpangan kapal.',
        en: 'Procurement of fresh food, frozen food, dry store, beverages, and mineral water for crew and passenger consumption.'
      }
    },
    { 
      id: '02', 
      title: 'Galley & Kitchen Supplies', 
      category: 'provision', 
      icon: '🍽️', 
      desc: {
        id: 'Peralatan memasak dapur kapal, alat makan & minum stainless/melamin, serta tempat penyimpanan bahan makanan higienis.',
        en: 'Ship galley cooking equipment, stainless/melamine tableware, and hygienic food storage containers.'
      }
    },
    { 
      id: '03', 
      title: 'Cleaning & Housekeeping', 
      category: 'service', 
      icon: '✨', 
      desc: {
        id: 'Bahan kimia pembersih (marine chemicals), sanitizer, alat kebersihan, tissue, kantong sampah kargo, dan perlengkapan sanitasi.',
        en: 'Marine cleaning chemicals, sanitizers, cleaning tools, tissues, cargo garbage bags, and sanitation supplies.'
      }
    },
    { 
      id: '04', 
      title: 'Cabin & Passenger Amenities', 
      category: 'service', 
      icon: '🛏️', 
      desc: {
        id: 'Perlengkapan kamar tidur (sprei, selimut, bantal), perlengkapan mandi, dan fasilitas kenyamanan untuk penumpang kapal.',
        en: 'Cabin bedding supplies (bedsheets, blankets, pillows), toiletries, and comfort amenities for ship passengers.'
      }
    },
    { 
      id: '05', 
      title: 'Crew Personal Supplies', 
      category: 'service', 
      icon: '👥', 
      desc: {
        id: 'Kebutuhan harian perlengkapan pribadi kru dan pendukung operasional anggota awak selama pelayaran.',
        en: 'Daily personal supplies for crew members and operational support items during the voyage.'
      }
    },
    { 
      id: '06', 
      title: 'Safety & PPE (APD)', 
      category: 'deck', 
      icon: '🛡️', 
      desc: {
        id: 'Alat Pelindung Diri (APD) standar keselamatan pelayaran, helm, rompi pelampung (life jacket), sepatu safety, dan standar APD pelayaran.',
        en: 'Personal Protective Equipment (PPE) meeting maritime safety standards, helmets, life jackets, safety shoes, and gear.'
      }
    },
    { 
      id: '07', 
      title: 'Stationery & Office Supplies', 
      category: 'deck', 
      icon: '📄', 
      desc: {
        id: 'Alat Tulis Kantor (ATK), kertas cetak, tinta printer, log book kapal, dan perlengkapan administrasi anjungan.',
        en: 'Office stationery, printing paper, printer ink, ship logbooks, and bridge administrative supplies.'
      }
    },
    { 
      id: '08', 
      title: 'General Marine Supplies', 
      category: 'deck', 
      icon: '⚓', 
      desc: {
        id: 'Peralatan kustom berbagai peralatan pendukung teknis dan umum kapal sesuai dengan daftar permintaan (RFO).',
        en: 'Custom equipment and general technical support supplies for vessels according to Request for Orders (RFO).'
      }
    },
    { 
      id: '09', 
      title: 'Delivery & Port Logistics', 
      category: 'service', 
      icon: '🚢', 
      desc: {
        id: 'Layanan pengantaran langsung dari gudang ke dermaga pelabuhan dengan aman, tepat waktu, dan terkoordinasi.',
        en: 'Direct delivery service from warehouse to port terminals safely, on time, and fully coordinated.'
      }
    },
    { 
      id: '10', 
      title: 'Urgent / On-Demand Supply', 
      category: 'service', 
      icon: '⚡', 
      desc: {
        id: 'Layanan responsif 24/7 untuk pengadaan mendesak mengikuti jadwal sandar dan keberangkatan kapal.',
        en: '24/7 responsive service for urgent provisions following vessel berthing and departure schedules.'
      }
    }
  ];

  const faqs = [
    { 
      q: {
        id: 'Apakah CV Subang Supply Logistic melayani pemesanan mendesak (urgent supply)?',
        en: 'Does CV Subang Supply Logistic handle urgent supply orders?'
      }, 
      a: {
        id: 'Ya, kami menyediakan layanan siaga 24/7 untuk kebutuhan logistik dan perbekalan mendesak mengikuti jadwal sandar kapal di pelabuhan.',
        en: 'Yes, we provide 24/7 standby service for urgent logistics and provisions following vessel berthing schedules at the port.'
      } 
    },
    { 
      q: {
        id: 'Bagaimana prosedur pemesanan logistik kapal?',
        en: 'What is the procedure for ordering ship logistics?'
      }, 
      a: {
        id: 'Pelanggan dapat mengirimkan daftar kebutuhan (RFO / Request for Order) melalui WhatsApp atau Email. Tim kami akan melakukan verifikasi spesifikasi, menerbitkan penawaran harga, dan memproses pengiriman setelah PO disetujui.',
        en: 'Customers can submit a Request for Order (RFO) via WhatsApp or Email. Our team will verify specifications, issue price quotations, and process delivery once the PO is approved.'
      } 
    },
    { 
      q: {
        id: 'Apakah barang yang dikirim dijamin sesuai spesifikasi maritim?',
        en: 'Are the delivered items guaranteed to meet maritime specifications?'
      }, 
      a: {
        id: 'Seluruh produk melalui proses pemeriksaan mutu (Quality Check) ketat, khususnya bahan makanan segar (fresh store) dan peralatan keselamatan yang memenuhi standar regulasi pelayaran.',
        en: 'All products undergo strict quality checks, especially fresh foods and safety equipment meeting international maritime regulations.'
      } 
    },
    { 
      q: {
        id: 'Di mana cakupan wilayah pengiriman CV Subang Supply Logistic?',
        en: 'Where is the delivery coverage area of CV Subang Supply Logistic?'
      }, 
      a: {
        id: 'Kami melayani pengantaran langsung ke Pelabuhan Patimban Subang.',
        en: 'We provide direct delivery services to Patimban Port Subang.'
      } 
    }
  ];

  const filteredServices = activeTab === 'all' ? services : services.filter(s => s.category === activeTab);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* HERO SECTION */}
      <section className="bg-slate-900 text-white py-16 px-6 sm:px-12 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <span className="inline-block px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-semibold rounded-full uppercase tracking-widest mb-4">
            {isEn ? 'About Company' : 'Tentang Perusahaan'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-4">
            CV Subang Supply Logistic
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            {isEn 
              ? 'Your trusted partner providing operational needs for passenger and cargo vessels with high quality standards, fast delivery, and professional 24/7 service.'
              : 'Mitra terpercaya penyedia kebutuhan operasional kapal penumpang dan barang dengan standar kualitas tinggi, pengiriman cepat, dan pelayanan profesional 24/7.'
            }
          </p>
        </div>
      </section>

      {/* LEGAL & COMPANY INFO */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-slate-100 pb-8 mb-8">
            <div>
              <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
                {isEn ? 'Official Identity' : 'Identitas Resmi'}
              </span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                {isEn ? 'Legal & Business Licensing' : 'Legalitas & Perizinan Usaha'}
              </h2>
              <p className="text-slate-600 text-sm mt-1">
                {isEn ? 'CV Subang Supply Logistic operates legally and certified.' : 'CV Subang Supply Logistic beroperasi secara legal dan tersertifikasi.'}
              </p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center gap-4">
              <div>
                <p className="text-xs text-slate-500 uppercase font-medium">
                  {isEn ? 'Business Identification Number (NIB)' : 'Nomor Induk Berusaha (NIB)'}
                </p>
                <p className="text-lg font-mono font-bold text-slate-900">1307260029503</p>
              </div>
              <button 
                onClick={handleCopyNIB}
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
              >
                {copiedNIB ? (isEn ? 'Copied!' : 'Disalin!') : (isEn ? 'Copy NIB' : 'Salin NIB')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">🎯</div>
              <h3 className="font-bold text-slate-900 mb-2">
                {isEn ? 'Main Vision' : 'Visi Utama'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'To become the leading and trusted maritime supplier and logistics company supporting smooth sailing operations.'
                  : 'Menjadi perusahaan supplier dan logistik maritim terdepan dan terpercaya yang mendukung kelancaran operasional pelayaran.'
                }
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">🚀</div>
              <h3 className="font-bold text-slate-900 mb-2">
                {isEn ? 'Service Mission' : 'Misi Layanan'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'Providing on-time delivery, maintaining the quality of fresh and technical goods, and consistently prioritizing customer satisfaction.'
                  : 'Memberikan ketepatan waktu pengiriman, menjaga mutu kualitas barang segar maupun teknis, serta mengutamakan kepuasan pelanggan secara konsisten.'
                }
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100">
              <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center font-bold mb-4">⭐</div>
              <h3 className="font-bold text-slate-900 mb-2">
                {isEn ? 'Quality Commitment' : 'Komitmen Mutu'}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {isEn 
                  ? 'Strict operational standards with multi-layered quality checks to ensure every ship logistics item meets international maritime specifications.'
                  : 'Standar operasional ketat dengan pemeriksaan mutu berlapis untuk memastikan setiap logistik kapal memenuhi spesifikasi maritim internasional.'
                }
              </p>
            </div>
          </div>
        </div>

        {/* SERVICES SECTION */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              {isEn ? 'Service Catalog' : 'Katalog Layanan'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              {isEn ? 'Supply & Logistics Coverage' : 'Cakupan Penyediaan & Logistik'}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {isEn ? 'Select the ship provisions service category you need below.' : 'Pilih kategori layanan perbekalan kapal yang Anda butuhkan di bawah ini.'}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {[
              { id: 'all', label: isEn ? 'All Services' : 'Semua Layanan' },
              { id: 'provision', label: 'Provision & Galley' },
              { id: 'deck', label: 'Deck & Safety' },
              { id: 'service', label: 'General & Urgency' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div key={service.id} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-500 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <span className="text-xs font-mono font-semibold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-md">
                      #{service.id}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{isEn ? service.desc.en : service.desc.id}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-emerald-600">
                  {isEn ? 'Available 24/7 for Vessels' : 'Tersedia 24/7 untuk Kapal'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 sm:p-10">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-xs font-semibold text-emerald-600 uppercase tracking-wider">
              {isEn ? 'General Information' : 'Informasi Umum'}
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              {isEn ? 'Frequently Asked Questions' : 'Pertanyaan yang Sering Diajukan'}
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 text-left font-semibold text-slate-900 bg-slate-50 hover:bg-slate-100 flex justify-between items-center transition-colors"
                >
                  <span>{isEn ? faq.q.en : faq.q.id}</span>
                  <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {openFaq === index && (
                  <div className="p-5 bg-white text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {isEn ? faq.a.en : faq.a.id}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}