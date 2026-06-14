import ServicesSection from '@/components/service-section'

export default function Services() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h1 className="title mb-8 font-mono">
          What I can build for you
        </h1>

        <ServicesSection />
      </div>
    </section>
  )
}