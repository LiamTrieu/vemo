import DeckCard from '../components/DeckCard';

export default function Start() {
  const projects = [
    {
      date: 'Feb 2, 2021',
      views: '1.2K',
      badges: ['Learning', 'English'],
      title: '3000 từ tiếng Anh thông dụng',
      description:
        'Bộ sưu tập từ vựng thiết yếu giúp bạn giao tiếp tự nhiên, hiệu quả và tự tin hơn mỗi ngày.',
      author: 'LiamTrieu',
    },
    {
      date: 'Mar 5, 2024',
      views: '987',
      badges: ['Learning', 'Flashcards'],
      title: 'Từ vựng TOEIC nâng cao',
      description:
        'Danh sách từ vựng giúp bạn cải thiện kỹ năng đọc hiểu và nghe hiệu quả cho kỳ thi TOEIC.',
      author: 'Vemo Team',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.map((project) => (
        <DeckCard key={project.title} {...project} />
      ))}
    </div>
  );
}
