import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Ali Waris | Associate Full Stack Developer",
    description: "Portfolio of Ali Waris, Associate Full Stack Developer specializing in React, Vue, Node.js, FastAPI, and scalable web applications.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "any" },
            { url: "/favicon.svg", type: "image/svg+xml" },
        ],
        apple: "/apple-touch-icon.png",
    },
    manifest: "/manifest.json",
};

import { Providers } from "./providers";

// ... (imports remain)

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased font-sans`}>
                <Providers>
                    <SmoothScroll />
                    <CustomCursor />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
