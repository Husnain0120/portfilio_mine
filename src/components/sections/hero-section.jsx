"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-16">
      {/* Interactive background - very subtle */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.1), transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Status Badge */}
          <div className="flex justify-center">
            <Badge className="px-4 py-2 text-sm bg-gray-900/50 backdrop-blur-sm text-gray-300 border-gray-700/50">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-2 animate-pulse" />
              Available for new projects
            </Badge>
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white animate-float">
              Muhammad
              <br />
              <span className="gradient-text">Husnain Rashid</span>
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 font-light">
              Fullstack Web Developer
            </p>

            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with React.js, Next.js,
              and the MERN stack. Transforming ideas into scalable, user-centric
              applications.
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "React.js",
              "Next.js",
              "JavaScript",
              "Node.js",
              "MongoDB",
              "Express.js",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="outline"
                className="px-3 py-1 border-gray-700/50 text-gray-400 bg-gray-900/30 backdrop-blur-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button
              size="lg"
              className="px-8 py-3 text-lg bg-purple-600 hover:bg-purple-700 text-white"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-3 text-lg bg-gray-900/30 backdrop-blur-sm border-gray-700/50 text-gray-300 hover:bg-gray-800/50 hover:text-white"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[
              { icon: Github, href: "https://github.com", label: "GitHub" },
              {
                icon: Linkedin,
                href: "https://linkedin.com",
                label: "LinkedIn",
              },
            ].map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-900/30 backdrop-blur-sm hover:bg-gray-800/50 transition-colors border border-gray-700/50"
              >
                <social.icon className="w-6 h-6 text-gray-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex flex-col items-center space-y-2 text-gray-400">
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
