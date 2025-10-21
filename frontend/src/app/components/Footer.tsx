"use client";
import { Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer({
    navMenus,
}: {
    navMenus: {
        name: string;
        href: string;
    }[];
}) {
    return (
        <footer className="mt-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-black border-t border-gray-200/50 dark:border-gray-800/50">
            {/* Decorative gradient accent */}
            <div className="h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 w-full"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2 space-y-4">
                        <Link
                            href="/"
                            className="flex items-center gap-2 font-bold text-xl"
                        >
                            <Image
                                width={43}
                                height={32}
                                src="/icon-layout.webp"
                                alt="Vemo Logo"
                                className="filter invert dark:invert-0 transition"
                            />
                            Vemo
                        </Link>

                        <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-400 max-w-md">
                            Ứng dụng flashcards giúp bạn ghi nhớ mọi thứ nhanh
                            chóng với
                            <span className="font-semibold text-primary">
                                {" "}
                                spaced repetition
                            </span>
                            . Học mọi lúc, mọi nơi - hoàn toàn miễn phí!
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span>Đang hoạt động với hơn 1,000+ người học</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Liên kết
                        </h3>
                        <div className="space-y-3">
                            {navMenus.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-200 hover:translate-x-1 transform"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Support */}
                    <div className="space-y-4">
                        <h3 className="font-semibold text-gray-900 dark:text-white text-lg">
                            Hỗ trợ
                        </h3>
                        <div className="space-y-3">
                            {[
                                "Trung tâm trợ giúp",
                                "Liên hệ",
                                "Điều khoản",
                                "Bảo mật",
                            ].map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="block text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-200 hover:translate-x-1 transform"
                                >
                                    {item}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Social & Copyright Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            {/* Social Links */}
                            <div className="flex items-center gap-4">
                                {/* Facebook (SVG) */}
                                <Link
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform"
                                    >
                                        <path d="M22 12.073C22 6.505 17.523 2 12 2S2 6.505 2 12.073C2 17.095 5.657 21.245 10.438 22v-6.996H7.898v-2.93h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.47h-1.26c-1.243 0-1.63.776-1.63 1.57v1.884h2.773l-.443 2.93h-2.33V22C18.343 21.245 22 17.095 22 12.073z" />
                                    </svg>
                                </Link>

                                {/* GitHub */}
                                <Link
                                    href="https://github.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        className="w-5 h-5 text-gray-800 dark:text-gray-200 group-hover:scale-110 transition-transform"
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
                                    className="group p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 border border-gray-100 dark:border-gray-700"
                                >
                                    <svg
                                        role="img"
                                        viewBox="0 0 24 24"
                                        fill="currentColor"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5 text-red-500 dark:text-red-400 group-hover:scale-110 transition-transform"
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
                                className="group flex items-center gap-3 px-6 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-400 font-semibold text-gray-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Coffee
                                    size={20}
                                    className="group-hover:scale-110 transition-transform"
                                />
                                <span>Buy me a coffee</span>
                            </Link>
                        </div>

                        {/* Copyright */}
                        <div className="text-center lg:text-right">
                            <p className="text-gray-600 dark:text-gray-400 text-sm">
                                © {new Date().getFullYear()} Vemo. All rights
                                reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
