import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'CV. Subang Supply Logistic',
  description: 'General Ship Supplier & Ship Chandler Patimban',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={inter.className} suppressHydrationWarning>
        <LanguageProvider>
          {/* PASTI KAN NAVBAR ADA DI SINI */}
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}