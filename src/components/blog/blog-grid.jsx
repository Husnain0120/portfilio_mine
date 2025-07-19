"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const allBlogs = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt: "Learn best practices for creating maintainable and scalable React applications...",
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
  {
    id: 4,
    title: "JavaScript ES2024 Features",
    excerpt: "Discover the newest JavaScript features and how to use them effectively...",
    date: "2024-01-01",
    readTime: "6 min read",
    image: "/placeholder.svg?height=150&width=250&text=JS-Features",
    tags: ["JavaScript", "ES2024", "Features"],
  },
  {
    id: 5,
    title: "CSS Grid vs Flexbox: When to Use What",
    excerpt: "Understanding the differences and use cases for CSS Grid and Flexbox...",
    date: "2023-12-28",
    readTime: "8 min read",
    image: "/placeholder.svg?height=150&width=250&text=CSS-Layout",
    tags: ["CSS", "Grid", "Flexbox", "Layout"],
  },
  {
    id: 6,
    title: "API Design Best Practices",
    excerpt: "Learn how to design RESTful APIs that are scalable and maintainable...",
    date: "2023-12-25",
    readTime: "12 min read",
    image: "/placeholder.svg?height=150&width=250&text=API-Design",
    tags: ["API", "REST", "Backend", "Design"],
  },
]

export function BlogGrid() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allBlogs.map((blog) => (
            <Card key={blog.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-primary text-primary-foreground">{blog.readTime}</Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-4 text-muted-foreground text-sm mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{blog.title}</CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{blog.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="ghost" className="w-full justify-between group-hover:bg-muted">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
