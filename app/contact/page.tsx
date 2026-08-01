'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { language } = useLanguage();
  const isEn = language === 'en';

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-3">{isEn ? 'Contact Us' : 'Hubungi Kami'}</h1>
          <p className="text-slate-600 text-sm max-w-xl mx-auto">
            {isEn 
              ? 'We are ready to serve your ship provisions and logistics needs 24/7. Contact us via the details below.' 
              : 'Kami siap melayani kebutuhan perbekalan dan logistik kapal Anda 24/7. Hubungi kami melalui kontak di bawah ini.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl">📱</div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">WhatsApp / Telepon</p>
                <p className="text-sm font-bold text-slate-900">+62 813-1155-8121</p>
                <p className="text-sm font-bold text-slate-900 mt-1">+62 811-1111-8220</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl">✉️</div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{isEn ? 'Official Email' : 'Email Resmi'}</p>
                <p className="text-sm font-bold text-slate-900">subangsupplylog@gmail.com</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl text-xl">📍</div>
              <div>
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">{isEn ? 'Office Address' : 'Alamat Kantor'}</p>
                <p className="text-sm text-slate-900 leading-relaxed">Gg. Cendrawasih No. 4, Subang, Jawa Barat, Indonesia</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
            <p className="text-xs font-semibold text-emerald-600 uppercase tracking-wider mb-4">Lokasi Operasional Kami</p>
            <div className="w-full h-[400px] rounded-xl overflow-hidden border border-slate-100">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.834925893457!2d107.7577!3d-6.5688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzQnMDcuNyJTIDEwN8KwNDUnMjcuNyJF!5e0!3m2!1sid!2sid!4v1600000000000!5m2!1sid!2sid"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}