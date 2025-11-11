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
      quote: "ROI was immediate. 40% improvement in lead qualification within 60 days.", 
      author: "Michael Rodriguez", 
      title: "CRO", 
      company: "TechFlow" 
    },
    { 
      quote: "Systematic approach delivered real solutions that continue working.", 
      author: "Jennifer Park", 
      title: "Head of Sales Ops", 
      company: "DataCore" 
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
