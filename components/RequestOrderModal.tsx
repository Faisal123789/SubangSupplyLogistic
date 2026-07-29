'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface RequestOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

// Helper untuk menghitung tanggal minimal (H+14 hari kerja)
function getMinWorkDaysDate(workDaysToAdd: number): string {
  const date = new Date();
  let added = 0;

  while (added < workDaysToAdd) {
    date.setDate(date.getDate() + 1);
    const dayOfWeek = date.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) {
      added++;
    }
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
}

export default function RequestOrderModal({ isOpen, onClose }: RequestOrderModalProps) {
  // Hanya ambil 'language' dan 't' (menghapus 'lang' yang bikin error TypeScript)
  const { language, t } = useLanguage();

  const currentLang = (language || 'id').toString().toLowerCase();

  const minDate = useMemo(() => getMinWorkDaysDate(14), []);

  const [formData, setFormData] = useState({
    vesselName: '',
    masterName: '',
    companyName: '',
    agencyName: '',
    orderDate: '',
    phone: '',
    serviceType: 'Fresh Provisions & Dry Food',
    notes: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Template pesan dinamis berdasarkan bahasa aktif (en / id)
    const isEnglish = currentLang === 'en';

    const message = isEnglish 
      ? `*REQUEST ORDER SUPPLIES — CV. SUBANG SUPPLY LOGISTIC*
=========================================
🚢 *Vessel Name*: ${formData.vesselName}
👨‍✈️ *Master Name*: ${formData.masterName}
🏢 *Company Name*: ${formData.companyName}
⚓ *Ship Agency*: ${formData.agencyName}
📅 *Sent Order Date / ETA*: ${formData.orderDate}
📞 *Contact Person WA*: ${formData.phone}
📦 *Supply Category*: ${formData.serviceType}
📝 *Notes / Item Details*: ${formData.notes || '-'}
=========================================
_Please confirm and send us the price quotation. Thank you._`
      : `*REQUEST ORDER SUPPLIES — CV. SUBANG SUPPLY LOGISTIC*
=========================================
🚢 *Nama Kapal*: ${formData.vesselName}
👨‍✈️ *Nama Master/Kapten*: ${formData.masterName}
🏢 *Nama Perusahaan*: ${formData.companyName}
⚓ *Nama Agency Kapal*: ${formData.agencyName}
📅 *Tanggal Sent Order / ETA*: ${formData.orderDate}
📞 *No. WhatsApp Pemesan*: ${formData.phone}
📦 *Jenis Layanan*: ${formData.serviceType}
📝 *Catatan / Detail Order*: ${formData.notes || '-'}
=========================================
_Mohon konfirmasi dan estimasi penawaran harga (Quotation). Terima kasih._`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/6281311558121?text=${encodedMessage}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 w-full max-w-2xl max-h-[90vh] overflow-y-auto relative">
        
        {/* HEADER MODAL */}
        <div className="bg-blue-900 text-white p-6 rounded-t-2xl flex items-center justify-between sticky top-0 z-10">
          <div>
            <span className="text-xs font-bold text-cyan-300 uppercase tracking-widest">
              {t('Form Pemesanan Logistik', 'Supply Request Form')}
            </span>
            <h2 className="text-xl md:text-2xl font-bold">
              {t('Request Order Perbekalan Kapal', 'Ship Supply Request Order')}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-slate-300 hover:text-white bg-blue-800 hover:bg-blue-700 w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* FORM CONTENT */}
        <form onSubmit={handleSubmit} className="p-6 md:p-8 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* 1. NAMA KAPAL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('Nama Kapal (Vessel Name)', 'Vessel Name')} *
              </label>
              <input
                type="text"
                name="vesselName"
                required
                value={formData.vesselName}
                onChange={handleChange}
                placeholder="e.g. MV. PATIMBAN STAR"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* 2. NAMA MASTER */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('Nama Master / Kapten', 'Master Name')} *
              </label>
              <input
                type="text"
                name="masterName"
                required
                value={formData.masterName}
                onChange={handleChange}
                placeholder="e.g. Capt. Alexander"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* 3. NAMA PERUSAHAAN */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('Nama Perusahaan (Owner/Operator)', 'Company Name')} *
              </label>
              <input
                type="text"
                name="companyName"
                required
                value={formData.companyName}
                onChange={handleChange}
                placeholder="e.g. PT. Ocean Navigation Lines"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* 4. NAMA AGENCY KAPAL */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('Nama Agency Kapal', 'Ship Agency Name')} *
              </label>
              <input
                type="text"
                name="agencyName"
                required
                value={formData.agencyName}
                onChange={handleChange}
                placeholder="e.g. Maritime Agency Subang"
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

            {/* 5. TANGGAL SENT ORDER */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('Tanggal Sent Order / Berthing ETA', 'Order Date / ETA')} *
              </label>
              <input
                type="date"
                name="orderDate"
                required
                min={minDate}
                value={formData.orderDate}
                onChange={handleChange}
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
              <p className="text-[11px] text-amber-600 font-medium mt-1">
                * {t('Pemesanan minimal H+14 hari kerja dari hari ini.', 'Minimum order date is 14 working days from today.')}
              </p>
            </div>

            {/* 6. NO WHATSAPP PEMESAN */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                {t('No. WhatsApp Pemesan', 'Contact Person WA')} *
              </label>
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="+62 812..."
                className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
              />
            </div>

          </div>

          {/* KATEGORI PERBEKALAN */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {t('Kategori Perbekalan Utama', 'Primary Supply Category')}
            </label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition"
            >
              <option value="Fresh Provisions & Dry Food">Fresh Provisions & Dry Food</option>
              <option value="Deck Stores & Safety Equipment">Deck Stores & Safety Equipment</option>
              <option value="Engine Technical Equipment & Spare Parts">Engine Technical Equipment & Spare Parts</option>
              <option value="Cabin Stores & Cleaning Materials">Cabin Stores & Cleaning Materials</option>
              <option value="Full General Chandler Package">Full General Chandler Package</option>
            </select>
          </div>

          {/* CATATAN KEBUTUHAN */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              {t('Catatan Tambahan / Ringkasan Item Order', 'Additional Notes / Item Summary')}
            </label>
            <textarea
              name="notes"
              rows={3}
              value={formData.notes}
              onChange={handleChange}
              placeholder={t('Contoh: Butuh fresh meat 50kg, mineral water 30 case...', 'e.g. Need fresh meat 50kg, mineral water 30 cases...')}
              className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:border-blue-600 focus:ring-2 focus:ring-blue-100 outline-none transition resize-none"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-600 font-semibold text-sm hover:bg-slate-100 transition cursor-pointer"
            >
              {t('Batal', 'Cancel')}
            </button>
            <button
              type="submit"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-2.5 rounded-xl shadow-md hover:shadow-emerald-600/20 transition flex items-center gap-2 text-sm cursor-pointer"
            >
              <span>{t('Kirim Order via WhatsApp', 'Send Order via WhatsApp')}</span>
              <span>&rarr;</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}