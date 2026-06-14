import ContactForm from '@/components/contact-form'

export default function Contact() {
  return (
    <section className='pb-24 pt-40'>
      <div className='container max-w-3xl font-mono'>
        <h2 className='title font-mono'>Let&apos;s talk about your project</h2>

        <ContactForm />
      </div>
    </section>
  )
}