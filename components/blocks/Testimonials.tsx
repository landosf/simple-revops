import { Section } from '@/../../components/ui/section'
import { Card } from '@/../../components/ui/card'
import { Heading } from '@/../../components/ui/heading'

export default function Testimonials() {
  const testimonials = [
    { 
      quote: "From our first engagement, Simple felt like part of our leadership team. They led an in-depth ICP and segmentation project that redefined our targeting strategy — resulting in a 37% increase in qualified pipeline within two weeks of campaign launch. They also overhauled our GTM tech stack, integrating CRM, GTM automation, and data enrichment tools to support scale. Simple combines strategic insight with the ability to deliver fast, tangible results.", 
      author: "Joseariel Gomez", 
      title: "CEO", 
      company: "Shastic" 
    },
    { 
      quote: "Partnering with Simple transformed how our revenue engine operates day to day. They mapped every step of our GTM process — from lead routing and opportunity handoffs to forecasting and pipeline hygiene — and built a clear operating model that connected our teams around shared metrics. Their work on TAM sizing, funnel automation, and capacity planning gave us the data clarity we'd been missing. The result is a faster, more predictable business where our teams can execute with confidence.", 
      author: "Charlene Chen", 
      title: "COO", 
      company: "AZA Finance (Operations Nation)" 
    },
    { 
      quote: "Simple's work fundamentally improved how our revenue teams operate. They documented our end-to-end sales processes through stakeholder interviews, automated manual CRM workflows, and implemented dashboards that surface funnel health and rep productivity in real time. Their attention to detail accelerated ramp times and improved conversion visibility across every stage of the funnel. They are the definition of a true RevOps partner.", 
      author: "Kheller Crawford", 
      title: "Founder & CEO", 
      company: "Otomo" 
    }
  ]

  return (
    <Section background="gray">
      <div className="text-center mb-16">
        <Heading level={2} className="mb-4">What Our Clients Say</Heading>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {testimonials.map((t, index) => (
          <Card key={index} className="p-8 hover-lift" data-testid={`card-testimonial-${index}`}>
            <blockquote className="text-gray-600 mb-6" data-testid={`text-quote-${index}`}>
              "{t.quote}"
            </blockquote>
            <div>
              <div className="font-semibold text-gray-900" data-testid={`text-author-${index}`}>
                {t.author}
              </div>
              <div className="text-gray-600 text-sm" data-testid={`text-title-${index}`}>
                {t.title}
              </div>
              <div className="text-primary text-sm font-medium" data-testid={`text-company-${index}`}>
                {t.company}
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
