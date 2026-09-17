export const baseUrl = "https://aliwaris.netlify.app";

export const siteMetadata = {
    title: "Ali Waris | Associate Full Stack Developer",
    description: "Portfolio of Ali Waris, Associate Full Stack Developer specializing in React, Vue, Node.js, FastAPI, and scalable web applications.",
    siteName: "Ali Waris Portfolio",
    url: baseUrl,
    image: `${baseUrl}/favicon-512.png`,
    author: "Ali Waris",
    keywords: ["Ali Waris", "Full Stack Developer", "React", "Vue", "Next.js", "Node.js", "FastAPI", "Portfolio", "Web Developer", "Software Engineer"],
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
