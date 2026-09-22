'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import RequestOrderModal from '@/components/RequestOrderModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-lg border border-slate-200 shadow-sm shrink-0">
              <Image src="/logo2.jpg" alt="SUBANG SUPPLY & LOGISTICS" fill className="object-cover" priority />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-blue-950 text-xs sm:text-base leading-tight tracking-tight">
                SUBANG SUPPLY & LOGISTICS
              </span>
              <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 tracking-wider uppercase">
                serve with trust
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition">{t('Beranda', 'Home')}</Link>
            <Link href="/about" className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition">{t('Tentang', 'About')}</Link>
            <Link href="/products" className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition">{t('Produk', 'Products')}</Link>
            <Link href="/contact" className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition">{t('Kontak Kami', 'Contact Us')}</Link>
            <button onClick={() => setIsOrderOpen(true)} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-sm shadow-sm transition">
              {t('Request Order', 'Request Order')}
            </button>
          </nav>

          {/* KONTROL BAHASA & HAMBURGER (HANYA ADA DI SINI) */}
          <div className="flex items-center gap-3">
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-300 text-xs font-bold relative z-[110]">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-blue-950 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`cursor-pointer px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                  language === 'id' ? 'bg-blue-950 text-white shadow-md' : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                ID
              </button>
            </div>

            {/* HAMBURGER KHUSUS MOBILE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-950 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* DROPDOWN MOBILE MENU (ABSOLUTE AGAR TIDAK MENDORONG LAYOUT) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[64px] left-0 w-full bg-white border-t border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl z-[90]">
            <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100">{t('Beranda', 'Home')}</Link>
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100">{t('Tentang', 'About')}</Link>
            <Link href="/products" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100">{t('Produk', 'Products')}</Link>
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100">{t('Kontak Kami', 'Contact Us')}</Link>
            <button onClick={() => { setIsMobileMenuOpen(false); setIsOrderOpen(true); }} className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-sm transition text-center mt-3">
              {t('Request Order', 'Request Order')}
            </button>
          </div>
        )}
      </header>

      {/* MODAL REQUEST ORDER */}
      <RequestOrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </>
  );
}