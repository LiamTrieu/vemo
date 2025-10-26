export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className='bg-gradient-to-br from-gray-50 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-2xl p-6 shadow-lg'>
      {children}
    </div>
  );
}
