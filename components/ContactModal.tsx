'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { t } = useLanguage();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-md relative overflow-hidden">
        
        {/* Header */}
        <div className="bg-blue-900 text-white p-5 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-widest">
              Subang Supply & Logistics
            </span>
            <h3 className="font-bold text-lg mt-0.5">
              {t('Hubungi Kami', 'Contact Us')}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white bg-blue-800 hover:bg-blue-700 w-8 h-8 rounded-full flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-4">
          <p className="text-sm text-slate-600 mb-4 leading-relaxed">
            {t(
              'Silakan hubungi tim operasional kami untuk menanyakan ketersediaan produk, spesifikasi khusus, atau bantuan lebih lanjut.',
              'Please contact our operational team to inquire about product availability, custom specifications, or further assistance.'
            )}
          </p>

          <a
            href="https://wa.me/6281311558121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 p-4 rounded-xl border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 transition group"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.347-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-0.5">WhatsApp / Telepon</p>
              <p className="text-sm font-bold text-slate-800">+62 813-1155-8121</p>
            </div>
          </a>

          <a
            href="mailto:subangsupplylog@gmail.com"
            className="flex items-center gap-3.5 p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 transition group"
          >
            <div className="w-10 h-10 rounded-full bg-slate-800 text-white flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-0.5">Email Resmi</p>
              <p className="text-sm font-bold text-slate-800">subangsupplylog@gmail.com</p>
            </div>
          </a>
        </div>

        {/* Footer */}
        <div className="bg-slate-50 p-5 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 text-xs font-bold text-slate-600 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 hover:text-slate-900 transition shadow-sm cursor-pointer"
          >
            {t('Tutup', 'Close')}
          </button>
        </div>

      </div>
    </div>
  );
}