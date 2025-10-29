'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Splash() {
  const [hide, setHide] = useState(false);

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
    }, 40000);
  }, []);

  if (hide) return null;

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
