'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { productCategories } from '@/data/products';

export default function ProductsCatalogPage() {
  const { t } = useLanguage();
  const { totalItems } = useCart();

  return (
    <main className="min-h-screen bg-slate-50/70 pb-20 pt-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-900 uppercase bg-blue-100/70 rounded-full border border-blue-200 mb-3">
              {t('Katalog Perbekalan Kapal', 'Ship Supply & Provisions Catalog')}
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-blue-950 tracking-tight">
              {t('Pilih Kategori Kebutuhan Kapal', 'Select Vessel Supply Category')}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
              {t(
                'Pilih kategori barang untuk melihat daftar produk, menambahkan kuantitas ke keranjang, dan mengajukan list perbekalan langsung ke tim CV. Subang Supply Logistic.',
                'Select a product category to browse items, add quantities to your order cart, and submit your ship requisition list directly to our team.'
              )}
            </p>
          </div>

          <Link
            href="/cart"
            className="self-start md:self-auto flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-3 rounded-xl text-sm shadow-sm transition cursor-pointer shrink-0"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{t('Lihat Keranjang', 'View Cart')}</span>
            {totalItems > 0 && (
              <span className="bg-white text-emerald-800 text-xs px-2 py-0.5 rounded-full font-black ml-1">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* GRID 9 KATEGORI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/products/${cat.id}`}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between group cursor-pointer"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h2 className="text-xl font-bold text-blue-950 mb-2 group-hover:text-blue-700 transition">
                  {t(cat.name, cat.nameEn)}
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {t(cat.desc, cat.descEn)}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-900 group-hover:text-blue-700">
                <span>{t('Buka Etalase Produk', 'Browse Products')}</span>
                <span className="text-base group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}