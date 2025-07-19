"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with advanced features like real-time inventory, payment processing, and admin dashboard.",
    image: "/placeholder.svg?height=300&width=500&text=E-Commerce+Platform",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 45,
    forks: 12,
    featured: true,
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management with real-time updates, team collaboration, and advanced project tracking.",
    image: "/placeholder.svg?height=300&width=500&text=Task+Management",
    technologies: ["React", "Socket.io", "PostgreSQL", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 32,
    forks: 8,
    featured: true,
  },
  {
    id: 3,
    title: "Social Media Dashboard",
    description:
      "Analytics dashboard for social media management with comprehensive reporting and automation features.",
    image: "/placeholder.svg?height=300&width=500&text=Social+Dashboard",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Tailwind"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 28,
    forks: 6,
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section className="py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-white font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my latest work and creative solutions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button size="sm">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <div className="flex items-center space-x-3 text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span className="text-sm">{project.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitFork className="w-4 h-4" />
                      <span className="text-sm">{project.forks}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/projects">
            <Button size="lg" variant="outline">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
