'use client';

import { useState } from 'react';
import DeckCard from '../components/DeckCard';

interface Project {
  date: string;
  views: string;
  badges: string[];
  title: string;
  description: string;
  author: string;
  status?: 'idle' | 'downloading' | 'downloaded';
}

export default function Start() {
  const [projects, setProjects] = useState<Project[]>([
    {
      date: 'Feb 2, 2021',
      views: '1.2K',
      badges: ['Learning', 'English'],
      title: '3000 từ tiếng Anh thông dụng',
      description:
        'Bộ sưu tập từ vựng thiết yếu giúp bạn giao tiếp tự nhiên, hiệu quả và tự tin hơn mỗi ngày.',
      author: 'Vemo Team',
      status: 'idle',
    },
    {
      date: 'Mar 15, 2021',
      views: '2.4K',
      badges: ['Business', 'Presentation'],
      title: 'Kỹ năng thuyết trình chuyên nghiệp',
      description: 'Nâng cao kỹ năng thuyết trình với các mẹo và kỹ thuật từ các chuyên gia.',
      author: 'Vemo Team',
      status: 'idle',
    },
    {
      date: 'Jan 10, 2021',
      views: '3.1K',
      badges: ['Technology', 'Programming'],
      title: 'JavaScript ES6+ Fundamentals',
      description: 'Làm chủ các tính năng hiện đại của JavaScript để phát triển web hiệu quả.',
      author: 'Vemo Team',
      status: 'idle',
    },
    {
      date: 'Apr 5, 2021',
      views: '1.8K',
      badges: ['Design', 'UI/UX'],
      title: 'Nguyên tắc thiết kế giao diện người dùng',
      description: 'Khám phá các nguyên tắc cơ bản để tạo ra trải nghiệm người dùng tuyệt vời.',
      author: 'Vemo Team',
      status: 'idle',
    },
  ]);

  const handleDownload = async (index: number) => {
    setProjects((prev) =>
      prev.map((project, i) =>
        i === index ? { ...project, status: 'downloading' as const } : project,
      ),
    );

    try {
      // Mô phỏng tải 10 giây
      await new Promise((resolve) => setTimeout(resolve, 10000));

      setProjects((prev) =>
        prev.map((project, i) =>
          i === index ? { ...project, status: 'downloaded' as const } : project,
        ),
      );

      console.log(`Downloaded: ${projects[index].title}`);
    } catch (error) {
      console.error('Download failed:', error);
      setProjects((prev) =>
        prev.map((project, i) => (i === index ? { ...project, status: 'idle' as const } : project)),
      );
    }
  };

  const handleCardDownload = (index: number) => async () => {
    await handleDownload(index);
  };

  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">Khám phá Deck</h1>
        <p className="text-gray-600 dark:text-gray-400">
          Tìm thấy những bộ thẻ học tập tuyệt vời được tạo bởi cộng đồng
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {projects.map((project, index) => (
          <DeckCard
            key={project.title}
            date={project.date}
            views={project.views}
            badges={project.badges}
            title={project.title}
            description={project.description}
            author={project.author}
            status={project.status}
            onDownload={handleCardDownload(index)}
          />
        ))}
      </div>

      {/* Empty State (nếu cần) */}
      {projects.length === 0 && (
        <div className="py-12 text-center">
          <div className="mb-4 text-6xl text-gray-400 dark:text-gray-600">📚</div>
          <h3 className="mb-2 text-lg font-medium text-gray-900 dark:text-white">
            Chưa có deck nào
          </h3>
          <p className="text-gray-500 dark:text-gray-400">Các deck của bạn sẽ xuất hiện ở đây</p>
        </div>
      )}
    </div>
  );
}
