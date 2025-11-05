import Navbar from '../../../components/blocks/Navbar'
import Footer from '../../../components/blocks/Footer'
import { Section } from '../../../components/ui/section'
import { Card } from '../../../components/ui/card'
import { Heading } from '../../../components/ui/heading'
import { Button } from '../../../components/ui/button'
import { CalendlyWidget } from '../../../components/ui/calendly-widget'

export default function BookStrategyCallPage() {
  const benefits = [
    { title: "Revenue Operations Assessment", description: "Analyze your operations and identify opportunities.", icon: "🔍" },
    { title: "Custom Growth Strategy", description: "Get a personalized roadmap for your situation.", icon: "🎯" },
    { title: "Quick Wins Identification", description: "Discover immediate actions you can take.", icon: "⚡" },
    { title: "Technology Recommendations", description: "Learn which tools give you the biggest ROI.", icon: "🛠️" }
  ]

  const process = [
    { step: "1", title: "Book Your Call", description: "Schedule a 30-minute session." },
    { step: "2", title: "Share Your Challenges", description: "Discuss your challenges and goals." },
    { step: "3", title: "Get Your Strategy", description: "Receive customized recommendations." },
    { step: "4", title: "Decide Next Steps", description: "No pressure either way." }
  ]

  const faqs = [
    { question: "What should I expect from this call?", answer: "A consultative session where we discuss your challenges and provide specific recommendations." },
    { question: "Do I need to prepare anything?", answer: "Just come ready to discuss your challenges. We'll guide the conversation." },
    { question: "Is this really free?", answer: "Yes, absolutely. We believe in building relationships first and providing genuine value before further discussions." },
    { question: "Will you try to sell me something?", answer: "Our focus is on providing value. If there's a good fit, we'll discuss it, but there's no pressure." },
    { question: "Who should attend?", answer: "Someone involved in revenue operations, sales operations, or revenue leadership." }
  ]

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Section className="pt-20 lg:pt-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20" data-testid="badge-free-session">
                Free Strategy Session
              </span>
            </div>
            <Heading level={1} className="mb-6">
              Get a Custom Revenue Operations <span className="text-primary">Strategy for Your Business</span>
            </Heading>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Book a complimentary 30-minute strategy session and discover the specific steps to optimize your revenue operations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {['100% Value-Driven', 'Actionable Insights', '30 Minutes Expert Time', 'Custom Strategy'].map((item, idx) => (
                <div key={idx} className="flex items-center space-x-3" data-testid={`benefit-${idx}`}>
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-8">
            <CalendlyWidget />
          </div>
        </Section>

        <Section background="gray">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">What You'll Get From This Call</Heading>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              This isn't just a discovery call. You'll walk away with specific, actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="p-8" data-testid={`card-benefit-${index}`}>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{benefit.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Section>

        <Section background="gray">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-4">How It Works</Heading>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <Heading level={2} className="mb-4">Frequently Asked Questions</Heading>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index} className="p-8" data-testid={`faq-${index}`}>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
