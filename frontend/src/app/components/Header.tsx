"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // fix flash light mode

    const stored = localStorage.getItem("theme");
    const darkPrefers = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (stored === "dark" || (!stored && darkPrefers)) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
    setTimeout(() => {
        document.getElementById('splash-app')?.remove();
    }, 1000);
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    const next = isDark ? "light" : "dark";

    if (next === "dark") root.classList.add("dark");
    else root.classList.remove("dark");

    setIsDark(!isDark);
    localStorage.setItem("theme", next);
  };

  if (!mounted) return null;

  return (
    <header className="sticky top-0 z-50 transition-colors duration-300 bg-transparent dark:bg-primary/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <img
            src="/icon-layout.png"
            alt="Vemo Logo"
            className="h-8 filter invert dark:invert-0 transition"
          />
          Vemo
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6 font-medium">
          <Link href="/about" className="relative group">
            <span className="transition-colors group-hover:text-primary-light">
              Giới thiệu
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="relative group">
            <span className="transition-colors group-hover:text-primary-light">
              Liên hệ
            </span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </Link>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            className="p-2 rounded hover:bg-primary-dark transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} className="text-white" /> : <Menu size={28} className="text-white" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-primary-dark text-white px-4 py-4 space-y-3"
          >
            <Link href="/" className="block hover:text-primary-light transition" onClick={() => setMenuOpen(false)}>
              Trang chủ
            </Link>
            <Link href="/about" className="block hover:text-primary-light transition" onClick={() => setMenuOpen(false)}>
              Giới thiệu
            </Link>
            <Link href="/contact" className="block hover:text-primary-light transition" onClick={() => setMenuOpen(false)}>
              Liên hệ
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
