import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Splash from "./components/Splash";

const ibmPlex = IBM_Plex_Sans({
    variable: "--font-ibm-plex",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
    viewportFit: "cover",
};

export const metadata: Metadata = {
    title: "Vemo – Flashcards thông minh như Anki | Học mọi thứ dễ dàng",
    description:
        "Vemo là ứng dụng flashcards PWA giúp bạn ghi nhớ mọi thứ nhanh chóng với spaced repetition như Anki. Học ngôn ngữ, công thức, kiến thức – miễn phí, không giới hạn!",
    generator: "Next.js",
    manifest: "/manifest.json",

    // ===== PWA OPTIMIZATION =====
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Vemo Flashcards",
    },
    formatDetection: {
        telephone: false,
    },

    // ===== SEO & MARKETING =====
    applicationName: "Vemo Flashcards App",
    authors: [{ name: "Vemo Team" }],
    creator: "Vemo",
    publisher: "Vemo",
    category: "education",
    classification: "flashcards app",

    // ===== OPEN GRAPH =====
    openGraph: {
        type: "website",
        url: "https://vemoo.vercel.app/",
        title: "Vemo – Flashcards thông minh như Anki",
        description:
            "Ghi nhớ mọi thứ dễ dàng với flashcards thông minh, hệ thống lặp lại ngắt quãng (SRS), đa nền tảng, miễn phí mãi mãi.",
        siteName: "Vemo",
        images: [
            {
                url: "/icon-1200x630.png",
                width: 1200,
                height: 630,
                alt: "Vemo – Flashcards App như Anki",
            },
        ],
        locale: "vi_VN",
    },

    // ===== TWITTER =====
    twitter: {
        card: "summary_large_image",
        site: "@vemo_app",
        creator: "@vemo_app",
        title: "Vemo – Ứng dụng Flashcards miễn phí",
        description:
            "Ghi nhớ ngôn ngữ, kiến thức, công thức, từ vựng bằng flashcards & spaced repetition. Miễn phí, đa nền tảng.",
        images: ["/icon-1200x630.png"],
    },

    // ===== KEYWORDS =====
    keywords: [
        "Vemo flashcards",
        "ứng dụng học như Anki",
        "flashcards PWA",
        "spaced repetition app",
        "ôn thi bằng flashcards",
        "ghi nhớ kiến thức nhanh",
        "ứng dụng học đa ngôn ngữ",
        "tạo thẻ ghi nhớ online",
        "app học từ vựng",
        "flashcards miễn phí",
        "anki alternative",
        "vemo app",
    ],

    // ===== ICONS =====
    icons: [
        {
            rel: "apple-touch-icon",
            url: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            rel: "icon",
            url: "/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
        },
        {
            rel: "mask-icon",
            url: "/safari-pinned-tab.svg",
            color: "#000000",
        },
    ],

    robots: "index, follow",
    metadataBase: new URL("https://vemoo.vercel.app"),
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const navMenus = [
        {
            name: "Bộ thẻ",
            href: "/flashcards",
        },
        {
            name: "Hướng dẫn",
            href: "/guides",
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Giới thiệu",
            href: "/about",
        },
    ];
    return (
        <html lang="vi">
            <head>
                {/* ===== PWA META TAGS ===== */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta
                    name="apple-mobile-web-app-status-bar-style"
                    content="black-translucent"
                />
                <meta name="apple-mobile-web-app-title" content="Vemo" />

                {/* ===== THEME & PWA ===== */}
                <meta name="theme-color" content="#0088e9" />

                {/* ===== STRUCTURED DATA ===== */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "MobileApplication",
                            name: "Vemo – Flashcards App",
                            applicationCategory: "EducationalApplication",
                            operatingSystem: "Android, iOS, Web",
                            description:
                                "Ứng dụng flashcards thông minh giúp bạn học mọi thứ với spaced repetition như Anki.",
                            offers: {
                                "@type": "Offer",
                                price: "0",
                                priceCurrency: "USD",
                            },
                            aggregateRating: {
                                "@type": "AggregateRating",
                                ratingValue: "4.8",
                                ratingCount: "2500",
                            },
                        }),
                    }}
                />
            </head>
            <body className={`${ibmPlex.variable} antialiased`}>
                <Splash />

                <Header navMenus={navMenus} />
                <main className="main container mx-auto p-4">{children}</main>
                <Footer navMenus={navMenus} />
            </body>
        </html>
    );
}
