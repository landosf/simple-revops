'use client'

export default function Results() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="results" className="section-padding bg-gray-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              From Revenue Chaos to <span className="text-green-600">$2M+ Growth Stories</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              <strong>Real companies. Real transformations.</strong> See how we turned their revenue bleeding into predictable growth machines.
            </p>
          </div>

          {/* Featured Case Study */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 border-l-6 border-green-500 rounded-2xl p-10 mb-16 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-3">Shastic (B2B SaaS)</h3>
                <p className="text-green-700 font-bold text-xl mb-4">$2.1M ARR → $4.7M ARR in 8 months</p>
              </div>
              <div className="text-right text-sm">
                <div className="bg-red-100 text-red-700 px-3 py-1 rounded mb-2 font-medium">
                  BEFORE: Chaotic revenue ops
                </div>
                <div className="bg-green-100 text-green-700 px-3 py-1 rounded font-medium">
                  AFTER: Predictable growth machine
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 mb-8">
              <h4 className="font-bold text-gray-900 mb-4 text-xl">The Problem:</h4>
              <p className="text-gray-600 mb-6 text-lg text-balance">
                "Our sales team was drowning in unqualified leads. Marketing blamed sales for not closing. 
                Customer success was finding out about churn after customers had already left. 
                <strong className="text-red-600">We were burning $80K monthly</strong> on revenue inefficiency."
              </p>
              <p className="text-gray-500 italic">- Sarah Chen, VP Revenue Operations</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {[
                { metric: '126%', label: 'Pipeline Growth', desc: 'From $800K to $1.8M monthly pipeline' },
                { metric: '95%', label: 'More MQLs', desc: 'Quality leads that actually convert' },
                { metric: '$2.6M', label: 'Added ARR', desc: 'Net new recurring revenue in 8 months' }
              ].map((result, index) => (
                <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg">
                  <div className="text-4xl font-bold text-green-600 mb-2">{result.metric}</div>
                  <p className="font-semibold text-gray-900 mb-2">{result.label}</p>
                  <p className="text-sm text-gray-600 text-balance">{result.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="bg-green-200 rounded-xl p-6">
              <p className="text-green-800 font-semibold text-lg text-center">
                "Simple didn't just fix our problems - they built us a revenue machine. 
                Now I can predict our numbers 3 months out with 85% accuracy."
              </p>
              <p className="text-green-700 text-center mt-3 font-medium">- Sarah Chen, 6 months later</p>
            </div>
          </div>

          {/* Quick Wins */}
          <div className="bg-blue-50 rounded-2xl p-10 mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                The <span className="text-blue-600">30-Day Quick Wins</span> Every Client Gets
              </h3>
              <p className="text-gray-600 text-lg text-balance">
                These are just the immediate improvements we deliver in the first month:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: "40%", label: "Faster Deal Processing", desc: "CRM cleanup eliminates data chaos" },
                { metric: "25%", label: "More Accurate Forecasting", desc: "Real-time pipeline visibility" }, 
                { metric: "$50K+", label: "Monthly Waste Eliminated", desc: "Kill toxic lead sources immediately" },
                { metric: "2x", label: "Lead Quality Improvement", desc: "AI scoring finds real opportunities" }
              ].map((win, index) => (
                <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg card-hover">
                  <div className="text-3xl font-bold text-blue-600 mb-3">{win.metric}</div>
                  <div className="font-bold text-gray-900 mb-3">{win.label}</div>
                  <p className="text-sm text-gray-600 text-balance">{win.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Social Proof Bar */}
          <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-10 text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {[
                { number: '50+', label: 'Companies Transformed' },
                { number: '$47M+', label: 'Revenue Recovered' },
                { number: '89%', label: 'Hit Growth Targets' }, 
                { number: '45', label: 'Days Avg Payback' }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
            
            <div>
              <p className="text-xl mb-8 font-semibold">
                <strong>Join the Revenue Recovery Revolution</strong>
              </p>
              <button 
                onClick={scrollToContact}
                className="btn-cta text-xl px-12 py-5 shadow-2xl"
              >
                Get Your $2M Recovery Plan →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}