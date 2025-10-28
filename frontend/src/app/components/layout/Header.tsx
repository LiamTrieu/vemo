'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sun, Moon, BookOpen } from 'lucide-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Header({
  navMenus,
}: {
  navMenus: {
    name: string;
    href: string;
  }[];
}) {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const darkPrefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDarkMode = stored === 'dark' || (!stored && darkPrefers);

    if (isDarkMode) {
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const nextIsDark = !isDark;

    if (nextIsDark) root.classList.add('dark');
    else root.classList.remove('dark');

    setIsDark(nextIsDark);
    localStorage.setItem('theme', nextIsDark ? 'dark' : 'light');

    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', nextIsDark ? '#0d1117' : '#F2F2F7');
    }
  };

  return (
    <motion.header
      animate={{
        borderBottomRightRadius: isOpen ? 16 : 0,
        borderBottomLeftRadius: isOpen ? 16 : 0,
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 z-50 w-full bg-transparent backdrop-blur-lg`}
    >
      <motion.div
        initial={{ height: 60 }}
        animate={{
          height: isOpen ? 'auto' : 60,
          borderBottomRightRadius: isOpen ? 16 : 0,
          borderBottomLeftRadius: isOpen ? 16 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <Image
              priority
              width={43}
              height={32}
              src="/icon-layout.webp"
              alt="Vemo Logo"
              className="invert filter transition dark:invert-0"
            />
            Vemo
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navMenus.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="hover:text-primary font-medium transition-all duration-300 hover:-translate-y-0.5"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-4 md:flex">
            <button
              onClick={toggleTheme}
              className="group cursor-pointer rounded-full bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 dark:bg-gray-800"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <Sun
                  size={20}
                  className="text-yellow-500 transition-transform group-hover:scale-110"
                />
              ) : (
                <Moon
                  size={20}
                  className="text-primary transition-transform group-hover:scale-110"
                />
              )}
            </button>
            <Link
              href="/start"
              className="group from-primary flex items-center gap-3 rounded-2xl bg-gradient-to-r to-purple-500 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <BookOpen size={20} className="transition-transform group-hover:scale-110" />
              <span className="text-sm">Bắt đầu ngay</span>
            </Link>
          </div>

          {/* Mobile Buttons */}
          <div className="flex items-center gap-3 md:hidden">
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={toggleTheme}
              className="cursor-pointer rounded-full bg-white p-2 shadow-lg dark:bg-gray-800"
            >
              {isDark ? (
                <Sun size={20} className="text-yellow-500" />
              ) : (
                <Moon size={20} className="text-blue-600" />
              )}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer rounded-full bg-white p-2 shadow-lg dark:bg-gray-800"
            >
              <svg width="20" height="20" viewBox="0 0 20 20">
                {/* Line 1 */}
                <motion.path
                  initial={{ d: 'M2 5L18 5' }}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: 'M2 5L18 5' },
                    open: { d: 'M4 4L16 16' },
                  }}
                  animate={isOpen ? 'open' : 'closed'}
                />

                {/* Line 2 */}
                <motion.path
                  initial={{ opacity: 1 }}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 },
                  }}
                  animate={isOpen ? 'open' : 'closed'}
                  d="M2 10L18 10"
                />

                {/* Line 3 */}
                <motion.path
                  initial={{ d: 'M2 15L18 15' }}
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  variants={{
                    closed: { d: 'M2 15L18 15' },
                    open: { d: 'M4 16L16 4' },
                  }}
                  animate={isOpen ? 'open' : 'closed'}
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <nav className="flex flex-col space-y-3 overflow-hidden pb-4 md:hidden">
          {navMenus.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-primary font-medium transition-all"
            >
              {item.name}
            </Link>
          ))}

          <Link
            href="/start"
            onClick={() => setIsOpen(false)}
            className="from-primary flex items-center justify-center gap-3 rounded-lg bg-gradient-to-r to-purple-500 px-4 py-2 font-semibold text-white"
          >
            <BookOpen size={20} />
            <span className="text-sm">Bắt đầu ngay</span>
          </Link>
        </nav>
      </motion.div>
    </motion.header>
  );
}
