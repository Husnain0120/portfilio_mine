import { BlogGrid } from "@/components/blog/blog-grid"
import { BlogHero } from "@/components/blog/blog-hero"

export default function BlogPage() {
  return (
    <div className="min-h-screen pt-20">
      <BlogHero />
      <BlogGrid />
    </div>
  )
}
