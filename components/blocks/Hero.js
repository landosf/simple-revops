import Button from '@/components/ui/Button'
import Section from '@/components/ui/Section'
import Heading from '@/components/ui/Heading'

export default function Hero() {
  return (
    <Section background="gradient" className="pt-20">
      <div className="text-center">
        <Heading level={1} className="text-white mb-6 leading-tight">
          Align your revenue ecosystem.<br/>
          <span className="text-yellow-300">Drive measurable growth.</span>
        </Heading>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
          Stop losing millions to misaligned revenue teams. We unify your entire revenue ecosystem 
          with infrastructure, analytics, and strategy that actually works.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-50">
            Schedule Exploration Call
          </Button>
          <Button variant="secondary" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600">
            See the Problem
          </Button>
        </div>
        <div className="animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </Section>
  )
}