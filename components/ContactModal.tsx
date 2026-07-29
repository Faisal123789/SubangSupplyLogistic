'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* HERO BANNER BIRU LAUT */}
      <section className="bg-blue-950 text-white py-16 px-6 text-center border-b border-blue-900">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-4 text-white">
          {t('Hubungi Kami', 'Contact Us')}
        </h1>
        <p className="text-blue-200 text-sm md:text-base max-w-xl mx-auto">
          {t('Tim operasional kami siap melayani kebutuhan kapal Anda 24/7.', 'Our operational team is ready to serve your vessel 24/7.')}
        </p>
      </section>

      {/* SECTION KONTAK DAN PETA */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          
          {/* KARTU INFORMASI KONTAK */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 border-b pb-3">
              {t('Layanan Pelanggan & WhatsApp', 'Customer Service & WhatsApp')}
            </h2>
            
            <div className="space-y-4">
              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t('Hotline WhatsApp 24/7', '24/7 WhatsApp Hotline')}</span>
                <p className="text-xl font-bold text-emerald-600">+62 813 1155 8121</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t('Email Resmi', 'Official Email')}</span>
                <p className="text-base font-semibold text-slate-800">procurement@subangsupplylog.com</p>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t('Alamat Kantor', 'Office Address')}</span>
                <p className="text-sm font-semibold text-slate-800 leading-relaxed mt-1">
                  Gg. Cendrawasih No.4, Karanganyar, Kec. Subang, Kabupaten Subang, Jawa Barat 41211
                </p>
              </div>

              <div>
                <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">{t('Wilayah Operasional', 'Operational Area')}</span>
                <p className="text-sm font-semibold text-slate-800">Subang Smartport Patimban & Around Ports</p>
              </div>
            </div>

            <a
              href="https://wa.me/6281311558121?text=Hello%20CV.%20Subang%20Supply%20Logistic"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl shadow transition"
            >
              {t('Chat WhatsApp Sekarang (+62 813 1155 8121)', 'Chat on WhatsApp Now (+62 813 1155 8121)')}
            </a>
          </div>

          {/* DETAIL PROSEDUR OPERASIONAL */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 border-b pb-3 mb-4">
                {t('Prosedur Pemesanan (H-14)', 'Advanced Order Procedure (14-Day)')}
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                {t(
                  'Untuk menjamin kesegaran bahan makanan dan spesifikasi peralatan teknis deck/engine yang akurat, pemesanan dapat dikirimkan H-14 kerja sebelum kapal bersandar.',
                  'To guarantee item freshness and accurate technical specifications, orders can be submitted up to 14 working days before vessel berthing.'
                )}
              </p>
            </div>

            <div className="p-5 bg-blue-50 border border-blue-100 rounded-xl text-xs text-blue-900 space-y-2">
              <p className="font-bold text-sm text-blue-950">⚓ CV. Subang Supply Logistic</p>
              <p className="italic">"Serve with Trust" — Marine Provisions & General Ship Supplies</p>
            </div>
          </div>

        </div>

        {/* GOOGLE MAPS EMBEDDED */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-3 px-2">
            📍 {t('Lokasi Kantor Kami', 'Our Office Location')}
          </h3>
          <div className="w-full h-80 rounded-xl overflow-hidden border border-slate-200">
            <iframe
              title="Google Maps Subang Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.708892601931!2d107.7634!3d-6.5585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693b82159670d9%3A0x6a1b2c3d4e5f6g7h!2sGg.%20Cendrawasih%20No.4%2C%20Karanganyar%2C%20Kec.%20Subang%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat%2041211!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </section>
    </main>
  );
}