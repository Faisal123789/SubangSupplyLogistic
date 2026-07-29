'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function ContactPage() {
  const { t } = useLanguage();

  const phoneDisplay = "+62 813-1155-8121";
  const whatsappNumber = "6281311558121";
  const emailAddress = "subangsupplylog@gmail.com";

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* HEADER SECTION */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            {t('Hubungi Kami', 'Contact Us')}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base">
            {t(
              'Kami siap melayani kebutuhan perbekalan dan logistik kapal Anda 24/7. Hubungi kami melalui kontak di bawah ini.',
              'We are ready to serve your ship supply and logistics needs 24/7. Feel free to contact us below.'
            )}
          </p>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* INFORMASI KONTAK */}
          <div className="space-y-6">
            
            {/* WHATSAPP / TELEPON */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-emerald-100 text-emerald-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{t('WhatsApp / Telepon', 'WhatsApp / Phone')}</h3>
                <a 
                  href={`https://wa.me/${whatsappNumber}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline font-semibold text-sm mt-1 block"
                >
                  {phoneDisplay}
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-blue-100 text-blue-900 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{t('Email Resmi', 'Official Email')}</h3>
                <a 
                  href={`mailto:${emailAddress}`} 
                  className="text-blue-900 hover:underline font-semibold text-sm mt-1 block break-all"
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* ALAMAT */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 flex items-start gap-4">
              <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm">{t('Alamat Kantor', 'Office Address')}</h3>
                <p className="text-slate-600 text-xs sm:text-sm mt-1 leading-relaxed">
                  Gg. Cendrawasih No. 4, Subang, Jawa Barat, Indonesia
                </p>
              </div>
            </div>

          </div>

          {/* MAPS & FORM CONTAINER */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* GOOGLE MAPS EMBED */}
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-base font-bold text-slate-900 mb-3 px-2 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                {t('Lokasi Operasional Kami', 'Our Operational Location')}
              </h2>
              <div className="w-full h-72 sm:h-80 rounded-xl overflow-hidden border border-slate-100">
                <iframe
                  title="Subang Supply Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.847587847118!2d107.7580387!3d-6.5663529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e693b006888c7f7%3A0x6a0c5c4f346ef22e!2sGg.%20Cendrawasih%20No.4%2C%20Karanganyar%2C%20Kec.%20Subang%2C%20Kabupaten%20Subang%2C%20Jawa%20Barat%2041211!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}