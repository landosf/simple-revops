import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'
import { Button } from '@/../../components/ui/button'
import { Link } from 'wouter'

export default function Process() {
  const steps = [
    { 
      number: "1", 
      title: "Data Diagnosis & Analysis", 
      description: "Understand business challenges and identify performance opportunities", 
      deliverables: ["Needs assessment & top priorities", "Data collection & analysis", "Gap identification & insights"]
    },
    { 
      number: "2", 
      title: "Strategy & Execution", 
      description: "Build and implement best practice solutions", 
      deliverables: ["Solution development", "Strategy & implementation", "Change management & risk mitigation"]
    },
    { 
      number: "3", 
      title: "Measure & Enable", 
      description: "Monitor, optimize, and scale across organization", 
      deliverables: ["Performance tracking & forecasting", "Training & knowledge transfer", "Continuous improvement & process optimization"]
    }
  ]

  return (
    <Section id="process" background="gray">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">Our Data-Driven Process</Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">A framework for success starts with data quality.</p>
      </div>
      
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`card-process-${index}`}>
              {/* Content card */}
              <Card className="p-8 hover-lift bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100">
                <div className="text-center mb-4">
                  <span className="text-7xl font-black text-purple-600" data-testid={`text-step-number-${index}`}>{step.number}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4">Key Deliverables</p>
                  <ul className="space-y-3">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-3" data-testid={`list-deliverable-${index}-${idx}`}>
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-12">
        <Link href="/services">
          <Button size="lg" className="bg-gray-200 hover:bg-gray-300 text-gray-800 border-0" data-testid="button-learn-more">
            Learn More
          </Button>
        </Link>
      </div>
    </Section>
  )
}
