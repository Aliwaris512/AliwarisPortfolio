import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
    title: "Ali Waris | Web Developer",
    description: "Portfolio of Ali Waris, a Web Developer building clean, scalable web apps.",
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
