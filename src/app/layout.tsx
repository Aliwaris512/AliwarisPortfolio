import { Inter } from "next/font/google";
import "./globals.css";

import CustomCursor from "@/components/CustomCursor";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";

import { Providers } from "./providers";
import { siteMetadata, siteJsonLd } from "@/lib/seo";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = siteMetadata;

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.variable} antialiased font-sans`}>
                <JsonLd schema={siteJsonLd} id="schema-person" />
                <Providers>
                    <SmoothScroll />
                    <CustomCursor />
                    {children}
                </Providers>
            </body>
        </html>
    );
}
