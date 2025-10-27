"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowBigDownDash } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isAndroid, setIsAndroid] = useState(false);

  useEffect(() => {
    // Detect Android
    const userAgent = navigator.userAgent.toLowerCase();
    if (userAgent.includes("android")) {
      setIsAndroid(true);
      console.log("[PWA] ✅ Android detected");
    } else {
      console.log("[PWA] ❌ Not Android, button will not show");
    }

    // Listen for beforeinstallprompt
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("[PWA] 📌 beforeinstallprompt fired", e);
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      console.log("[PWA] ✅ deferredPrompt saved, button should appear now");
    };

    console.log("[PWA] 👀 Listening for beforeinstallprompt event...");
    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  if (!isAndroid || !deferredPrompt) {
    console.log("[PWA] 🔍 Button hidden because:", { isAndroid, deferredPrompt });
    return null;
  }

  const handleInstall = async () => {
    console.log("[PWA] 🚀 Install button clicked");

    await deferredPrompt.prompt();
    console.log("[PWA] ⏳ Prompt shown to user...");

    const choice = await deferredPrompt.userChoice;
    console.log("[PWA] ✅ UserChoice result:", choice);

    if (choice.outcome === "accepted") {
      console.log("[PWA] 🎉 User accepted installing the PWA");
    } else {
      console.log("[PWA] ❌ User dismissed installing the PWA");
    }

    setDeferredPrompt(null);
    console.log("[PWA] 🔄 deferredPrompt reset (button will hide)");
  };

  return (
    <motion.button
      onClick={handleInstall}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="flex gap-1 justify-center items-center bg-gradient-to-br from-primary to-green-600 px-2 py-1 text-white text-sm font-semibold rounded-lg shadow-lg"
    >
      <ArrowBigDownDash />
      <span>Cài đặt App</span>
    </motion.button>
  );
}
