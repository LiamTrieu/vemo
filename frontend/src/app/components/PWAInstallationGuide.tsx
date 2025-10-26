'use client';

import { useState } from 'react';
import Image from 'next/image';
import iosFrame from '@/assets/iosFrame.png';
import androidFrame from '@/assets/androidFrame.png';
import PlatformTabs from './PlatformTabs';

export default function PWAInstallationGuide() {
  const [activeTab, setActiveTab] = useState<'ios' | 'android'>('ios');

  return (
    <section className='py-16'>
      <div className='container mx-auto max-w-4xl'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold pb-6 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent'>
            Cài đặt Vemo như App
          </h2>
          <p className='text-xl max-w-2xl mx-auto'>
            Biến Vemo thành ứng dụng trên điện thoại của bạn chỉ với vài bước
            đơn giản
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 items-center'>
          {/* Tabs + Hướng dẫn */}
          <div>
            <PlatformTabs
              onChange={(tab) => setActiveTab(tab as 'ios' | 'android')}
            />
          </div>

          {/* Frame thay đổi theo tab */}
          <div className='hidden md:flex items-center justify-center relative'>
            <div className='relative h-[600px] w-[289px] overflow-hidden flex items-center justify-center px-[10px] py-[9px]'>
              <img
                className='w-full h-full object-cover rounded-[35px]'
                src={
                  activeTab === 'ios'
                    ? 'https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif'
                    : 'https://res.cloudinary.com/dioxktgsm/image/upload/v1761193178/ios_owd3lj.gif'
                }
                alt='PWA Installation Guide'
              />
              <Image
                src={activeTab === 'ios' ? iosFrame : androidFrame}
                alt='Device Frame'
                className='absolute inset-0 w-full h-full pointer-events-none'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
