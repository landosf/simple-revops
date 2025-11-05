import { Link } from 'wouter'
import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Card } from '../../../components/ui/card'
import { Heading } from '../../../components/ui/heading'
import { Button } from '../../../components/ui/button'
import { CalendlyWidget } from '../../../components/ui/calendly-widget'

export default function ServicesPage() {
  const services = [
    {
      title: "Revenue Operations Assessment",
      description: "Comprehensive analysis of your current revenue operations, identifying gaps and opportunities.",
      features: ["Current state analysis", "Process gap identification", "Technology stack evaluation", "Team alignment assessment", "Strategic recommendations"],
      timeline: "2-3 weeks",
      outcome: "Clear roadmap for transformation"
    },
    {
      title: "Process Design & Implementation",
      description: "Design and implement optimized revenue processes that align your teams.",
      features: ["Process mapping and design", "Workflow automation setup", "Team training", "Change management support", "Performance monitoring"],
      timeline: "6-12 weeks",
      outcome: "Streamlined processes and efficiency"
    },
    {
      title: "Technology Optimization",
      description: "Maximize your existing technology investments and implement new solutions.",
      features: ["CRM optimization", "Integration setup", "Dashboard creation", "Tool consolidation", "Training and support"],
      timeline: "4-8 weeks",
      outcome: "Optimized tech stack with better ROI"
    },
    {
      title: "Revenue Analytics & Reporting",
      description: "Build comprehensive reporting systems for clear revenue visibility.",
      features: ["KPI definition", "Custom dashboards", "Automated reporting", "Data quality assurance", "Executive briefings"],
      timeline: "3-6 weeks",
      outcome: "Data-driven insights"
    }
  ]

  const methodology = [
    { phase: "Discovery", description: "Understand your business and challenges", activities: ["Stakeholder interviews", "Process documentation", "Data analysis", "Technology audit"] },
    { phase: "Design", description: "Design customized solutions", activities: ["Solution architecture", "Process design", "Technology planning", "Implementation roadmap"] },
    { phase: "Implement", description: "Deploy solutions and ensure adoption", activities: ["Solution deployment", "Team training", "Change management", "Performance monitoring"] },
    { phase: "Optimize", description: "Monitor and maximize results", activities: ["Performance tracking", "Continuous improvement", "Scaling optimization", "Long-term support"] }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section className="pt-20 lg:pt-24">
          <div className="text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20" data-testid="badge-services">
                Our Services
              </span>
            </div>
            <Heading level={1} className="mb-6">
              Comprehensive Revenue Operations <span className="text-primary">Solutions</span>
            </Heading>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              End-to-end revenue operations services designed to transform your business. Every solution is customized to your needs.
            </p>
            <Link href="/book-strategy-call">
              <a>
                <Button size="lg" data-testid="button-schedule-consultation">Schedule a Consultation</Button>
              </a>
            </Link>
          </div>
        </Section>

        <Section background="gray">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Our Service Offerings</Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Each service addresses specific aspects of revenue operations, or combine for comprehensive transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8" data-testid={`card-service-${index}`}>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-200">
                  <div>
                    <div className="text-sm font-medium text-gray-900">Timeline</div>
                    <div className="text-sm text-gray-600">{service.timeline}</div>
                  </div>
                  <Link href="/book-strategy-call">
                    <a>
                      <Button size="sm" data-testid={`button-learn-more-${index}`}>Learn More</Button>
                    </a>
                  </Link>
                </div>
                
                <div className="mt-4 p-4 bg-primary/5 rounded-lg">
                  <div className="text-sm font-medium text-gray-900 mb-1">Expected Outcome:</div>
                  <div className="text-sm text-gray-700">{service.outcome}</div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section>
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">Our Methodology</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((phase, index) => (
              <div key={index} className="relative" data-testid={`phase-${index}`}>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{phase.description}</p>
                </div>
                
                <div className="text-center">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Activities:</h4>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="text-gray-600 text-sm">
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>

                {index < methodology.length - 1 && (
                  <div className="hidden lg:block absolute top-6 -right-4 w-8 h-0.5 bg-gray-200"></div>
                )}
              </div>
            ))}
          </div>
        </Section>

        <Section background="gray">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-6">Ready to Get Started?</Heading>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Let's discuss your needs and create a customized plan.
              </p>
            </div>
            <CalendlyWidget />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
