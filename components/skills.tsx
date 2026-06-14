import {
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiMysql,
  SiReact,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiPostman,
  SiGraphql,
  SiNextdotjs,
  SiGithub,
  SiLinux,
} from 'react-icons/si'
import { Network } from 'lucide-react'

export default function SkillsSection() {
  const skills = [
    {
      title: 'Programming',
      items: [
        { name: 'C++', icon: SiCplusplus },
        { name: 'JavaScript', icon: SiJavascript },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'SQL', icon: SiMysql },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { name: 'React', icon: SiReact },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Redux', icon: SiRedux },
        { name: 'Tailwind', icon: SiTailwindcss },
      ],
    },
    {
      title: 'Backend',
      items: [
        { name: 'Node.js', icon: SiNodedotjs },
        { name: 'Express', icon: SiExpress },
        { name: 'REST API', icon: SiPostman },
        { name: 'GraphQL', icon: SiGraphql },
      ],
    },
    {
      title: 'Databases',
      items: [
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'Firebase', icon: SiFirebase },
      ],
    },
    {
      title: 'Tools',
      items: [
        { name: 'Git', icon: SiGit },
        { name: 'GitHub', icon: SiGithub },
        { name: 'Docker', icon: SiDocker },
        { name: 'Postman', icon: SiPostman },
      ],
    },
    {
      title: 'Core CS',
      items: [
        { name: 'DSA', icon: SiCplusplus },
        { name: 'DBMS', icon: SiMysql },
        { name: 'OS', icon: SiLinux },
        { name: 'CN', icon: Network },
      ],
    },
  ]

  return (
    <section className='pb-24'>
      <div className='mb-12'>
        <h2 className='title mb-3 font-mono'>Skills</h2>
        <p className='text-sm text-muted-foreground'>
          Technologies, tools, and concepts I use to build scalable modern
          applications.
        </p>
      </div>

      <div className='grid gap-4 sm:grid-cols-2 xl:grid-cols-3'>
        {skills.map(skill => (
          <div
            key={skill.title}
            className='rounded-lg border border-border p-5'
          >
            <h3 className='mb-4 text-sm font-semibold'>{skill.title}</h3>

            <div className='flex flex-wrap gap-2'>
              {skill.items.map(item => {
                const Icon = item.icon
                return (
                  <div
                    key={item.name}
                    className='flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-xs text-muted-foreground'
                  >
                    <Icon className='text-sm' />
                    <span>{item.name}</span>
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}