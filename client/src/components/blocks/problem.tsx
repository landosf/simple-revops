"use client";
import { useState } from 'react';
import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Problem() {
  const [checkedItems, setCheckedItems] = useState(0);

  const diagnosticItems = [
    "Sales complains about 'bad leads' from marketing",
    "You can't predict revenue beyond 30 days",
    "Customer success discovers problems after they're too late",
    "Your CRM is a data graveyard nobody trusts",
    "Teams hit individual goals but company misses targets",
    "You're using 5+ disconnected revenue tools"
  ];

  const handleCheckboxChange = (checked: boolean) => {
    setCheckedItems(prev => checked ? prev + 1 : prev - 1);
  };

  const getRiskLevel = () => {
    if (checkedItems <= 1) return { level: "Low Risk", cost: "$10K-30K", color: "green" };
    if (checkedItems <= 3) return { level: "High Risk", cost: "$50K-100K", color: "yellow" };
    return { level: "Critical Risk", cost: "$100K-300K", color: "red" };
  };

  const risk = getRiskLevel();

  return (
    <Section id="problem">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              Is your company bleeding <span className="text-red-600">$400K+ annually</span> 
              from these revenue gaps?
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <strong>Take this 60-second assessment</strong> - if 3+ apply to you, 
              you're in the danger zone and losing serious money every month.
            </p>
          </div>

          {/* Interactive Diagnostic */}
          <div className="bg-white border-2 border-red-200 rounded-2xl p-8 mb-12 max-w-4xl mx-auto shadow-lg">
            <h3 className="text-2xl font-bold text-red-900 mb-6 text-center">
              🚨 Revenue Leak Diagnostic (60 seconds)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {diagnosticItems.map((item, index) => (
                <label key={index} className="flex items-start space-x-3 cursor-pointer p-4 rounded-lg hover:bg-gray-50 border border-gray-200" data-testid={`checkbox-diagnostic-${index}`}>
                  <input 
                    type="checkbox" 
                    className="w-5 h-5 text-red-600 rounded mt-1" 
                    onChange={(e) => handleCheckboxChange(e.target.checked)}
                  />
                  <span className="text-gray-800 font-medium">{item}</span>
                </label>
              ))}
            </div>
            
            {checkedItems > 0 && (
              <div className={`mt-6 p-6 rounded-xl border-l-4 ${
                risk.color === 'red' ? 'bg-red-100 border-red-500' :
                risk.color === 'yellow' ? 'bg-yellow-100 border-yellow-500' : 
                'bg-green-100 border-green-500'
              }`} data-testid="diagnostic-result">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className={`font-bold text-xl ${
                      risk.color === 'red' ? 'text-red-900' :
                      risk.color === 'yellow' ? 'text-yellow-900' : 
                      'text-green-900'
                    }`} data-testid="risk-level">
                      {risk.level}: {risk.cost} Monthly Loss
                    </p>
                    <p className="text-gray-600">Based on {checkedItems} critical issues identified</p>
                  </div>
                  <Button className="bg-red-600 hover:bg-red-700 text-white" data-testid="button-get-audit">
                    Get FREE Audit Now →
                  </Button>
                </div>
                
                {checkedItems >= 3 && (
                  <div className="bg-red-200 rounded-lg p-4 mt-4">
                    <p className="text-red-900 font-bold text-center">
                      🚨 URGENT: Your revenue operations need immediate attention. 
                      Every day you wait costs your company $5K-15K in lost efficiency.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Cost Amplification Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              { value: '$1.2T', label: 'Lost annually to revenue misalignment globally', subtext: "That's $400K per B2B company", color: 'text-red-600' },
              { value: '91%', label: 'of sales teams missed quota last year', subtext: 'Average shortfall: 23%', color: 'text-red-600' },
              { value: '65%', label: 'of revenue leaders can\'t forecast accurately', subtext: 'Leading to 40% budget waste', color: 'text-red-600' },
              { value: '18x', label: 'ROI from fixing revenue operations', subtext: 'Average payback: 45 days', color: 'text-green-600' }
            ].map((stat, index) => (
              <Card key={index} className="hover:scale-105 transition-transform">
                <CardContent className="p-6 text-center">
                  <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                  <p className="text-gray-700 font-semibold mb-2">{stat.label}</p>
                  <p className="text-sm text-gray-500">{stat.subtext}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* The Cost of Silos - Enhanced */}
          <div className="mb-16">
            <Heading level={3} className="text-center mb-4">The Daily Cost of Revenue Chaos</Heading>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Every misaligned handoff, every bad lead, every missed forecast compounds into massive losses
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                },
                { 
                  title: 'Forecasting & Finance Disconnects', 
                  cost: '$65K/month',
                  description: 'Inaccurate forecasts cause over-hiring, under-resourcing, and missed growth opportunities.',
                  impact: 'Result: 45% budget inefficiency, stunted growth'
                },
                { 
                  title: 'Technology Stack Chaos', 
                  cost: '$35K/month',
                  description: 'Data scattered across 8+ tools. Teams waste 12 hours weekly on manual reporting and data entry.',
                  impact: 'Result: Decisions made on outdated, incomplete data'
                }
              ].map((silo, index) => (
                <div key={index} className="bg-gradient-to-r from-amber-50 to-red-50 border-l-4 border-red-500 p-8 rounded-xl shadow-lg">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold text-red-900">{silo.title}</h4>
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">{silo.cost}</span>
                  </div>
                  <p className="text-red-800 mb-3">{silo.description}</p>
                  <p className="text-red-700 font-semibold text-sm bg-red-100 p-2 rounded">{silo.impact}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <div className="bg-red-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">Total Monthly Revenue Loss</h3>
                <div className="text-5xl font-bold mb-4">$230K+</div>
                <p className="text-red-100 mb-6">That's $2.76M annually your competition isn't losing</p>
                <Button className="bg-white text-red-600 hover:bg-gray-100" data-testid="button-stop-bleeding">
                  Stop The Bleeding - Get Free Audit →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
