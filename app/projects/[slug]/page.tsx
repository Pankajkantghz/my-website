import { notFound } from 'next/navigation'

import {
  getProjects,
  getProjectBySlug,
} from '@/lib/projects'

import MDXContent from '@/components/mdx-content'

export async function generateStaticParams() {
  const projects = getProjects()

  return projects.map(project => ({
    slug: project.slug,
  }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <section className="pb-24 pt-40">
      <div className="container">
        <h1 className="title mb-3">
          {project.metadata.title}
        </h1>

        <p className="mb-8 text-muted-foreground">
          {project.metadata.summary}
        </p>

        <article className="prose dark:prose-invert">
          <MDXContent source={project.content} />
        </article>
      </div>
    </section>
  )
}