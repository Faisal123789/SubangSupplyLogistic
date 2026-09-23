'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';

export default function CartPage() {
  const { t } = useLanguage();
  const router = useRouter();
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();

  const [vesselName, setVesselName] = useState('');
  const [port, setPort] = useState('Pelabuhan Patimban');
  const [agentName, setAgentName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [notes, setNotes] = useState('');

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setLoading(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/order-excel', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          vesselName,
          port,
          agentName,
          contactNumber,
          notes,
          items: cart,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Gagal mengirimkan order.');
      }

      setSuccess(true);
      clearCart();
    } catch (err: any) {
      setErrorMsg(err.message || 'Terjadi kesalahan sistem.');
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <main className="min-h-screen bg-slate-50 pt-28 pb-20 px-4">
        <div className="max-w-md mx-auto bg-white p-8 rounded-3xl border border-slate-200 shadow-xl text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl">
            ✓
          </div>
          <h1 className="text-2xl font-black text-blue-950">
            {t('Permintaan Order Terkirim!', 'Order Request Submitted!')}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {t(
              'Daftar perbekalan Anda telah berhasil diexport ke format Excel dan dikirimkan ke email subangsupplylog@gmail.com. Tim kami akan segera menindaklanjuti penawaran harga.',
              'Your supply list has been exported to Excel format and sent to subangsupplylog@gmail.com. Our team will follow up promptly.'
            )}
          </p>
          <button
            type="button"
            onClick={() => router.push('/products')}
            className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl text-sm transition cursor-pointer"
          >
            {t('Kembali ke Katalog', 'Back to Catalog')}
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50/70 pt-10 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-black text-blue-950">
              {t('Keranjang Permintaan Perbekalan', 'Provisions Order Cart')}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              {t('Periksa kembali kuantitas barang sebelum mengirimkan daftar requisition.', 'Review item quantities before submitting the requisition list.')}
            </p>
          </div>
          <Link
            href="/products"
            className="text-xs sm:text-sm font-bold text-blue-900 hover:text-blue-700 transition"
          >
            + {t('Tambah Barang Lain', 'Add More Items')}
          </Link>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <div className="text-5xl">🛒</div>
            <h2 className="text-lg font-bold text-slate-800">
              {t('Keranjang Anda masih kosong', 'Your cart is empty')}
            </h2>
            <p className="text-xs text-slate-500 max-w-sm mx-auto">
              {t('Silakan pilih produk dari etalase perbekalan terlebih dahulu.', 'Please select items from the provisions catalog first.')}
            </p>
            <Link
              href="/products"
              className="inline-block bg-blue-950 text-white text-xs font-bold px-6 py-3 rounded-xl hover:bg-blue-900 transition"
            >
              {t('Buka Katalog Produk', 'Browse Products')}
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* DAFTAR ITEM */}
            <div className="lg:col-span-2 space-y-3">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between gap-4"
                >
                  <div className="flex-grow">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      {item.category}
                    </span>
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                      {item.name}
                    </h3>
                    <span className="text-xs text-slate-500">
                      Satuan: {item.unit}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <div className="flex items-center bg-slate-100 border border-slate-200 rounded-xl p-1">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, -1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-red-50 hover:text-red-600 transition font-bold"
                      >
                        -
                      </button>
                      <span className="w-9 text-center text-xs font-black text-slate-900">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white border border-slate-200 rounded-lg text-slate-700 hover:bg-emerald-50 hover:text-emerald-600 transition font-bold"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="p-2 text-slate-400 hover:text-red-600 transition cursor-pointer"
                      title="Hapus"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}

              <div className="flex justify-end pt-2">
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:underline cursor-pointer"
                >
                  {t('Kosongkan Keranjang', 'Clear Cart')}
                </button>
              </div>
            </div>

            {/* FORM IDENTITAS PENGIRIMAN EXCEL */}
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 h-fit">
              <h2 className="text-lg font-black text-blue-950 border-b border-slate-100 pb-3">
                {t('Informasi Permintaan', 'Requisition Details')}
              </h2>

              {errorMsg && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-xl text-xs text-red-600">
                  {errorMsg}
                </div>
              )}

              <form onSubmit={handleCheckout} className="space-y-3.5 text-xs">
                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {t('Nama Kapal (Vessel Name) *', 'Vessel Name *')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: MV. Glory Ocean"
                    value={vesselName}
                    onChange={(e) => setVesselName(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {t('Lokasi Pelabuhan', 'Port Location')}
                  </label>
                  <input
                    type="text"
                    value={port}
                    onChange={(e) => setPort(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {t('Nama PIC / Perwakilan', 'Agent / Master Name')}
                  </label>
                  <input
                    type="text"
                    placeholder="Nama Anda"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {t('Nomor WhatsApp / Telp', 'WhatsApp / Phone Number')}
                  </label>
                  <input
                    type="tel"
                    placeholder="+62 812..."
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1">
                    {t('Catatan Tambahan', 'Special Notes')}
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Contoh: Pengantaran tanggal 28, butuh packing kedap air."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-2.5 border border-slate-300 rounded-xl focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-emerald-600 hover:bg-emerald-500 disabled:bg-slate-400 text-white font-bold py-3.5 rounded-xl text-sm shadow-md transition cursor-pointer"
                  >
                    {loading
                      ? t('Membuat Excel & Mengirim...', 'Generating Excel & Sending...')
                      : t('Kirim Request Order (Excel)', 'Send Requisition (Excel)')}
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-2 leading-normal">
                    {t(
                      'Daftar pesanan akan otomatis diformat menjadi Excel (.xlsx) dan diteruskan ke subangsupplylog@gmail.com.',
                      'Order items will be automatically formatted into Excel (.xlsx) and forwarded to subangsupplylog@gmail.com.'
                    )}
                  </p>
                </div>
              </form>
            </div>

          </div>
        )}

      </div>
    </main>
  );
}