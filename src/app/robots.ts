import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    const baseUrl = "https://aliwaris.netlify.app";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
            disallow: "/_next/",
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
