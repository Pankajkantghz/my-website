import ProjectsWithSearch from '@/components/projects-with-search'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className="pt-40 pb-24">
      <div className="container max-w-3xl">
        <h1 className="title mb-12 font-mono">Projects</h1>

        <ProjectsWithSearch projects={projects} />
      </div>
    </section>
  )
}
