"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Sun, Moon, BookOpen } from "lucide-react";
import Image from "next/image";

export default function Header({
    navMenus,
}: {
    navMenus: {
        name: string;
        href: string;
    }[];
}) {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const darkPrefers = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const isDarkMode = stored === "dark" || (!stored && darkPrefers);

        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        }

        setTimeout(() => {
            document.getElementById("splash-app")?.remove();
            const metaThemeColor = document.querySelector(
                'meta[name="theme-color"]'
            );
            if (metaThemeColor) {
                metaThemeColor.setAttribute(
                    "content",
                    isDarkMode ? "#0d1117" : "#FFFEFA"
                );
            }
        }, 400);
    }, []);

    const toggleTheme = () => {
        const root = document.documentElement;
        const nextIsDark = !isDark;

        if (nextIsDark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        setIsDark(nextIsDark);
        localStorage.setItem("theme", nextIsDark ? "dark" : "light");

        const metaThemeColor = document.querySelector(
            'meta[name="theme-color"]'
        );
        if (metaThemeColor) {
            metaThemeColor.setAttribute(
                "content",
                nextIsDark ? "#0d1117" : "#ffffff"
            );
        }
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 bg-transparent backdrop-blur-lg`}
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
                            src="/icon-layout.png"
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
                        {/* Theme Toggle */}
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

                        {/* CTA Button */}
                        <Link
                            href="/get-started"
                            className="group flex items-center gap-3 px-4 py-2 rounded-2xl bg-gradient-to-r from-primary to-purple-500 text-white font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        >
                            <BookOpen
                                size={20}
                                className="group-hover:scale-110 transition-transform"
                            />
                            <span>Bắt đầu ngay</span>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden gap-3">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            aria-label="Toggle dark mode"
                        >
                            {isDark ? (
                                <Sun size={20} className="text-yellow-500" />
                            ) : (
                                <Moon size={20} className="text-blue-600" />
                            )}
                        </button>

                        <button
                            className="p-2 rounded-full cursor-pointer bg-white dark:bg-gray-800 shadow-lg hover:-translate-y-0.5 transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <Menu
                                size={20}
                                className="text-gray-700 dark:text-gray-300"
                            />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
}
