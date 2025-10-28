'use client';

import { ArrowBigDownDash, User } from 'lucide-react';
import { motion } from 'framer-motion';

interface DeckCardProps {
  date: string;
  views: string;
  badges: string[];
  title: string;
  description: string;
  author: string;
}

export default function DeckCard({
  date,
  views,
  badges,
  title,
  description,
  author,
}: DeckCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
        transition: { duration: 0.3, ease: 'easeInOut' },
      }}
      className="group relative w-full cursor-pointer overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-white via-gray-50 to-gray-100 shadow-xl dark:border-gray-700 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950"
    >
      {/* Gradient Glow */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

      {/* Header */}
      <div className="relative flex items-center justify-between p-6">
        <div className="text-sm font-medium text-gray-500 dark:text-gray-400">{date}</div>
        <motion.div className="flex items-center gap-1 font-medium text-gray-500 dark:text-gray-400">
          <ArrowBigDownDash size={18} />
          <span className="text-sm font-medium">{views}</span>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 pb-6">
        {/* Badges */}
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

        {/* Title */}
        <h3 className="mb-3 text-2xl leading-snug font-bold text-gray-900 dark:text-gray-100">
          {title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400">{description}</p>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent dark:via-gray-700" />

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4">
        {/* Author */}
        <motion.div className="flex items-center justify-center gap-1 text-sm font-medium text-gray-600 dark:text-gray-300">
          <User size={20} className="text-gray-400" />
          {author}
        </motion.div>

        {/* Action Button */}
        <motion.div
          role="button"
          tabIndex={0}
          whileHover={{ scale: 1.05 }}
          whileTap={{
            scale: 0.9,
            rotate: 0,
            transition: { type: 'spring', stiffness: 400, damping: 15 },
          }}
          className="flex cursor-pointer items-center gap-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-2 shadow-md select-none hover:shadow-lg"
        >
          <ArrowBigDownDash size={20} className="text-white" />
        </motion.div>
      </div>
    </motion.div>
  );
}
