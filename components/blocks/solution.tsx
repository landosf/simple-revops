import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  ];

  return (
    <Section id="solution">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              The 90-Day Revenue <span className="text-blue-600">Recovery System</span>
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <strong>Stop the bleeding in 30 days.</strong> Generate new revenue in 60. 
              Hit predictable growth by day 90. Here's exactly how:
            </p>
          </div>

          {/* Timeline-based approach */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {phases.map((phase, index) => (
              <Card key={index} className={`bg-gradient-to-br ${phase.bgColor} border-t-4 ${phase.borderColor} hover:shadow-xl hover:-translate-y-2 transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="text-sm font-bold text-blue-600 mb-2">{phase.phase}</div>
                  <Heading level={3} className="mb-2 text-gray-900">{phase.title}</Heading>
                  <p className="text-sm text-muted-foreground mb-4">{phase.subtitle}</p>
                  <div className="mb-6">
                    <p className="text-lg font-bold text-green-700 mb-1">{phase.outcome}</p>
                    <p className="text-sm font-semibold text-blue-700">{phase.roi}</p>
                  </div>
                  <div className="space-y-3" data-testid={`phase-actions-${index}`}>
                    {phase.actions.map((action, actionIndex) => (
                      <div key={actionIndex} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 font-bold">✓</span>
                        <span className="text-gray-700 text-sm font-medium">{action}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Success Guarantee Section */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-10 max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <Heading level={3} className="mb-4 text-gray-900">
                The Revenue Recovery <span className="text-blue-600">Guarantee</span>
              </Heading>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">$500K+</div>
                <p className="text-gray-700 font-semibold mb-2">Minimum Revenue Recovery</p>
                <p className="text-sm text-muted-foreground">Or we work for free until you hit it</p>
              </div>
              <div className="bg-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">90</div>
                <p className="text-gray-700 font-semibold mb-2">Days to Results</p>
                <p className="text-sm text-muted-foreground">Predictable growth by day 90 or refund</p>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                <strong>We're so confident in our system</strong>, we guarantee results. 
                If you don't recover at least $500K in found revenue within 90 days, 
                we'll continue working until you do - at no additional cost.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg" data-testid="button-get-guarantee">
                Get Your Guaranteed Recovery Plan →
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
