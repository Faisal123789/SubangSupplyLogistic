'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import RequestOrderModal from '@/components/RequestOrderModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 overflow-hidden rounded-lg border border-slate-200 shadow-sm shrink-0">
              <Image
                src="/logo2.jpg"
                alt="SUBANG SUPPLY & LOGISTICS"
                fill
                className="object-cover"
                priority
              />
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

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Beranda', 'Home')}
            </Link>
            <Link
              href="/about"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Tentang', 'About')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Kontak Kami', 'Contact Us')}
            </Link>

            {/* BUTTON REQUEST ORDER */}
            <button
              type="button"
              onClick={() => setIsOrderOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-sm shadow-sm transition cursor-pointer"
            >
              {t('Request Order', 'Request Order')}
            </button>

            {/* SWITCHER BAHASA DESKTOP */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-200 text-xs font-bold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-2 py-0.5 rounded-full transition ${
                  language === 'en'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-2 py-0.5 rounded-full transition ${
                  language === 'id'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                ID
              </button>
            </div>
          </nav>

          {/* MOBILE CONTROLS & HAMBURGER */}
          <div className="flex items-center gap-2 md:hidden">
            {/* SWITCHER BAHASA MOBILE */}
            <div className="flex items-center bg-slate-100 p-0.5 rounded-full border border-slate-200 text-[10px] font-bold">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`px-1.5 py-0.5 rounded-full transition ${
                  language === 'en'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`px-1.5 py-0.5 rounded-full transition ${
                  language === 'id'
                    ? 'bg-blue-900 text-white shadow-sm'
                    : 'text-slate-600'
                }`}
              >
                ID
              </button>
            </div>

            {/* TOGGLE MENU MOBILE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-blue-950 focus:outline-none"
              aria-label="Toggle Menu"
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

        {/* MOBILE DROPDOWN MENU */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-5 space-y-3 shadow-lg animate-fade-in">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-1.5 border-b border-slate-100"
            >
              {t('Beranda', 'Home')}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-1.5 border-b border-slate-100"
            >
              {t('Tentang', 'About')}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-semibold text-slate-700 hover:text-blue-900 py-1.5 border-b border-slate-100"
            >
              {t('Kontak Kami', 'Contact Us')}
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOrderOpen(true);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-sm transition text-center cursor-pointer mt-2"
            >
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