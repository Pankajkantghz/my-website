export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Software Developer',
      company: 'EklavyaSolution',
      duration: 'Oct 2024 – Present',
      points: [
        'Built complete React + Redux + Tailwind frontend from scratch — 30% revenue increase',
        'Designed scalable RESTful APIs with Node.js — 20% load time reduction',
        'Implemented security features including rate limiting, encryption, domain blocking, and input validation',
      ],
    },
    {
      role: 'Software Development Intern',
      company: 'EklavyaSolution',
      duration: 'May 2024 – Oct 2024',
      points: [
        'Built modern UI features using ReactJS and Redux',
        'Contributed to backend API integration and feature development',
        'Improved customer engagement through UI/UX enhancements',
      ],
    },
  ]

  return (
    <section className='pb-24'>
      <div className='mb-12'>
        <h2 className='title mb-4 font-mono'>Experience</h2>
        <p className='text-sm text-muted-foreground'>
          Real-world experience building scalable and performance-focused
          applications.
        </p>
      </div>

      <div className='space-y-4'>
        {experiences.map(exp => (
          <div
            key={exp.role}
            className='rounded-lg border border-border p-5'
          >
            {/* Header */}
            <div className='flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between'>
              <div>
                <h3 className='text-base font-semibold'>{exp.role}</h3>
                <p className='text-sm text-muted-foreground'>{exp.company}</p>
              </div>
              <span className='w-fit rounded-full border border-border px-3 py-1 text-xs text-muted-foreground'>
                {exp.duration}
              </span>
            </div>

            {/* Bullet points as simple list */}
            <ul className='mt-4 space-y-1.5'>
              {exp.points.map(point => (
                <li
                  key={point}
                  className='flex items-start gap-2 text-sm text-muted-foreground'
                >
                  <span className='mt-1.5 h-1 w-1 shrink-0 rounded-full bg-muted-foreground' />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}