import type { Metadata, Viewport } from 'next';
import { IBM_Plex_Sans } from 'next/font/google';
import './globals.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Splash from './components/Splash';
import { headers } from 'next/headers';

const ibmPlex = IBM_Plex_Sans({
  variable: '--font-ibm-plex',
  subsets: ['latin'],
});

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: 'device-width',
  viewportFit: 'cover',
};

export const metadata: Metadata = {
  title: 'Vemo – Flashcards thông minh như Anki | Học mọi thứ dễ dàng',
  description:
    'Vemo là ứng dụng flashcards PWA giúp bạn ghi nhớ mọi thứ nhanh chóng với spaced repetition như Anki. Học ngôn ngữ, công thức, kiến thức – miễn phí, không giới hạn!',
  generator: 'Next.js',
  manifest: '/manifest.json',

  // ===== PWA OPTIMIZATION =====
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Vemo Flashcards',
  },
  formatDetection: {
    telephone: false,
  },

  // ===== SEO & MARKETING =====
  applicationName: 'Vemo Flashcards App',
  authors: [{ name: 'Vemo Team' }],
  creator: 'Vemo',
  publisher: 'Vemo',
  category: 'education',
  classification: 'flashcards app',

  // ===== OPEN GRAPH =====
  openGraph: {
    type: 'website',
    url: 'https://vemoo.vercel.app/',
    title: 'Vemo – Flashcards thông minh như Anki',
    description:
      'Ghi nhớ mọi thứ dễ dàng với flashcards thông minh, hệ thống lặp lại ngắt quãng (SRS), đa nền tảng, miễn phí mãi mãi.',
    siteName: 'Vemo',
    images: [
      {
        url: '/icon-512x512.png',
        width: 1200,
        height: 630,
        alt: 'Vemo – Flashcards App như Anki',
      },
    ],
    locale: 'vi_VN',
  },

  // ===== TWITTER =====
  twitter: {
    card: 'summary_large_image',
    site: '@vemo_app',
    creator: '@vemo_app',
    title: 'Vemo – Ứng dụng Flashcards miễn phí',
    description:
      'Ghi nhớ ngôn ngữ, kiến thức, công thức, từ vựng bằng flashcards & spaced repetition. Miễn phí, đa nền tảng.',
    images: ['/icon-512x512.png'],
  },

  // ===== KEYWORDS =====
  keywords: [
    'Vemo flashcards',
    'ứng dụng học như Anki',
    'flashcards PWA',
    'spaced repetition app',
    'ôn thi bằng flashcards',
    'ghi nhớ kiến thức nhanh',
    'ứng dụng học đa ngôn ngữ',
    'tạo thẻ ghi nhớ online',
    'app học từ vựng',
    'flashcards miễn phí',
    'anki alternative',
    'vemo app',
  ],

  // ===== ICONS =====
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/icon-512x512.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'icon',
      url: '/icon-512x512.png',
      sizes: '192x192',
      type: 'image/png',
    },
    {
      rel: 'mask-icon',
      url: '/safari-pinned-tab.svg',
      color: '#000000',
    },
  ],

  robots: 'index, follow',
  metadataBase: new URL('https://vemoo.vercel.app'),
  alternates: {
    canonical: '/',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const navMenus = [
    {
      name: 'Bộ thẻ',
      href: '/flashcards',
    },
    {
      name: 'Hướng dẫn',
      href: '/guides',
    },
    {
      name: 'Blog',
      href: '/blog',
    },
    {
      name: 'Giới thiệu',
      href: '/about',
    },
  ];
  const theme = (await headers()).get('x-theme') || 'light';
  const effects = [
    // Trên trái - tím (chủ đạo)
    {
      className:
        'absolute top-[20px] left-[-220px] -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,_#8B5CF6_0%,_#7C3AED_20%,_transparent_70%)] opacity-50 blur-[120px]',
    },
    // Trên phải - xanh dương
    {
      className:
        'absolute top-[0px] right-[-180px] -z-10 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle_at_center,_#3B82F6_0%,_#2563EB_25%,_transparent_75%)] opacity-40 blur-[110px]',
    },
    // Trung tâm - xanh ngọc (tạo điểm nhấn trung tâm)
    {
      className:
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[650px] w-[650px] rounded-full bg-[radial-gradient(circle_at_center,_#06B6D4_0%,_#0891B2_15%,_transparent_65%)] opacity-30 blur-[150px]',
    },
    // Dưới trái - xanh lá
    {
      className:
        'absolute bottom-[-150px] left-[-200px] -z-10 h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_at_center,_#10B981_0%,_#059669_20%,_transparent_75%)] opacity-35 blur-[120px]',
    },
    // Dưới phải - hồng
    {
      className:
        'absolute bottom-[-180px] right-[-220px] -z-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle_at_center,_#EC4899_0%,_#DB2777_20%,_transparent_70%)] opacity-45 blur-[130px]',
    },
    // Thêm điểm sáng trung tâm phụ
    {
      className:
        'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle_at_center,_#60A5FA_0%,_transparent_70%)] opacity-20 blur-[80px]',
    },
    // Ánh sáng viền tổng thể
    {
      className:
        'absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.1)_0%,_transparent_60%)]',
    },
  ];

  return (
    <html lang="vi" className={theme === 'dark' ? 'dark' : ''}>
      <head>
        {/* ===== PWA META TAGS ===== */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Vemo" />

        {/* ===== THEME & PWA ===== */}
        <meta name="theme-color" content={theme === 'dark' ? '#0d1117' : '#F2F2F7'} />

        {/* ===== STRUCTURED DATA ===== */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'MobileApplication',
              name: 'Vemo – Flashcards App',
              applicationCategory: 'EducationalApplication',
              operatingSystem: 'Android, iOS, Web',
              description:
                'Ứng dụng flashcards thông minh giúp bạn học mọi thứ với spaced repetition như Anki.',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.8',
                ratingCount: '2500',
              },
            }),
          }}
        />
      </head>
      <body className={`${ibmPlex.variable} relative overflow-x-hidden antialiased`}>
        {effects.map((circle, index) => (
          <div key={index} className={circle.className}></div>
        ))}
        <Splash />

        <Header navMenus={navMenus} />
        <main className="main container mx-auto p-4">{children}</main>
        <Footer navMenus={navMenus} />
      </body>
    </html>
  );
}
