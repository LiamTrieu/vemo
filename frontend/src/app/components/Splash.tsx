'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Header from './layout/Header';
import Footer from './layout/Footer';

export default function Splash({ children }: { children: React.ReactNode }) {
  const [hide, setHide] = useState(false);

  const navMenus = [
    {
      name: 'Bộ thẻ',
      href: '/flashcards',
    },
    {
      name: 'Hướng dẫn',
      href: '/guides',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Giới thiệu',
      href: '/about',
    },
  ];

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const darkPrefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = stored === 'dark' || (!stored && darkPrefers);
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    }
    setTimeout(() => {
      setHide(true);
      const metaThemeColor = document.querySelector('meta[name="theme-color"]');
      if (metaThemeColor) {
        metaThemeColor.setAttribute('content', isDarkMode ? '#0d1117' : '#F2F2F7');
      }
    }, 400);
  }, []);

  if (hide)
    return (
      <>
        <Header navMenus={navMenus} />
        <main className="main container mx-auto p-4">{children}</main>
        <Footer navMenus={navMenus} />
      </>
    );

  return (
    <div className="from-primary fixed inset-0 z-100 flex flex-col items-center justify-center bg-gradient-to-b to-blue-600">
      <Image
        src="/icon-layout.webp"
        width={107}
        height={81}
        alt="Vemo Logo"
        className="mb-4 h-[81px] w-[107px]"
      />
    </div>
  );
}
