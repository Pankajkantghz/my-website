import {
  Code2,
  Database,
  Globe,
  Zap,
  Wrench,
  Plug,
} from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web applications built with Next.js, Node.js, and PostgreSQL — from database schema to deployed product.',
      icon: Globe,
    },
    {
      title: 'REST API Development',
      description: 'Scalable, well-documented APIs with authentication, rate limiting, and role-based access control.',
      icon: Database,
    },
    {
      title: 'Frontend Development',
      description: 'Pixel-perfect UIs with React, TypeScript, and Tailwind CSS — fast, accessible, and responsive.',
      icon: Code2,
    },
    {
      title: 'Performance & Bug Fixes',
      description: 'Diagnosing bottlenecks, cutting load times, resolving hard bugs, and hardening security vulnerabilities.',
      icon: Wrench,
    },
    {
      title: 'Real-Time Features',
      description: 'Live dashboards, chat systems, and collaborative tools powered by WebSockets and Socket.io.',
      icon: Zap,
    },
    {
      title: 'Third-Party Integration',
      description: 'Connecting payment gateways, OAuth providers, external APIs, and cloud storage to your application.',
      icon: Plug,
    },
  ]

  return (
    <section className='pb-24'>
      <div className='mb-12'>
        <h2 className='title mb-3 font-mono'>Services</h2>
        <p className='text-sm text-muted-foreground'>
          Services I provide for startups, businesses, and modern web applications.
        </p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {services.map(service => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className='rounded-lg border border-border p-5'
            >
              <Icon className='mb-3 h-5 w-5 text-muted-foreground' />
              <h3 className='mb-1.5 text-sm font-semibold'>{service.title}</h3>
              <p className='text-sm text-muted-foreground'>{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}