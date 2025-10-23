"use client";
import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
}

export default function InstallButton() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstall, setShowInstall] = useState(false);

  useEffect(() => {
    console.log('InstallButton');
    
    const handlePrompt = (e: BeforeInstallPromptEvent) => {
      console.log("beforeinstallprompt fired ✅");
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handlePrompt);
    return () => window.removeEventListener("beforeinstallprompt", handlePrompt);
  }, []);


  const handleInstall = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;

    if (outcome === "accepted") console.log("User installed PWA");
    setDeferredPrompt(null);
    setShowInstall(false);
  };

  return (
    showInstall && (
      <button
        onClick={handleInstall}
        className="w-full py-3 bg-gradient-to-r from-green-500 to-primary text-white font-semibold rounded-xl shadow-lg"
      >
        Cài đặt ứng dụng
      </button>
    )
  );
}
