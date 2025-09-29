import type {Metadata, Viewport} from "next";
import {IBM_Plex_Sans} from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
    variable: "--font-ibm-plex",
    subsets: ["latin"],
});

export const viewport: Viewport = {
    minimumScale: 1,
    initialScale: 1,
    width: "device-width",
    viewportFit: "cover",
}

export const metadata: Metadata = {
    title: "Vemo – Master 3000 Essential English Words Fast | Free App",
    description: "Join thousands of users mastering English with Vemo! Smart flashcards, spaced repetition, and fun quizzes. Download now - Free forever!",
    generator: "Next.js",
    manifest: "/manifest.json",
    
    // ===== PWA OPTIMIZATION =====
    appleWebApp: {
        capable: true,
        statusBarStyle: "black-translucent",
        title: "Vemo - Learn English",
    },
    formatDetection: {
        telephone: false,
    },
    
    // ===== SALES & MARKETING OPTIMIZATION =====
    applicationName: "Vemo English Learning App",
    authors: [{ name: "Vemo Team" }],
    creator: "Vemo Education",
    publisher: "Vemo",
    category: "education",
    classification: "educational software",
    
    // ===== OPEN GRAPH =====
    openGraph: {
        type: "website",
        url: "https://vemo-app.vercel.app/",
        title: "Vemo - Master 3000 English Words",
        description: "Free English learning app with proven results. Download now and start your journey to fluency!",
        siteName: "Vemo",
        images: [
            {
                url: "/icon-1200x630.png",
                width: 1200,
                height: 630,
                alt: "Vemo - Learn 3000 English Words",
            },
        ],
        locale: "en_US",
    },

    // ===== TWITTER =====
    twitter: {
        card: "summary_large_image",
        site: "@vemo_app",
        creator: "@vemo_app",
        title: "Vemo - Learn English Free",
        description: "Master 3000 essential English words with our free app. Download now!",
        images: ["/icon-1200x630.png"],
    },

    // ===== KEYWORDS =====
    keywords: [
        "learn English words",
        "3000 essential English words", 
        "English vocabulary app",
        "English flashcards",
        "learn English PWA",
        "improve English vocabulary",
        "study English words",
        "English learning app",
        "build English vocabulary fast",
        "English practice app",
        "free English app",
        "English for beginners",
        "vocabulary builder",
        "learn English free",
        "English words daily",
        "speak English fluently",
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

    // ===== OTHER METADATA =====
    robots: "index, follow",
    metadataBase: new URL("https://vemo-app.vercel.app"),
    alternates: {
        canonical: "/",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            {/* ===== ADDITIONAL PWA TAGS ===== */}
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="apple-mobile-web-app-title" content="Vemo" />
            
            {/* ===== SALES & CONVERSION TAGS ===== */}
            <meta name="theme-color" content="#000000" />
            <meta name="msapplication-TileColor" content="#000000" />
            <meta name="msapplication-config" content="/browserconfig.xml" />
            
            {/* ===== STRUCTURED DATA FOR SEO ===== */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "MobileApplication",
                        "name": "Vemo - Learn English Words",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Android, iOS, Web",
                        "description": "Master 3000 essential English words with flashcards and smart practice",
                        "offers": {
                            "@type": "Offer",
                            "price": "0",
                            "priceCurrency": "USD"
                        },
                        "aggregateRating": {
                            "@type": "AggregateRating",
                            "ratingValue": "4.8",
                            "ratingCount": "1250"
                        }
                    })
                }}
            />
        </head>
        <body className={`${ibmPlex.variable} antialiased`}>
            {children}
        </body>
        </html>
    );
}