'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Card from './Card';
import { EllipsisVertical } from 'lucide-react';

export default function PlatformTabs({
  onChange,
}: {
  onChange?: (tab: string) => void;
}) {
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  const handleTabChange = (tab: 'ios' | 'android') => {
    setActiveTab(tab);
    onChange?.(tab); // gửi sự thay đổi lên component cha
  };

  return (
    <div className='flex flex-col items-center'>
      {/* --- Thanh Tabs --- */}
      <div className='relative flex bg-gradient-to-br from-gray-100 via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-2xl p-1 w-full overflow-hidden '>
        {/* Nền chuyển động gradient theo tab */}
        <motion.div
          layout
          transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          className={`absolute top-0 left-0 h-full w-1/2 rounded-2xl ${
            activeTab === 'ios'
              ? 'bg-gradient-to-br from-primary to-blue-700'
              : 'bg-gradient-to-br from-primary to-green-600'
          }`}
          animate={{
            x: activeTab === 'ios' ? 0 : '100%',
          }}
        />

        {/* iOS Tab */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleTabChange('ios')}
          className={`relative z-10 flex-1 cursor-pointer py-2 text-center rounded-2xl font-semibold transition-all duration-300
          ${
            activeTab === 'ios'
              ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
              : 'text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          IOS
        </motion.button>

        {/* Android Tab */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleTabChange('android')}
          className={`relative z-10 flex-1 cursor-pointer py-2 text-center rounded-2xl font-semibold transition-all duration-300
          ${
            activeTab === 'android'
              ? 'text-white drop-shadow-[0_2px_6px_rgba(0,0,0,0.3)]'
              : 'text-gray-800 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400'
          }`}
        >
          Android
        </motion.button>
      </div>

      {/* --- Nội dung --- */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className='mt-8 w-full'
      >
        {activeTab === 'ios' ? (
          <Card>
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 bg-gradient-to-br from-primary to-blue-700 rounded-lg flex items-center justify-center mr-4 text-white'>
                <svg
                  fill='currentColor'
                  width='24px'
                  height='24px'
                  viewBox='0 0 24 24'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path d='M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701' />{' '}
                </svg>
              </div>
              <h3 className='text-2xl font-bold bg-gradient-to-br from-primary to-blue-700 bg-clip-text text-transparent'>
                Cho IOS
              </h3>
            </div>
            <Steps
              color='from-primary to-blue-700'
              highlight='text-blue-400'
              platform='ios'
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden mt-3 w-full cursor-pointer py-2 text-center rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-br from-primary to-blue-700`}
            >
              Video hướng dẫn
            </motion.button>
          </Card>
        ) : (
          <Card>
            <div className='flex items-center mb-6'>
              <div className='w-10 h-10 bg-gradient-to-br from-primary to-green-600 rounded-lg flex items-center justify-center mr-4 text-white'>
                <svg
                  fill='currentColor'
                  width='24px'
                  height='24px'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 1024 1024'
                >
                  <path d='M270.1 741.7c0 23.4 19.1 42.5 42.6 42.5h48.7v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h85v120.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V784.1h48.7c23.5 0 42.6-19.1 42.6-42.5V346.4h-486v395.3zm357.1-600.1l44.9-65c2.6-3.8 2-8.9-1.5-11.4-3.5-2.4-8.5-1.2-11.1 2.6l-46.6 67.6c-30.7-12.1-64.9-18.8-100.8-18.8-35.9 0-70.1 6.7-100.8 18.8l-46.6-67.5c-2.6-3.8-7.6-5.1-11.1-2.6-3.5 2.4-4.1 7.4-1.5 11.4l44.9 65c-71.4 33.2-121.4 96.1-127.8 169.6h486c-6.6-73.6-56.7-136.5-128-169.7zM409.5 244.1a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm208.4 0a26.9 26.9 0 1 1 26.9-26.9 26.97 26.97 0 0 1-26.9 26.9zm223.4 100.7c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c.1-30.6-24.3-55.3-54.6-55.3zm-658.6 0c-30.2 0-54.6 24.8-54.6 55.4v216.4c0 30.5 24.5 55.4 54.6 55.4 30.2 0 54.6-24.8 54.6-55.4V400.1c0-30.6-24.5-55.3-54.6-55.3z' />
                </svg>
              </div>
              <h3 className='text-2xl font-bold bg-gradient-to-br from-primary to-green-600 bg-clip-text text-transparent'>
                Cho Android
              </h3>
            </div>
            <Steps
              color='from-primary to-green-600'
              highlight='text-green-500'
              platform='android'
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`md:hidden mt-3 w-full cursor-pointer py-2 text-center rounded-2xl font-semibold transition-all duration-300 bg-gradient-to-br from-primary to-green-600`}
            >
              Video hướng dẫn
            </motion.button>
          </Card>
        )}
      </motion.div>
    </div>
  );
}

function Steps({
  color,
  highlight,
  platform,
}: {
  color: string;
  highlight: string;
  platform: string;
}) {
  const steps =
    platform === 'ios'
      ? [
          ['Mở Safari', 'Truy cập vemoo.vercel.app trên Safari'],
          ['Chia sẻ', 'Nhấn vào biểu tượng chia sẻ'],
          ['Thêm vào Màn hình chính', 'Chọn Thêm vào MH chính'],
          ['Xác nhận', 'Nhấn Thêm để hoàn tất'],
        ]
      : [
          ['Mở Chrome', 'Truy cập vemoo.vercel.app trên Chrome'],
          ['Nhấn menu', 'Mở menu ở góc phải trình duyệt'],
          ['Thêm vào Màn hình chính', 'Chọn Thêm vào Màn hình chính'],
          ['Cài đặt', 'Nhấn Cài đặt để hoàn tất'],
        ];

  return (
    <div className='space-y-4'>
      {steps.map(([title, desc], i) => (
        <div key={i} className='flex items-start space-x-3'>
          <div
            className={`w-6 h-6 bg-gradient-to-br ${color} text-white rounded-full flex items-center justify-center text-sm font-bold mt-1`}
          >
            {i + 1}
          </div>
          <div>
            <h4 className='font-semibold'>{title}</h4>
            <p className={`text-sm ${highlight}`}>{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
