"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "JavaScript (ES6+)", logo: "/logos/javascript.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Vue.js", logo: "/logos/vue.svg" },
  { name: "Node.js", logo: "/logos/nodejs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "C++", logo: "/logos/cpp.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwind.svg" },
  { name: "MySQL", logo: "/logos/mysql.svg" },
  { name: "React Native", logo: "/logos/react-native.svg" },
  { name: "Git", logo: "/logos/git.svg" },
];

const experience = [
  {
    role: "Associate Software Engineer",
    company: "CodeSuite",
    period: "May 2025 – Present",
    bullets: [
      "Develop and maintain scalable web applications using React.js and Vue.js.",
      "Build responsive user interfaces with Tailwind CSS, HTML, and CSS.",
      "Integrate REST APIs and collaborate with backend teams using Node.js, FastAPI, and Django.",
      "Optimize application performance and improve cross-browser compatibility.",
    ],
  },
];

const education = [
  {
    school: "Superior University",
    degree: "BS in Robotics",
    year: "2023 - 2027",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-16 md:py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">

          {/* Image / Visual */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-2/5 relative lg:sticky lg:top-28 shrink-0"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="max-w-xs sm:max-w-sm mx-auto relative group"
            >
              <div
                className="absolute -inset-[2px] bg-gradient-to-r from-accent via-blue-500 via-purple-500 to-accent rounded-2xl opacity-50 group-hover:opacity-75 blur-[3px] transition-opacity duration-500 bg-[length:200%_200%] animate-border-rotate"
              />

              <div className="relative aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-gray-800 z-10 ring-1 ring-white/10">
                <motion.img
                  src="/profile.jpg"
                  alt="Ali Waris"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </motion.div>

            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="absolute -bottom-8 -right-8 w-48 h-48 bg-accent/5 rounded-full blur-3xl -z-10"
            />
            <motion.div
              animate={{ scale: [1, 1.12, 1], rotate: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 0.5 }}
              className="absolute -top-8 -left-8 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl -z-10"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="w-full flex-1 min-w-0"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              About Me
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-foreground/80 mb-5 leading-relaxed">
              Associate Full Stack Developer with 1+ years of professional experience building scalable, high-performance applications.
            </p>

            <p className="text-sm sm:text-base text-foreground/70 mb-6 leading-relaxed">
              I specialize in modern frontend development with React.js, Vue.js, HTML, CSS, and Tailwind CSS, while also delivering robust backend solutions using Node.js, Python FastAPI, and Django.
            </p>

            <p className="text-sm sm:text-base text-foreground/70 mb-8 leading-relaxed">
              My work focuses on clean architecture, responsive interfaces, API integrations, and performance optimization for production-ready web applications.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 mb-10">
              <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-5">
                <h3 className="font-semibold text-lg mb-4">Frontend & Mobile</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>React, Next.js, Vue.js, React Native</li>
                  <li>TypeScript, JavaScript, HTML, CSS, Tailwind</li>
                  <li>Expo, Bootstrap, Responsive Design</li>
                </ul>
              </div>

              <div className="rounded-3xl border border-foreground/10 bg-foreground/5 p-5">
                <h3 className="font-semibold text-lg mb-4">Backend & Data</h3>
                <ul className="space-y-2 text-foreground/70 text-sm">
                  <li>Node.js, Express, REST APIs, GraphQL</li>
                  <li>Python, FastAPI, Django</li>
                  <li>MySQL, JWT Authentication, API Integration</li>
                </ul>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-4">Professional Experience</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <div key={index} className="rounded-3xl border border-foreground/10 bg-foreground/5 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{item.role}</h4>
                        <p className="text-sm text-foreground/70">{item.company}</p>
                      </div>
                      <p className="text-sm text-accent">{item.period}</p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2 text-foreground/70 text-sm">
                      {item.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <div className="border-l-2 border-accent/20 pl-4">
                {education.map((edu, index) => (
                  <div key={index} className="mb-4">
                    <h4 className="font-medium text-foreground">{edu.school}</h4>
                    <p className="text-sm text-foreground/70">{edu.degree}</p>
                    <p className="text-xs text-accent">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="overflow-hidden">
              <h3 className="text-lg font-semibold mb-4">Tech Stack & Tools</h3>
              <motion.div
                className="flex gap-3 w-max"
                animate={{ x: ["0%", "-50%"] }}
                transition={{
                  repeat: Infinity,
                  duration: 25,
                  ease: "linear",
                }}
              >
                {[...skills, ...skills].map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 text-xs sm:text-sm bg-foreground/5 rounded-full text-foreground/80 border border-foreground/10 whitespace-nowrap"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-4 h-4 sm:w-5 sm:h-5 object-contain"
                    />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
