import Navbar from '@/components/blocks/Navbar'
import Hero from '@/components/blocks/Hero'
import Problem from '@/components/blocks/Problem'
import Solution from '@/components/blocks/Solution'
import Results from '@/components/blocks/Results'
import CTA from '@/components/blocks/CTA'
import Footer from '@/components/blocks/Footer'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Results />
      <CTA />
      <Footer />
    </main>
  )
}