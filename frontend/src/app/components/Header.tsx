"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, BookOpen } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        const stored = localStorage.getItem("theme");
        const darkPrefers = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const isDarkMode = stored === "dark" || (!stored && darkPrefers);

        if (isDarkMode) {
            setIsDark(true);
        }
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextIsDark = !isDark;

        if (nextIsDark) root.classList.add("dark");
        else root.classList.remove("dark");

        setIsDark(nextIsDark);
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");

        const metaThemeColor = document.querySelector(
            'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                "content",
                nextIsDark ? "#0d1117" : "#F2F2F7"
            );
        }
    };

    return (
        <motion.header
            initial={{ height: 60 }}
            animate={{
                height: isOpen ? "auto" : 60,
                borderBottomRightRadius: isOpen ? 16 : 0,
                borderBottomLeftRadius: isOpen ? 16 : 0,
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={`fixed w-full top-0 z-50 bg-transparent backdrop-blur-lg overflow-hidden`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between py-3">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="flex items-center gap-2 font-bold text-xl"
                    >
                        <Image
                            width={43}
                            height={32}
                            src="/icon-layout.webp"
                            alt="Vemo Logo"
                            className="filter invert dark:invert-0 transition"
                        />
                        Vemo
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navMenus.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all duration-300 hover:-translate-y-0.5"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center gap-4">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg cursor-pointer hover:-translate-y-0.5 transition-all duration-300 group"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun
                                    size={20}
                                    className="text-yellow-500 group-hover:scale-110 transition-transform"
                                />
                            ) : (
                                <Moon
                                    size={20}
                                    className="text-primary group-hover:scale-110 transition-transform"
                                />
                            )}
                        </button>

                        <Link
                            href="/get-started"
                            className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-primary to-purple-500 text-white font-semibold hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <BookOpen
                                size={20}
                                className="group-hover:scale-110 transition-transform"
                            />
                            <span className="text-sm">Bắt đầu ngay</span>
                        </Link>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex items-center md:hidden gap-3">
                        <motion.button
                            whileTap={{ scale: 0.8 }}
                            onClick={toggleTheme}
                            className="p-2 rounded-full cursor-pointer bg-white dark:bg-gray-800 shadow-lg"
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
                            className="p-2 rounded-full cursor-pointer bg-white dark:bg-gray-800 shadow-lg"
                        >
                            <Menu
                                size={20}
                                className="text-gray-700 dark:text-gray-300"
                            />
                        </motion.button>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <nav className="md:hidden flex flex-col pb-4 space-y-3 overflow-hidden">
                    {navMenus.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setIsOpen(false)}
                            className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium transition-all"
                        >
                            {item.name}
                        </Link>
                    ))}

                    <Link
                        href="/get-started"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-primary to-purple-500 text-white font-semibold"
                    >
                        <BookOpen size={20} />
                        <span className="text-sm">Bắt đầu ngay</span>
                    </Link>
                </nav>
            </div>
        </motion.header>
    );
}
