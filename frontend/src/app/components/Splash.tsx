"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Splash() {
    const [hide, setHide] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("theme");
        const darkPrefers = window.matchMedia(
            "(prefers-color-scheme: dark)"
        ).matches;
        const isDarkMode = stored === "dark" || (!stored && darkPrefers);
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
        }
        setTimeout(() => {
            setHide(true);
            const metaThemeColor = document.querySelector(
                'meta[name="theme-color"]'
            );
            if (metaThemeColor) {
                metaThemeColor.setAttribute(
                    "content",
                    isDarkMode ? "#0d1117" : "#F2F2F7"
                );
            }
        }, 400);
    }, []);

    if (hide) return null;

    return (
        <div className="fixed inset-0 bg-gradient-to-b from-primary to-blue-600 flex flex-col justify-center items-center z-100">
            <Image
                src="/icon-layout.webp"
                width={107}
                height={81}
                alt="Vemo Logo"
                className="mb-4 w-[107px] h-[81px]"
            />
        </div>
    );
}
