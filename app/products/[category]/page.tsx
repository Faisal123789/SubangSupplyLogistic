'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import { productCategories, productsDatabase } from '@/data/products';

export default function CategoryShopPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;

  const { t } = useLanguage();
  const { cart, addToCart, updateQuantity, totalItems } = useCart();

  const categoryInfo = productCategories.find((c) => c.id === categoryId);
  const products = productsDatabase[categoryId] || [];

  if (!categoryInfo) {
    return (
      <main className="min-h-screen bg-slate-50 pt-28 text-center px-4">
        <p className="text-slate-600 font-medium">{t('Kategori tidak ditemukan.', 'Category not found.')}</p>
        <button
          onClick={() => router.push('/products')}
          className="mt-4 px-5 py-2.5 bg-blue-950 text-white rounded-xl text-sm font-bold cursor-pointer"
        >
          {t('Kembali ke Katalog', 'Back to Catalog')}
        </button>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/70 pt-10 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* TOP BAR */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => router.push('/products')}
              className="p-2.5 rounded-xl hover:bg-slate-100 text-slate-700 transition cursor-pointer"
              title={t('Kembali ke Kategori', 'Back to Categories')}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </button>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                {t('Kategori Produk', 'Product Category')}
              </span>
              <h1 className="text-xl sm:text-2xl font-black text-blue-950 flex items-center gap-2">
                <span>{categoryInfo.icon}</span>
                <span>{t(categoryInfo.name, categoryInfo.nameEn)}</span>
              </h1>
            </div>
          </div>

          <Link
            href="/cart"
            className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-4 py-2.5 rounded-xl text-sm shadow-sm transition cursor-pointer"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span>{t('Keranjang Order', 'Order Cart')}</span>
            {totalItems > 0 && (
              <span className="bg-white text-emerald-800 text-xs px-2 py-0.5 rounded-full font-black">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* ETALASE PRODUK */}
        {products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 text-slate-500 shadow-sm">
            <p className="text-base font-semibold">
              {t('Daftar barang pada kategori ini sedang disiapkan.', 'Item list for this category is currently being prepared.')}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {products.map((product) => {
              const cartItem = cart.find((i) => i.id === product.id);
              const qty = cartItem ? cartItem.quantity : 0;

              return (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm flex flex-col justify-between hover:shadow-md transition"
                >
                  {/* BOX GAMBAR BARANG */}
                  <div className="aspect-square bg-slate-100 w-full relative flex items-center justify-center text-slate-400 text-xs font-semibold p-2 text-center border-b border-slate-100">
                    {product.image ? (
                      <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl">{categoryInfo.icon}</span>
                        <span className="text-[11px] text-slate-400 font-medium">
                          {t('Foto Barang', 'Item Photo')}
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-3.5 flex flex-col flex-grow justify-between">
                    <div>
                      <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
                        {t('Satuan', 'Unit')}: {t(product.unit, product.unitEn)}
                      </span>
                      <h2 className="text-xs sm:text-sm font-bold text-slate-900 line-clamp-2 leading-snug mb-3">
                        {t(product.name, product.nameEn)}
                      </h2>
                    </div>

                    {/* PENGATUR JUMLAH / TAMBAH KERANJANG */}
                    {qty === 0 ? (
                      <button
                        type="button"
                        onClick={() =>
                          addToCart({
                            id: product.id,
                            name: t(product.name, product.nameEn),
                            category: t(categoryInfo.name, categoryInfo.nameEn),
                            unit: t(product.unit, product.unitEn),
                          })
                        }
                        className="w-full bg-blue-50 text-blue-900 hover:bg-blue-950 hover:text-white text-xs font-bold py-2 rounded-xl transition border border-blue-200 hover:border-blue-950 cursor-pointer"
                      >
                        + {t('Keranjang', 'Cart')}
                      </button>
                    ) : (
                      <div className="flex items-center justify-between bg-slate-100 border border-slate-200 rounded-xl p-1">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 transition cursor-pointer font-bold"
                        >
                          -
                        </button>
                        <span className="text-xs font-black text-slate-900">{qty}</span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-7 h-7 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition cursor-pointer font-bold"
                        >
                          +
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </main>
  );
}