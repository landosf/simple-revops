'use client'

import { useState } from 'react'

export default function Problem() {
  const [checkedItems, setCheckedItems] = useState(0)

  const diagnosticItems = [
    "Sales complains about 'bad leads' from marketing",
    "You can't predict revenue beyond 30 days", 
    "Customer success discovers problems after they're too late",
    "Your CRM is a data graveyard nobody trusts",
    "Teams hit individual goals but company misses targets",
    "You're using 5+ disconnected revenue tools"
  ]

  const handleCheckboxChange = (checked: boolean) => {
    setCheckedItems(prev => checked ? prev + 1 : prev - 1)
  }

  const getRiskLevel = () => {
    if (checkedItems <= 1) return { level: "Low Risk", cost: "$10K-30K", color: "green" }
    if (checkedItems <= 3) return { level: "High Risk", cost: "$50K-100K", color: "yellow" }
    return { level: "Critical Risk", cost: "$100K-300K", color: "red" }
  }

  const risk = getRiskLevel()

  return (
    <section id="problem" className="section-padding bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container-width">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
              Is your company bleeding <span className="gradient-text">$400K+ annually</span> 
              from these revenue gaps?
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto text-balance">
              <strong className="text-blue-800">Take this 60-second assessment</strong> - if 3+ apply to you, 
              you're in the danger zone and losing serious money every month.
            </p>
          </div>

          {/* Interactive Diagnostic */}
          <div className="bg-white border-2 border-blue-200 rounded-2xl p-8 mb-16 max-w-4xl mx-auto shadow-xl card-hover">
            <h3 className="text-3xl font-bold text-blue-900 mb-8 text-center">
              ⚡ Revenue Leak Diagnostic (60 seconds)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {diagnosticItems.map((item, index) => (
                <label 
                  key={index} 
                  className="flex items-start space-x-4 cursor-pointer p-4 rounded-xl hover:bg-blue-50 border border-gray-200 hover:border-blue-300 transition-all duration-200"
                  data-testid={`checkbox-diagnostic-${index}`}
                >
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-blue-600 rounded mt-1 focus:ring-blue-500" 
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                  />
                  <span className="text-gray-800 font-medium text-balance">{item}</span>
                </label>
              ))}
            </div>
            
            {checkedItems > 0 && (
              <div className={`p-8 rounded-xl border-l-4 ${
                risk.color === 'red' ? 'bg-gradient-to-r from-blue-100 to-purple-100 border-yellow-400' :
                risk.color === 'yellow' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-500' : 
                'bg-gradient-to-r from-green-50 to-emerald-50 border-green-500'
              } animate-fade-in-up`} data-testid="diagnostic-result">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <p className={`font-bold text-2xl mb-2 ${
                      risk.color === 'red' ? 'text-blue-900' :
                      risk.color === 'yellow' ? 'text-yellow-900' : 
                      'text-green-900'
                    }`}>
                      {risk.level}: {risk.cost} Monthly Loss
                    </p>
                    <p className="text-gray-700 text-lg">Based on {checkedItems} critical issues identified</p>
                  </div>
                  <button 
                    onClick={() => {
                      const element = document.getElementById('contact')
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' })
                      }
                    }}
                    className="btn-cta text-lg px-8 py-4"
                    data-testid="button-audit-now"
                  >
                    Get FREE Audit Now →
                  </button>
                </div>
                
                {checkedItems >= 3 && (
                  <div className="bg-gradient-to-r from-yellow-200 to-amber-200 rounded-lg p-6 mt-6 border border-yellow-300" data-testid="urgent-warning">
                    <p className="text-blue-900 font-bold text-center text-lg">
                      ⚡ URGENT: Your revenue operations need immediate attention. 
                      Every day you wait costs your company $5K-15K in lost efficiency.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cost Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              { 
                value: '$1.2T', 
                label: 'Lost annually to revenue misalignment globally', 
                sublabel: "That's $400K per B2B company",
                color: 'gradient-text'
              },
              { 
                value: '91%', 
                label: 'of sales teams missed quota last year', 
                sublabel: 'Average shortfall: 23%',
                color: 'text-blue-600'
              },
              { 
                value: '65%', 
                label: 'of revenue leaders can\'t forecast accurately', 
                sublabel: 'Leading to 40% budget waste',
                color: 'text-purple-600'
              },
              { 
                value: '18x', 
                label: 'ROI from fixing revenue operations', 
                sublabel: 'Average payback: 45 days',
                color: 'text-green-600'
              }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg card-hover" data-testid={`stat-card-${index}`}>
                <div className={`text-4xl font-bold mb-3 ${stat.color}`}>{stat.value}</div>
                <p className="text-gray-700 font-semibold mb-2 text-balance">{stat.label}</p>
                <p className="text-sm text-gray-600 text-balance">{stat.sublabel}</p>
              </div>
            ))}
          </div>

          {/* Revenue Chaos Impact */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-10 border border-blue-100">
            <h3 className="text-3xl font-bold text-center mb-4 text-blue-900">The Daily Cost of Revenue Chaos</h3>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto text-balance">
              Every misaligned handoff, every bad lead, every missed forecast compounds into massive losses
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {[
                { 
                  title: 'Marketing → Sales Misalignment', 
                  cost: '$45K/month',
                  description: 'Unqualified leads waste 40% of sales time. Your reps spend 16 hours weekly on dead-end prospects instead of closing deals.',
                  impact: 'Result: 30% longer sales cycles, 25% lower close rates'
                },
                { 
                  title: 'Sales → Customer Success Handoff Fails', 
                  cost: '$85K/month', 
                  description: 'Poor handoffs lead to 35% higher churn in first 90 days. Customers feel abandoned, expectations unmet.',
                  impact: 'Result: $2.1M annually in preventable churn'
                }
              ].map((problem, index) => (
                <div key={index} className="bg-white border-l-4 border-yellow-400 rounded-xl p-8 shadow-lg" data-testid={`problem-card-${index}`}>
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-blue-900 flex-1">{problem.title}</h4>
                    <span className="bg-gradient-to-r from-yellow-500 to-amber-500 text-gray-900 px-4 py-2 rounded-full text-sm font-bold ml-4">
                      {problem.cost}
                    </span>
                  </div>
                  <p className="text-gray-700 mb-4 text-balance">{problem.description}</p>
                  <p className="text-blue-800 font-semibold text-sm bg-blue-50 p-3 rounded-lg border border-blue-200">
                    {problem.impact}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="hero-gradient text-white rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl" data-testid="total-loss-cta">
                <h4 className="text-3xl font-bold mb-4">Total Monthly Revenue Loss</h4>
                <div className="text-6xl font-bold mb-4 gradient-text">$230K+</div>
                <p className="text-blue-100 mb-6 text-lg">That's $2.76M annually your competition isn't losing</p>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                  className="btn-primary px-8 py-4 text-lg shadow-xl"
                  data-testid="button-stop-bleeding"
                >
                  Stop The Bleeding - Get Free Audit →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}