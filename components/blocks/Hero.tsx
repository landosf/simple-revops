import { Button } from '@/../../components/ui/button'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'
import heroImage from '@assets/IMG_6171_1762552515187.jpeg'

export default function Hero() {
  const scrollToAssessment = () => {
    const element = document.getElementById('assessment')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProcess = () => {
    const element = document.getElementById('process')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section className="pt-20 lg:pt-24" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20" data-testid="badge-revenue-ops">
              Revenue Operations Excellence
            </span>
          </div>
          
          <Heading level={1} className="mb-6">
            Transform Your Revenue Operations Into a 
            <span className="text-primary"> Growth Engine</span>
          </Heading>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
            Stop losing deals to misaligned processes. We help B2B companies build predictable 
            revenue operations so you can scale with confidence.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white border-0" onClick={scrollToAssessment} data-testid="button-get-assessment">
              Get Your Assessment
            </Button>
            <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-800 border-0" onClick={scrollToProcess} data-testid="button-learn-process">
              Learn Our Process
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-revenue-growth">42%</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-revenue-label">Average Revenue Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-sales-velocity">3.2x</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-velocity-label">Sales Velocity</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-cycle-time">35%</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-cycle-label">Cycle Time Improved</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div>
            <img 
              src={typeof heroImage === 'string' ? heroImage : heroImage.src} 
              alt="Revenue Operations Framework" 
              className="w-full h-full object-cover"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
