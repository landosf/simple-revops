import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'

export default function Process() {
  const steps = [
    { 
      number: "1", 
      title: "Data Assessment & Strategy", 
      description: "Analyze current operations and create roadmap", 
      deliverables: ["Current state analysis", "Gap identification", "Strategic roadmap"]
    },
    { 
      number: "2", 
      title: "Implementation", 
      description: "Work with your team to implement solutions", 
      deliverables: ["Process optimization", "Technology setup", "Team training"]
    },
    { 
      number: "3", 
      title: "Measurement & Scaling", 
      description: "Monitor and scale across organization", 
      deliverables: ["Performance tracking", "Continuous improvement", "Scale optimization"]
    }
  ]

  return (
    <Section id="process" className="bg-white">
      <div className="text-center mb-16">
        <Heading level={2}>Our Data-Driven Process</Heading>
      </div>
      
      <div className="relative">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative" data-testid={`card-process-${index}`}>
              {/* Step number circle */}
              <div className="flex justify-center mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg relative z-10" data-testid={`text-step-number-${index}`}>
                  <span className="text-6xl font-bold text-white">{step.number}</span>
                </div>
              </div>
              
              {/* Content card */}
              <Card className="p-8 hover-lift bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center" data-testid={`text-step-title-${index}`}>
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 text-center leading-relaxed" data-testid={`text-step-desc-${index}`}>
                  {step.description}
                </p>
                
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-xs font-semibold text-primary uppercase tracking-wider mb-4 text-center">Key Deliverables</p>
                  <ul className="space-y-3">
                    {step.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-center justify-center space-x-3" data-testid={`list-deliverable-${index}-${idx}`}>
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
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
    </Section>
  )
}
