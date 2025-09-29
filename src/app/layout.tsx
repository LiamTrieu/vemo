import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const ibmPlex = IBM_Plex_Sans({
    variable: "--font-ibm-plex",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Vemo – Learn 3000 English Words",
    description:
        "Vemo helps you master 3000 essential English words with flashcards and smart practice.",
    generator: "Next.js",
    manifest: "/manifest.json",
    keywords: ["nextjs", "next14", "pwa", "next-pwa"],
    themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#fff" }],
    viewport:
        "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover",
    icons: [
        { rel: "apple-touch-icon", url: "icon-192x192.png" },
        { rel: "icon", url: "icon-192x192.png" },
    ],
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={`${ibmPlex.variable} antialiased`}>
        {children}
        </body>
        </html>
    );
}
