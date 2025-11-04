import { Button } from '@/../../components/ui/button'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'
import heroImage from '@assets/IMG_6148_1762297106937.jpeg'

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
          <Heading level={1} className="mb-6">
            Transform Your Revenue Operations Into a 
            <span className="text-primary"> Growth Engine</span>
          </Heading>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed" data-testid="text-hero-description">
            Stop losing deals to misaligned processes. We help B2B companies build predictable, 
            scalable revenue operations that drive consistent growth and eliminate inefficiencies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" onClick={scrollToAssessment} data-testid="button-get-assessment">
              Get Your Assessment
            </Button>
            <Button variant="outline" size="lg" onClick={scrollToProcess} data-testid="button-learn-process">
              Learn Our Process
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8">
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-pipeline-growth">126%</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-pipeline-label">Average Pipeline Growth</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-days">90 Days</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-days-label">To See Results</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-gray-900" data-testid="stat-companies">50+</div>
              <div className="text-sm text-gray-600 font-medium" data-testid="stat-companies-label">Companies Transformed</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-primary/10">
            <img 
              src={heroImage} 
              alt="Revenue Operations Professional" 
              className="w-full h-full object-cover"
              data-testid="img-hero"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
