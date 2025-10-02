import { Button } from '@/../../components/ui/button'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'

export default function CTA() {
  return (
    <Section id="assessment">
      <div className="max-w-4xl mx-auto text-center">
        <Heading level={2} className="mb-6">Ready to Transform Your Revenue Operations?</Heading>
        <p className="text-xl text-gray-600 mb-8" data-testid="text-cta-subtitle">
          Get your complimentary assessment
        </p>
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Calendly Widget Goes Here</h3>
            <p className="text-gray-600 mb-6">Replace with your Calendly embed code</p>
            <div className="bg-white rounded-lg p-4 border border-gray-200">
              <code className="text-sm text-gray-500">
                &lt;div class="calendly-inline-widget" data-url="https://calendly.com/your-link"&gt;&lt;/div&gt;
              </code>
            </div>
          </div>
        </div>
        <Button size="lg" className="mb-4" data-testid="button-get-assessment-cta">
          Get Your Assessment
        </Button>
        <p className="text-gray-500 text-sm">30-minute consultation • No commitment</p>
      </div>
    </Section>
  )
}
