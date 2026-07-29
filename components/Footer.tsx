'use client';

import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 border-t border-slate-900 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <p className="font-bold text-white text-base">CV. SUBANG SUPPLY LOGISTIC</p>
          <p className="mt-1 text-slate-400">
            {t(
              'Penyedia Perbekalan & Logistik Kapal Terpercaya Pelabuhan Patimban Subang.',
              'Trusted Ship Supply & Logistics Provider at Patimban Port Subang.'
            )}
          </p>
        </div>
        <div className="text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Subang Supply Logistic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}