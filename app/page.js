import Navbar from '@/components/blocks/Navbar'
import Hero from '@/components/blocks/Hero'
import Problem from '@/components/blocks/Problem'
import Solution from '@/components/blocks/Solution'
import CaseStudies from '@/components/blocks/CaseStudies'
import CTA from '@/components/blocks/CTA'
import Footer from '@/components/blocks/Footer'

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <CaseStudies />
      <CTA />
      <Footer />
    </main>
  )
}