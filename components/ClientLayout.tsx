'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/Navbar';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <Navbar />
      {children}
    </LanguageProvider>
  );
}