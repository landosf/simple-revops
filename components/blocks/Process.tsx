import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'

export default function Process() {
  const steps = [
    { 
      number: "01", 
      title: "Assessment & Strategy", 
      description: "Analyze current operations and create roadmap", 
      deliverables: ["Current state analysis", "Gap identification", "Strategic roadmap"] 
    },
    { 
      number: "02", 
      title: "Implementation", 
      description: "Work with your team to implement solutions", 
      deliverables: ["Process optimization", "Technology setup", "Team training"] 
    },
    { 
      number: "03", 
      title: "Measurement & Scaling", 
      description: "Monitor and scale across organization", 
      deliverables: ["Performance tracking", "Continuous improvement", "Scale optimization"] 
    }
  ]

  return (
    <Section id="process">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">Our Data-Driven Process</Heading>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">Data quality & insights, efficiency actions & optimization, and AI automation.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <Card key={index} className="p-8 hover-lift" data-testid={`card-process-${index}`}>
            <div className="text-4xl font-bold text-primary mb-4" data-testid={`text-step-number-${index}`}>
              {step.number}
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3" data-testid={`text-step-title-${index}`}>
              {step.title}
            </h3>
            <p className="text-gray-600 mb-6" data-testid={`text-step-desc-${index}`}>
              {step.description}
            </p>
            <ul className="space-y-2">
              {step.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start space-x-2" data-testid={`list-deliverable-${index}-${idx}`}>
                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2"></div>
                  <span className="text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  )
}
