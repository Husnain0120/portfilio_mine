"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Star, GitFork } from "lucide-react"

const allProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React, Node.js, and MongoDB",
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
  {
    id: 4,
    title: "Weather App",
    description: "Beautiful weather application with location-based forecasts",
    image: "/placeholder.svg?height=200&width=300&text=Weather-App",
    technologies: ["React", "OpenWeather API", "CSS3"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 15,
    forks: 4,
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "Responsive portfolio website with modern design",
    image: "/placeholder.svg?height=200&width=300&text=Portfolio",
    technologies: ["Next.js", "Tailwind", "Framer Motion"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 22,
    forks: 7,
  },
  {
    id: 6,
    title: "Chat Application",
    description: "Real-time chat application with rooms and file sharing",
    image: "/placeholder.svg?height=200&width=300&text=Chat-App",
    technologies: ["React", "Socket.io", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
    stars: 38,
    forks: 11,
  },
]

export function ProjectsGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
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
      </div>
    </section>
  )
}
