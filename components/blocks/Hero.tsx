import { Button } from '@/../../components/ui/button'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'

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
          <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl p-8 lg:p-12">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                  <div className="h-4 bg-green-200 rounded w-16"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-100 rounded"></div>
                  <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div className="h-4 bg-gray-200 rounded w-28"></div>
                  <div className="h-4 bg-blue-200 rounded w-20"></div>
                </div>
                <div className="h-24 bg-gradient-to-r from-blue-50 to-purple-50 rounded"></div>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="h-3 bg-primary/20 rounded w-12 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-16 mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="h-3 bg-primary/20 rounded w-12 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-16 mx-auto"></div>
                  </div>
                  <div className="text-center">
                    <div className="h-3 bg-primary/20 rounded w-12 mx-auto mb-2"></div>
                    <div className="h-2 bg-gray-100 rounded w-16 mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
