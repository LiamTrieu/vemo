'use client';

import { ArrowBigDownDash, User, Loader2, Play, Heart } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

interface DeckCardProps {
  date: string;
  views: string;
  badges: string[];
  title: string;
  description: string;
  author: string;
  status?: 'idle' | 'downloading' | 'downloaded';
  onDownload?: () => Promise<void>;
}

export default function DeckCard({
  date,
  views,
  badges,
  title,
  description,
  author,
  status = 'idle',
  onDownload,
}: DeckCardProps) {
  const [progress, setProgress] = useState(0);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (isDownloading || status === 'downloaded') return;

    setIsDownloading(true);
    setProgress(0);

    const totalTime = 10000; // 10 giây
    const intervalTime = 100; // 0.1 giây
    const startTime = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const percent = Math.min((elapsed / totalTime) * 100, 100);
      setProgress(percent);
      if (percent >= 100) clearInterval(interval);
    }, intervalTime);

    try {
      if (onDownload) await onDownload();
      await new Promise((resolve) => setTimeout(resolve, totalTime));
    } catch (error) {
      console.error('Download failed:', error);
      setProgress(0);
    } finally {
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setIsDownloading(false), 600);
    }
  };

  const getButtonState = () => {
    if (status === 'downloaded') return 'completed';
    if (isDownloading) return 'downloading';
    return 'idle';
  };

  const buttonState = getButtonState();

  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className="group bg-surface border-border relative w-full cursor-pointer overflow-hidden rounded-3xl border"
    >
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />
      <div className="relative flex items-center justify-between px-5 py-4">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{date}</div>
        <motion.div
          layout
          role="button"
          tabIndex={0}
          whileHover={buttonState !== 'downloading' ? { scale: 1.05 } : {}}
          whileTap={buttonState !== 'downloading' ? { scale: 0.8 } : {}}
          onClick={buttonState === 'idle' ? handleDownload : undefined}
          className={`relative flex items-center justify-center overflow-hidden rounded-full p-2 shadow-md select-none ${
            buttonState === 'completed'
              ? 'from-primary bg-gradient-to-br to-green-600'
              : 'from-primary bg-gradient-to-br to-purple-600'
          } ${buttonState !== 'downloading' ? 'cursor-pointer hover:shadow-lg' : 'cursor-default'} `}
          initial={false}
          animate={{
            width: buttonState === 'idle' ? 36 : buttonState === 'downloading' ? 70 : 36,
            height: 36,
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            {buttonState === 'idle' && (
              <motion.div
                key="idle"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <ArrowBigDownDash size={20} className="text-white" />
              </motion.div>
            )}

            {buttonState === 'downloading' && (
              <motion.div
                key="downloading"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex h-5 items-center gap-1 px-2"
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                >
                  <Loader2 size={16} className="text-white" />
                </motion.div>
                <span className="text-xs font-medium text-white">
                  {Math.min(Math.round(progress), 100)}%
                </span>
              </motion.div>
            )}

            {buttonState === 'completed' && (
              <motion.div
                key="completed"
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="flex items-center justify-center"
              >
                <Play size={15} className="text-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="relative z-10 px-5 pb-5">
        <div className="flex flex-wrap gap-2 pb-3">
          {badges.map((badge) => (
            <div
              key={badge}
              className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-100 to-purple-100 px-3 py-1 text-xs font-medium text-blue-600 dark:from-blue-900/30 dark:to-purple-900/30 dark:text-blue-300"
            >
              {badge}
            </div>
          ))}
        </div>

        <h3 className="mb-3 text-2xl leading-snug font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />

      <div className="flex items-center justify-between px-6 py-4">
        <motion.div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          <User size={20} className="text-gray-400" />
          {author}
        </motion.div>
        <div className="flex gap-3">
          <div className="flex items-center gap-1 font-medium text-gray-500 dark:text-gray-400">
            <ArrowBigDownDash size={18} />
            <span className="text-sm font-medium">{views}</span>
          </div>
          <div className="flex items-center gap-1 font-medium text-gray-500 dark:text-gray-400">
            <Heart size={18} />
            <span className="text-sm font-medium">{views}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
