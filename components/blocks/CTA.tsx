'use client'

export default function CTA() {
  const openCalendly = () => {
    // In production, this would open Calendly modal or navigate to Calendly page
    window.open('https://calendly.com', '_blank')
  }

  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800">
      <div className="container-width">
        <div className="text-center">
          {/* Alert Banner */}
          <div className="bg-yellow-400 text-black px-6 py-3 rounded-full inline-block mb-8 font-bold text-lg animate-pulse">
            ⚠️ LIMITED TIME: Revenue Audit Normally $5K - FREE This Month
          </div>
          
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-balance">
            Get Your Revenue Recovery Plan
            <span className="block text-yellow-300">Worth $500K+ in Found Revenue</span>
          </h2>
          
          <p className="text-xl text-gray-200 mb-12 max-w-3xl mx-auto text-balance">
            <strong className="text-yellow-200">30-minute call reveals:</strong> Your biggest revenue leaks, 
            the #1 quick win worth $50K+, and your 90-day recovery roadmap.
          </p>
          
          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { icon: "🔍", title: "Revenue Leak Audit", desc: "Find your $50K+ monthly waste" },
              { icon: "🎯", title: "Quick Win Identified", desc: "30-day action for immediate ROI" },
              { icon: "📈", title: "90-Day Growth Plan", desc: "Your roadmap to $500K+ recovery" }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-xl p-6 text-center backdrop-blur">
                <div className="text-4xl mb-3">{item.icon}</div>
                <h3 className="text-white font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm text-balance">{item.desc}</p>
              </div>
            ))}
          </div>
          
          {/* Booking Widget */}
          <div className="bg-white rounded-2xl p-8 max-w-lg mx-auto mb-12 shadow-2xl">
            <div className="text-center mb-6">
              <div className="bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                🔥 Only 3 Spots Left This Month
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Book Your Free Audit</h3>
              <p className="text-gray-600">Usually $5,000 - FREE for qualified companies</p>
            </div>
            
            {/* Calendly Placeholder */}
            <div className="border-2 border-red-300 rounded-xl p-8 bg-red-50 mb-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-red-800 font-semibold mb-6">
                  Replace with Calendly iframe:<br/>
                  <code className="bg-white px-2 py-1 rounded text-xs block mt-2">
                    &lt;iframe src="your-calendly-url"&gt;&lt;/iframe&gt;
                  </code>
                </p>
                <button 
                  onClick={openCalendly}
                  className="btn-cta w-full text-lg py-4"
                >
                  Claim Your Free Audit Now →
                </button>
              </div>
            </div>
            
            {/* Trust Signals */}
            <div className="text-center text-sm text-gray-500 space-y-1">
              <p>✓ No commitment required</p>
              <p>✓ 100% confidential</p>
              <p>✓ Immediate actionable insights</p>
            </div>
          </div>

          {/* Final Trust Signals */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: '50+', label: 'Companies Already Recovered $47M+' },
              { number: '89%', label: 'Hit Growth Targets in 90 Days' },
              { number: '45', label: 'Days Average ROI Payback' }
            ].map((stat, index) => (
              <div key={index} className="text-center text-white/80">
                <div className="text-3xl font-bold text-yellow-300 mb-2">{stat.number}</div>
                <p className="text-sm text-balance">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}