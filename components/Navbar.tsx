'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import RequestOrderModal from '@/components/RequestOrderModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { totalItems } = useCart();
  const [isOrderOpen, setIsOrderOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[100] bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
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
              href="/products"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Produk', 'Products')}
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Kontak Kami', 'Contact Us')}
            </Link>

            <button
              type="button"
              onClick={() => setIsOrderOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2 rounded-xl text-sm shadow-sm transition cursor-pointer"
            >
              {t('Request Order', 'Request Order')}
            </button>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="flex items-center gap-3">
            {/* KERANJANG NAVBAR */}
            <Link
              href="/cart"
              className="relative p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition flex items-center justify-center cursor-pointer"
              title="Keranjang Order"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {totalItems > 0 && (
                <span className="absolute -top-1.5 -right-1.5 bg-emerald-600 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white shadow-sm">
                  {totalItems}
                </span>
              )}
            </Link>

            {/* SWITCHER BAHASA TUNGGAL */}
            <div className="flex items-center bg-slate-100 p-1 rounded-full border border-slate-300 text-xs font-bold relative z-[110]">
              <button
                type="button"
                onClick={() => setLanguage('en')}
                className={`cursor-pointer px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'en'
                    ? 'bg-blue-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('id')}
                className={`cursor-pointer px-3 py-1 rounded-full text-xs font-bold transition-all ${
                  language === 'id'
                    ? 'bg-blue-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-slate-900 bg-transparent'
                }`}
              >
                ID
              </button>
            </div>

            {/* TOGGLE MENU MOBILE */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-slate-700 hover:text-blue-950 focus:outline-none cursor-pointer"
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

        {/* MOBILE DROPDOWN */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-[64px] left-0 w-full bg-white border-t border-slate-200 px-5 pt-3 pb-6 space-y-3 shadow-xl z-[90]">
            <Link
              href="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100"
            >
              {t('Beranda', 'Home')}
            </Link>
            <Link
              href="/about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100"
            >
              {t('Tentang', 'About')}
            </Link>
            <Link
              href="/products"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100"
            >
              {t('Produk', 'Products')}
            </Link>
            <Link
              href="/cart"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center justify-between text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100"
            >
              <span>{t('Keranjang Order', 'Order Cart')}</span>
              {totalItems > 0 && (
                <span className="bg-emerald-600 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  {totalItems}
                </span>
              )}
            </Link>
            <Link
              href="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-800 hover:text-blue-900 py-2 border-b border-slate-100"
            >
              {t('Kontak Kami', 'Contact Us')}
            </Link>

            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsOrderOpen(true);
              }}
              className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 rounded-xl text-sm shadow-sm transition text-center cursor-pointer mt-3"
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