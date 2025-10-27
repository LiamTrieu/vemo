"use client";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image, { StaticImageData } from "next/image";
import iosFrame from "@/assets/iosFrame.png";
import androidFrame from "@/assets/androidFrame.png";
import { AnimatePresence, motion } from "framer-motion";
import Card from "./Card";
import InstallButton from "./InstallButton";

/**
 * PWAInstallationGuide - single-file optimized version (performance-first)
 *
 * Notes:
 * - Modal only opens on mobile (<= 768px). Desktop shows static preview on right.
 * - Steps, Tabs, Preview, GuideButton memoized to avoid unnecessary re-renders.
 * - Modal content is only mounted when `open` is true.
 */

/* ---------------------------
   Config (centralized)
   --------------------------- */
const GUIDE_CONFIG = {
  ios: {
    id: "ios" as const,
    title: "Cho IOS",
    color: "from-primary to-blue-700",
    highlight: "text-blue-400",
    frame: iosFrame,
    videoSrc: "https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif",
    steps: [
      ["Mở Safari", "Truy cập vemoo.vercel.app trên Safari"],
      ["Chia sẻ", "Nhấn vào biểu tượng chia sẻ"],
      ["Thêm vào Màn hình chính", "Chọn Thêm vào MH chính"],
      ["Xác nhận", "Nhấn Thêm để hoàn tất"],
    ] as [string, string][],
  },
  android: {
    id: "android" as const,
    title: "Cho Android",
    color: "from-primary to-green-600",
    highlight: "text-green-500",
    frame: androidFrame,
    videoSrc: "https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif",
    steps: [
      ["Mở Chrome", "Truy cập vemoo.vercel.app trên Chrome"],
      ["Nhấn menu", "Mở menu ở góc phải trình duyệt"],
      ["Thêm vào Màn hình chính", "Chọn Thêm vào Màn hình chính"],
      ["Cài đặt", "Nhấn Cài đặt để hoàn tất"],
    ] as [string, string][],
  },
};

type Platform = keyof typeof GUIDE_CONFIG;

/* ---------------------------
   Helper: mobile detection
   --------------------------- */
const isMobileWidth = (width: number) => width <= 768;

/* ---------------------------
   Tabs (memo)
   --------------------------- */
const Tabs: React.FC<{
  active: Platform;
  onChange: (p: Platform) => void;
}> = React.memo(({ active, onChange }) => {
  return (
    <div className="relative flex bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-lg p-1 w-full overflow-hidden shadow-lg">
      {/* Moving Background */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className={`absolute top-0 left-0 h-full w-1/2 rounded-lg ${
          active === "ios"
            ? "bg-gradient-to-br from-primary to-blue-700"
            : "bg-gradient-to-br from-primary to-green-600"
        }`}
        animate={{ x: active === "ios" ? 0 : "100%" }}
      />

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange("ios")}
        className={`relative z-10 flex-1 cursor-pointer py-2 text-center rounded-lg font-semibold transition-all duration-300 ${
          active === "ios"
            ? "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
            : "text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
        }`}
        aria-pressed={active === "ios"}
      >
        IOS
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onChange("android")}
        className={`relative z-10 flex-1 cursor-pointer py-2 text-center rounded-lg font-semibold transition-all duration-300 ${
          active === "android"
            ? "text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]"
            : "text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400"
        }`}
        aria-pressed={active === "android"}
      >
        Android
      </motion.button>
    </div>
  );
});
Tabs.displayName = "Tabs";

/* ---------------------------
   Steps (memo)
   --------------------------- */
const Steps: React.FC<{
  steps: [string, string][];
  color: string;
  highlight: string;
}> = React.memo(({ steps, color, highlight }) => {
  return (
    <div className="space-y-4">
      {steps.map(([title, desc], i) => (
        <div key={i} className="flex items-start space-x-3">
          <div
            className={`w-6 h-6 bg-gradient-to-br ${color} text-white rounded-full flex items-center justify-center text-sm font-bold mt-1`}
          >
            {i + 1}
          </div>
          <div>
            <h4 className="font-semibold">{title}</h4>
            <p className={`text-sm ${highlight}`}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
});
Steps.displayName = "Steps";

/* ---------------------------
   GuideButton (memo) - mobile only (md:hidden)
   --------------------------- */
const GuideButton: React.FC<{ onClick: () => void; color: string }> = React.memo(
  ({ onClick, color }) => {
    return (
      <motion.button
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`md:hidden mt-3 w-full text-white cursor-pointer py-2 text-center rounded-lg font-semibold transition-all duration-300 bg-gradient-to-br ${color}`}
        aria-label="Video hướng dẫn"
      >
        Video hướng dẫn
      </motion.button>
    );
  }
);
GuideButton.displayName = "GuideButton";

/* ---------------------------
   PhonePreview (memo) - right side preview (hidden on small screens)
   --------------------------- */
const PhonePreview: React.FC<{ frame: StaticImageData | string; videoSrc: string; roundedClass?: string; platform?: Platform }> =
  React.memo(({ frame, videoSrc }) => {
    return (
      <div className="hidden md:flex items-center justify-center relative">
        <div className="relative h-[600px] w-[289px] overflow-hidden flex items-center justify-center px-[10px]">
          <Image
            width={289}
            height={600}
            className="object-cover rounded-[35px]"
            src={videoSrc}
            alt="PWA Installation Guide"
          />
          <Image
            fill
            src={frame}
            alt="Device Frame"
            className="absolute inset-0 pointer-events-none"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    );
  });
PhonePreview.displayName = "PhonePreview";

/* ---------------------------
   VideoModal - mounted only when open
   (Modal only for mobile as requested)
   --------------------------- */
function VideoModal({
  open,
  onClose,
  frame,
  videoSrc,
  color
}: {
  open: boolean;
  onClose: () => void;
  frame: StaticImageData | string;
  videoSrc: string;
  color: string;
}) {
  // Close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial="hidden"
          animate="visible"
          exit="exit"
          aria-modal="true"
          role="dialog"
        >
          {/* backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
              exit: { opacity: 0 },
            }}
            onClick={onClose}
            aria-hidden
          />

          {/* panel */}
          <motion.div
            className="relative p-0 z-10"
            variants={{
              hidden: {
                opacity: 0,
                y: 24,
                scale: 0.98,
              },
              visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 28,
                },
              },
              exit: {
                opacity: 0,
                y: 12,
                scale: 0.99,
                transition: {
                  duration: 0.16,
                },
              },
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="overflow-hidden">
              <div>
                <div className="flex flex-col items-center justify-center relative">
                  <div className="relative h-[600px] w-[289px] overflow-hidden flex items-center justify-center px-[10px]">
                    <Image
                      width={289}
                      height={600}
                      className="object-cover rounded-[35px]"
                      src={videoSrc}
                      alt="PWA Installation Guide"
                    />
                    <Image
                      fill
                      src={frame}
                      alt="Device Frame"
                      className="absolute inset-0 pointer-events-none"
                    />
                  </div>
                  <div className="mt-4">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.3 }}
                      onClick={onClose}
                      className={`cursor-pointer py-2 px-5 text-center rounded-lg font-semibold bg-gradient-to-br ${color} text-white`}
                    >
                      Đã hiểu
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ---------------------------
   Main Component
   --------------------------- */
export default function PWAInstallationGuide() {
  const [activeTab, setActiveTab] = useState<Platform>("ios");
  const [open, setOpen] = useState(false);

  // Stable config for active tab
  const cfg = useMemo(() => GUIDE_CONFIG[activeTab], [activeTab]);

  // handle tab change (useCallback to keep referential stability)
  const handleTabChange = useCallback((p: Platform) => {
    setActiveTab(p);
  }, []);

  // open modal only on mobile (guard window)
  const handleOpenModalOnMobile = useCallback(() => {
    if (typeof window === "undefined") return;
    if (!isMobileWidth(window.innerWidth)) {
      // Do nothing on desktop (modal disabled on desktop by user request)
      return;
    }
    setOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => setOpen(false), []);

  // Prevent body scroll when modal open
  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
    return;
  }, [open]);

  return (
    <section className="py-16">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold pb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Cài đặt Vemo như App
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Biến Vemo thành ứng dụng trên điện thoại của bạn chỉ với vài bước đơn giản
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left = Tabs + Steps */}
          <div>
            <div className="flex flex-col items-center">
              <Tabs active={activeTab} onChange={handleTabChange} />

              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-8 w-full"
              >
                <Card>
                  <div className="flex justify-between mb-6">
                    <div className="flex items-center">
                    <div
                      className={`w-10 h-10 bg-gradient-to-br ${cfg.color} rounded-lg flex items-center justify-center mr-4 text-white`}
                    >
                      {/* Choose icon per platform (simple inline SVGs) */}
                      {activeTab === "ios" ? (
                        <svg
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
                        </svg>
                      ) : (
                        <svg
                          fill="currentColor"
                          width="24px"
                          height="24px"
                          role="img"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 1024 1024"
                        >
                          <path d="M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z" />
                        </svg>
                      )}
                    </div>

                    <h3 className={`text-2xl font-bold bg-gradient-to-br ${cfg.color} bg-clip-text text-transparent`}>
                      {cfg.title}
                    </h3>
                  </div>
                  {
                      cfg.id === 'android' && (
                        <InstallButton />
                      )
                  }
                  </div>

                  <Steps steps={cfg.steps} color={cfg.color} highlight={cfg.highlight} />

                  <GuideButton onClick={handleOpenModalOnMobile} color={cfg.color} />
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Right = Phone Preview */}
          <PhonePreview frame={cfg.frame} videoSrc={cfg.videoSrc} platform={activeTab} />
        </div>
      </div>

      {/* Modal (mounted only when open) */}
      {typeof window !== "undefined" && (
        <VideoModal open={open} onClose={handleCloseModal} frame={cfg.frame} videoSrc={cfg.videoSrc} color={cfg.color}/>
      )}
    </section>
  );
}
