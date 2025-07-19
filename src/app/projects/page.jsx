import { ProjectsGrid } from "@/components/projects/projects-grid"
import { ProjectsHero } from "@/components/projects/projects-hero"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-20">
      <ProjectsHero />
      <ProjectsGrid />
    </div>
  )
}
