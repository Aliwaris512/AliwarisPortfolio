import type { Metadata } from "next";

export const baseUrl = "https://aliwaris.netlify.app";

export const siteMetadata: Metadata = {
    title: "Ali Waris | Associate Full Stack Developer",
    description: "Portfolio of Ali Waris, Associate Full Stack Developer specializing in React, Vue, Node.js, FastAPI, and scalable web applications.",
    icons: {
        icon: [
            { url: "/favicon.ico", sizes: "32x32" },
            { url: "/favicon.svg", type: "image/svg+xml" },
            { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
            { url: "/favicon-192.png", sizes: "192x192", type: "image/png" },
            { url: "/favicon-512.png", sizes: "512x512", type: "image/png" },
        ],
        apple: [
            { url: "/apple-touch-icon.png", sizes: "180x180" },
        ],
    },
    manifest: "/site.webmanifest",
    authors: [{ name: "Ali Waris" }],
    keywords: ["Ali Waris", "Full Stack Developer", "React", "Vue", "Next.js", "Node.js", "FastAPI", "Portfolio", "Web Developer", "Software Engineer"],
    openGraph: {
        title: "Ali Waris | Associate Full Stack Developer",
        description: "Portfolio of Ali Waris, Associate Full Stack Developer specializing in React, Vue, Node.js, FastAPI, and scalable web applications.",
        url: baseUrl,
        siteName: "Ali Waris Portfolio",
        locale: "en_US",
        type: "website",
        images: [
            {
                url: `${baseUrl}/favicon-512.png`,
                width: 512,
                height: 512,
                alt: "Ali Waris",
            },
        ],
    },
    twitter: {
        card: "summary",
        title: "Ali Waris | Associate Full Stack Developer",
        description: "Portfolio of Ali Waris, Associate Full Stack Developer specializing in React, Vue, Node.js, FastAPI, and scalable web applications.",
        images: [`${baseUrl}/favicon-512.png`],
    },
    metadataBase: new URL(baseUrl),
};

export const siteJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ali Waris",
    jobTitle: "Associate Full Stack Developer",
    url: baseUrl,
    email: "aliwariskhan512@gmail.com",
    telephone: "+923094501187",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Lahore",
        addressCountry: "PK",
    },
    sameAs: [
        "https://github.com/Aliwaris512",
        "https://www.linkedin.com/in/ali-waris-b1a9ab318/",
        "https://x.com/Aliwaris0505",
        "https://www.instagram.com/yeah._.itz_ali",
    ],
    knowsAbout: [
        "React", "Next.js", "Vue.js", "TypeScript", "JavaScript",
        "Node.js", "Python", "FastAPI", "Django", "Tailwind CSS",
        "MySQL", "REST APIs", "GraphQL",
    ],
    worksFor: {
        "@type": "Organization",
        name: "CodeSuite",
    },
    alumniOf: {
        "@type": "CollegeOrUniversity",
        name: "Superior University",
    },
};
