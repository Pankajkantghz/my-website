

import RecentPosts from '@/components/recent-post'
// import  ThemeToggle  from '../components/theme-toggle'

import Intro from '../components/intro'
import RecentProjects from '@/components/recent-projects'
import SkillsSection from '@/components/skills'
import ExperienceSection from '@/components/experience-section'
import ServicesSection from '@/components/service-section'
import ContactSection from '@/components/contact-section'
import NewsletterForm from '@/components/newsletter-form'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container max-w-3xl'>
        <Intro />
        <ExperienceSection />
        <RecentProjects />
        <ServicesSection />
        <SkillsSection />
        
        <RecentPosts />
        <ContactSection />
        {/* <NewsletterForm />  for the future*/}
      </div>
    </section>
  )
}
