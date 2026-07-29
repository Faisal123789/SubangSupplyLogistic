'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import RequestOrderModal from '@/components/RequestOrderModal';

export default function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const [isOrderOpen, setIsOrderOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10 overflow-hidden rounded-lg border border-slate-200 shadow-sm shrink-0">
              <Image
                src="/logo2.jpg"
                alt="SUBANG SUPPLY & LOGISTICS"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-blue-950 text-sm sm:text-base leading-tight tracking-tight">
                SUBANG SUPPLY & LOGISTICS
              </span>
              <span className="text-[10px] font-semibold text-slate-500 tracking-wider">
                serve with trust
              </span>
            </div>
          </Link>

          {/* MENU NAVIGASI */}
          <nav className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Beranda', 'Home')}
            </Link>
            <Link
              href="/about"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Tentang', 'About')}
            </Link>

            {/* CONTACT US (LANGSUNG LINK KE /contact) */}
            <Link
              href="/contact"
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-blue-900 transition"
            >
              {t('Kontak Kami', 'Contact Us')}
            </Link>

            {/* BUTTON REQUEST ORDER */}
            <button
              type="button"
              onClick={() => setIsOrderOpen(true)}
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl text-xs sm:text-sm shadow-sm transition cursor-pointer"
            >
              {t('Request Order', 'Request Order')}
            </button>

            {/* SWITCHER BAHASA */}
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

        </div>
      </header>

      {/* MODAL REQUEST ORDER */}
      <RequestOrderModal isOpen={isOrderOpen} onClose={() => setIsOrderOpen(false)} />
    </>
  );
}