import { Button } from '@/../../components/ui/button'
import { Section } from '@/../../components/ui/section'
import { Heading } from '@/../../components/ui/heading'

export default function CTA() {
  return (
    <Section id="assessment">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-12 mb-8">
          <div className="max-w-2xl mx-auto text-center">
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
