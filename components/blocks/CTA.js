import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Heading from '@/components/ui/Heading'

export default function CTA() {
  return (
    <Section background="gradient">
      <div className="text-center">
        <div className="bg-yellow-400 text-black px-4 py-2 rounded-full inline-block mb-6 font-bold">
          ⚠️ LIMITED TIME: Revenue Audit Normally $5K - FREE This Month
        </div>
        
        <Heading level={2} className="text-white mb-6">
          Get Your Revenue Recovery Plan
          <span className="block text-yellow-300">Worth $500K+ in Found Revenue</span>
        </Heading>
        
        <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
          <strong>30-minute call reveals:</strong> Your biggest revenue leaks, 
          the #1 quick win worth $50K+, and your 90-day recovery roadmap.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
          {[
            { icon: "🔍", title: "Revenue Leak Audit", desc: "Find your $50K+ monthly waste" },
            { icon: "🎯", title: "Quick Win Identified", desc: "30-day action for immediate ROI" },
            { icon: "📈", title: "90-Day Growth Plan", desc: "Your roadmap to $500K+ recovery" }
          ].map((item, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-6 text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-white font-bold mb-2">{item.title}</h3>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 max-w-md mx-auto">
          <div className="text-center mb-6">
            <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-bold mb-4">
              🔥 Only 3 Spots Left This Month
            </div>
            <Heading level={3} className="mb-2">Book Your Free Audit</Heading>
            <p className="text-gray-600">Usually $5,000 - FREE for qualified companies</p>
          </div>
          
          {/* Calendly placeholder with urgency */}
          <div className="border-2 border-red-300 rounded-xl p-6 bg-red-50 mb-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-red-800 font-semibold mb-4">
                Replace with Calendly iframe:<br/>
                <code className="bg-white px-2 py-1 rounded text-xs block mt-2">
                  &lt;iframe src="your-calendly-url"&gt;&lt;/iframe&gt;
                </code>
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white w-full" data-testid="button-claim-audit">
                Claim Your Free Audit Now →
              </Button>
            </div>
          </div>
          
          <div className="text-center text-sm text-gray-500 space-y-1">
            <p>✓ No commitment required</p>
            <p>✓ 100% confidential</p>
            <p>✓ Immediate actionable insights</p>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center text-white/80">
            <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
            <p className="text-sm">Companies Already Recovered $47M+</p>
          </div>
          <div className="text-center text-white/80">
            <div className="text-3xl font-bold text-yellow-300 mb-2">89%</div>
            <p className="text-sm">Hit Growth Targets in 90 Days</p>
          </div>
          <div className="text-center text-white/80">
            <div className="text-3xl font-bold text-yellow-300 mb-2">45</div>
            <p className="text-sm">Days Average ROI Payback</p>
          </div>
        </div>
      </div>
    </Section>
  )
}