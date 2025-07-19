"use client";
import { HeroSection } from "@/components/sections/hero-section";
import { AboutSection } from "@/components/sections/about-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { BlogsSection } from "@/components/sections/blogs-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/footer";

// Static Data
const personalInfo = {
  name: "Muhammad Husnain Rashid",
  title: "Fullstack Web Developer",
  subtitle: "React.js | JavaScript | Next.js | MERN Stack",
  bio: "Passionate fullstack developer with expertise in modern web technologies. I create scalable, user-friendly applications that solve real-world problems.",
  email: "husnain@example.com",
  phone: "+92 300 1234567",
  location: "Pakistan",
  avatar: "/placeholder.svg?height=150&width=150&text=HR",
  resume: "/resume.pdf",
};

const skills = [
  { name: "React.js", level: 95 },
  { name: "Next.js", level: 90 },
  { name: "JavaScript", level: 92 },
  { name: "Node.js", level: 88 },
  { name: "MongoDB", level: 85 },
  { name: "Express.js", level: 87 },
  { name: "TypeScript", level: 80 },
  { name: "React Native", level: 75 },
];

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with React, Node.js, and MongoDB",
    image: "/placeholder.svg?height=200&width=300&text=E-Commerce",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 45,
    forks: 12,
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management with real-time updates",
    image: "/placeholder.svg?height=200&width=300&text=Task-App",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 32,
    forks: 8,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description: "Analytics dashboard for social media management",
    image: "/placeholder.svg?height=200&width=300&text=Dashboard",
    technologies: ["React", "Chart.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 28,
    forks: 6,
  },
];

const blogs = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn best practices for creating maintainable and scalable React applications...",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=150&width=250&text=React-Blog",
    tags: ["React", "JavaScript", "Best Practices"],
  },
  {
    id: 2,
    title: "Next.js 14: What's New and Exciting",
    excerpt: "Explore the latest features and improvements in Next.js 14...",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg?height=150&width=250&text=NextJS-Blog",
    tags: ["Next.js", "Web Development", "Performance"],
  },
  {
    id: 3,
    title: "MERN Stack Development Guide",
    excerpt: "Complete guide to building full-stack applications with MERN...",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/placeholder.svg?height=150&width=250&text=MERN-Blog",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
  },
];

export default function Page() {
  return (
    <div className="min-h-screen bg-black">
      {/* Very subtle accent gradients - only for minimal highlights */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500/3 rounded-full blur-3xl"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-500/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <HeroSection personalInfo={personalInfo} />
        <AboutSection skills={skills} />
        <ProjectsSection projects={projects} />
        <BlogsSection blogs={blogs} />
        <ContactSection personalInfo={personalInfo} />
        <Footer />
      </div>
    </div>
  );
}
