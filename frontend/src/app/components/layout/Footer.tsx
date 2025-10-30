import { Coffee } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({
  navMenus,
}: {
  navMenus: {
    name: string;
    href: string;
  }[];
}) {
  return (
    <footer>
      <div className="my-0 h-px w-full bg-gradient-to-r from-transparent via-gray-200 to-transparent md:my-8 dark:via-gray-700" />
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="col-span-1 space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 text-xl font-bold">
              <Image
                src="/icon-512x512.png"
                width={32}
                height={32}
                alt="Vemo Logo"
                className="rounded-full"
                priority
              />
              Vemo
            </Link>

            <p className="max-w-md text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              Ứng dụng flashcards giúp bạn ghi nhớ mọi thứ nhanh chóng với
              <span className="text-primary font-semibold"> spaced repetition</span>. Học mọi lúc,
              mọi nơi - hoàn toàn miễn phí!
            </p>

            <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500"></div>
              <span>Đang hoạt động với hơn 1,000+ người học</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Liên kết</h3>
            <div className="space-y-3">
              {navMenus.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-primary dark:hover:text-primary block transform text-gray-600 transition-all duration-200 hover:translate-x-1 dark:text-gray-400"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Hỗ trợ</h3>
            <div className="space-y-3">
              {['Trung tâm trợ giúp', 'Liên hệ', 'Điều khoản', 'Bảo mật'].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="hover:text-primary dark:hover:text-primary block transform text-gray-600 transition-all duration-200 hover:translate-x-1 dark:text-gray-400"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Social & Copyright Section */}
        <div>
          <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
            <div className="mt-10 flex flex-col items-center gap-4 md:flex-row">
              {/* Social Links */}
              <div className="flex items-center gap-4">
                {/* Facebook (SVG) */}
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full border border-gray-100 bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-blue-600 transition-transform group-hover:scale-110 dark:text-blue-400"
                  >
                    <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.095 5.657 21.245 10.438 22v-6.996H7.898v-2.93h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.776-1.63 1.57v1.884h2.773l-.443 2.93h-2.33V22C18.343 21.245 22 17.095 22 12.073z" />
                  </svg>
                </Link>

                {/* GitHub */}
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full border border-gray-100 bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-5 w-5 text-gray-800 transition-transform group-hover:scale-110 dark:text-gray-200"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54a3.06 3.06 0 0 0-1.3-1.72c-1.06-.72.08-.7.08-.7a2.43 2.43 0 0 1 1.77 1.2 2.46 2.46 0 0 0 3.37 1 2.44 2.44 0 0 1 .73-1.54c-2.55-.29-5.23-1.27-5.23-5.67a4.44 4.44 0 0 1 1.18-3.07 4.1 4.1 0 0 1 .11-3.03s.96-.31 3.15 1.18a10.7 10.7 0 0 1 5.74 0c2.19-1.5 3.15-1.18 3.15-1.18a4.1 4.1 0 0 1 .11 3.03 4.44 4.44 0 0 1 1.18 3.07c0 4.42-2.69 5.37-5.25 5.66a2.74 2.74 0 0 1 .78 2.13v3.16c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12c0-6.35-5.15-11.5-11.5-11.5Z"
                    />
                  </svg>
                </Link>

                {/* Mail */}
                <Link
                  href="mailto:z0Bb0@example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-full border border-gray-100 bg-white p-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 transition-transform group-hover:scale-110 dark:text-red-400"
                  >
                    <title>Gmail</title>
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                </Link>
              </div>

              {/* Buy me a coffee */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 px-6 py-2 font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
              >
                <Coffee size={20} className="transition-transform group-hover:scale-110" />
                <span>Buy me a coffee</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
