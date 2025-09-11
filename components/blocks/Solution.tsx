'use client'

export default function Solution() {
  const phases = [
    {
      phase: "Days 1-30",
      title: "EMERGENCY RECOVERY",
      subtitle: "Stop the bleeding immediately",
      outcome: "Save $50K+ monthly waste",
      roi: "ROI: 300% in first month",
      actions: [
        "Emergency CRM cleanup (immediate 15% efficiency gain)",
        "Kill toxic lead sources costing you $10K+/month", 
        "Fix critical handoff failures losing 30% of deals",
        "Install revenue tracking you can actually trust"
      ],
      color: "red",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-500"
    },
    {
      phase: "Days 31-60", 
      title: "GROWTH ACCELERATION",
      subtitle: "Turn recovery into revenue generation",
      outcome: "Generate $150K+ new pipeline", 
      roi: "ROI: 400% by month two",
      actions: [
        "Deploy AI lead scoring (2x qualification rates)",
        "Launch predictive forecasting (79% accuracy)",
        "Activate attribution tracking (find hidden winners)",
        "Align teams on unified KPIs (end the blame game)"
      ],
      color: "yellow",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-500"  
    },
    {
      phase: "Days 61-90",
      title: "SCALE & OPTIMIZE", 
      subtitle: "Hit predictable growth targets",
      outcome: "Achieve $500K+ growth velocity",
      roi: "ROI: 600%+ ongoing",
      actions: [
        "Implement ICP-driven targeting (50% shorter cycles)",
        "Optimize funnel conversion (25% lift minimum)", 
        "Scale winning channels (double down on ROI)",
        "Build repeatable growth systems (set & forget)"
      ],
      color: "green",
      bgColor: "from-green-50 to-green-100", 
      borderColor: "border-green-500"
    }
  ]

  return (
    <section id="solution" className="section-padding bg-white">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              The 90-Day Revenue <span className="gradient-text">Recovery System</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto text-balance">
              <strong>Stop the bleeding in 30 days.</strong> Generate new revenue in 60. 
              Hit predictable growth by day 90. Here's exactly how:
            </p>
          </div>

          {/* Timeline Phases */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${phase.bgColor} border-t-4 ${phase.borderColor} rounded-2xl p-8 card-hover shadow-lg`}
              >
                <div className="text-sm font-bold text-blue-600 mb-2">{phase.phase}</div>
                <h3 className="text-2xl font-bold mb-2 text-gray-900">{phase.title}</h3>
                <p className="text-gray-600 mb-6 text-balance">{phase.subtitle}</p>
                
                <div className="mb-8">
                  <p className="text-lg font-bold text-green-700 mb-1">{phase.outcome}</p>
                  <p className="text-sm font-semibold text-blue-700">{phase.roi}</p>
                </div>
                
                <div className="space-y-4">
                  {phase.actions.map((action, actionIndex) => (
                    <div key={actionIndex} className="flex items-start gap-3">
                      <span className="text-green-500 font-bold text-lg mt-1 flex-shrink-0">✓</span>
                      <span className="text-gray-700 text-sm font-medium text-balance">{action}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Success Guarantee */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-10 max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-gray-900">
                The Revenue Recovery <span className="gradient-text">Guarantee</span>
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-3">$500K+</div>
                <p className="text-gray-700 font-semibold mb-2 text-lg">Minimum Revenue Recovery</p>
                <p className="text-gray-500">Or we work for free until you hit it</p>
              </div>
              <div className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="text-5xl font-bold text-green-600 mb-3">90</div>
                <p className="text-gray-700 font-semibold mb-2 text-lg">Days to Results</p>
                <p className="text-gray-500">Predictable growth by day 90 or refund</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto text-lg text-balance">
                <strong>We're so confident in our system</strong>, we guarantee results. 
                If you don't recover at least $500K in found revenue within 90 days, 
                we'll continue working until you do - at no additional cost.
              </p>
              <button 
                onClick={() => {
                  const element = document.getElementById('contact')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary text-xl px-12 py-5 shadow-xl"
              >
                Get Your Guaranteed Recovery Plan →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}