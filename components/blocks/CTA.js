import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'

export default function CTA() {
  return (
    <Section background="gradient">
      <div className="text-center">
        <Heading level={2} className="text-white mb-6">
          Ready to unify your revenue ecosystem?
        </Heading>
        <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
          Book a 30-minute exploration call to discover how we can align your teams, 
          optimize your tech stack, and drive measurable growth.
        </p>
        
        <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <svg className="w-16 h-16 text-blue-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <Heading level={3} className="mb-2">Schedule Your Call</Heading>
            <p className="text-gray-600 mb-6">
              Choose a time that works for you. We'll discuss your specific challenges and opportunities.
            </p>
          </div>
          
          <Button size="lg" className="w-full mb-4">
            Book 30-Minute Exploration Call
          </Button>
          
          <div className="text-sm text-gray-500 mb-6">
            No sales pressure. Just insights and actionable next steps.
          </div>
          
          <div className="border-t border-gray-200 pt-6">
            <p className="text-gray-600 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:hello@simplerevenue.com" className="text-blue-600 hover:text-blue-800 font-medium">
                hello@simplerevenue.com
              </a>
              <a href="tel:+15551234567" className="text-blue-600 hover:text-blue-800 font-medium">
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}