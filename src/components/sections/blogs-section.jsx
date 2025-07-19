"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const featuredBlogs = [
  {
    id: 1,
    title: "Building Scalable React Applications",
    excerpt:
      "Learn best practices for creating maintainable and scalable React applications with modern patterns and techniques.",
    date: "2024-01-15",
    readTime: "5 min read",
    image: "/placeholder.svg?height=200&width=350&text=React+Best+Practices",
    tags: ["React", "JavaScript", "Best Practices"],
    featured: true,
  },
  {
    id: 2,
    title: "Next.js 14: Performance Optimization",
    excerpt:
      "Explore advanced performance optimization techniques in Next.js 14 including App Router, Server Components, and more.",
    date: "2024-01-10",
    readTime: "7 min read",
    image: "/placeholder.svg?height=200&width=350&text=Next.js+Performance",
    tags: ["Next.js", "Performance", "Web Development"],
    featured: true,
  },
  {
    id: 3,
    title: "MERN Stack Development Guide",
    excerpt:
      "Complete guide to building full-stack applications with MongoDB, Express.js, React, and Node.js.",
    date: "2024-01-05",
    readTime: "10 min read",
    image: "/placeholder.svg?height=200&width=350&text=MERN+Stack",
    tags: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    featured: true,
  },
];

export function BlogsSection() {
  return (
    <section className="py-32  bg-gradient-to-tr from-purple-800/40  to-zinc-800/20  ">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl text-white font-bold mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing knowledge and insights about web development and technology
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredBlogs.map((blog) => (
            <Card
              key={blog.id}
              className="group hover:shadow-xl transition-all duration-300 overflow-hidden bg-zinc-800 border-zinc-700 hover:border-zinc-600"
            >
              <div className="relative overflow-hidden">
                <img
                  src={blog.image || "/placeholder.svg"}
                  alt={blog.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-purple-600 text-white">
                    {blog.readTime}
                  </Badge>
                </div>
              </div>

              <CardHeader>
                <div className="flex items-center space-x-4 text-gray-400 text-sm mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{new Date(blog.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-purple-400 transition-colors text-white">
                  {blog.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-gray-400">{blog.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-zinc-600 text-gray-400 bg-zinc-700/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="w-full justify-between group-hover:bg-zinc-700 text-gray-300 hover:text-white"
                >
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button
              size="lg"
              variant="outline"
              className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white bg-zinc-800/50"
            >
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
