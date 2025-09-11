import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function CaseStudies() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="case-studies">
      <Container>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Heading level={2} className="mb-6">
              From Revenue Chaos to <span className="text-green-600">$2M+ Growth Stories</span>
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              <strong>Real companies. Real transformations.</strong> See how we turned their revenue bleeding into predictable growth machines.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {/* Featured Case Study - Shastic */}
            <Card className="bg-gradient-to-br from-green-50 to-green-100 border-l-6 border-green-500 p-10 rounded-2xl">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <Heading level={3} className="mb-2">Shastic (B2B SaaS)</Heading>
                  <p className="text-muted-foreground font-semibold text-lg">$2.1M ARR → $4.7M ARR in 8 months</p>
                </div>
                <div className="text-right text-sm text-muted-foreground">
                  <div className="bg-red-100 text-red-700 px-2 py-1 rounded mb-1">BEFORE: Chaotic revenue ops</div>
                  <div className="bg-green-100 text-green-700 px-2 py-1 rounded">AFTER: Predictable growth machine</div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 mb-6">
                <h4 className="font-bold text-gray-900 mb-3">The Problem:</h4>
                <p className="text-muted-foreground mb-4">
                  "Our sales team was drowning in unqualified leads. Marketing blamed sales for not closing. 
                  Customer success was finding out about churn after customers had already left. 
                  <strong className="text-red-600">We were burning $80K monthly</strong> on revenue inefficiency."
                </p>
                <p className="text-sm text-muted-foreground italic">- Sarah Chen, VP Revenue Operations</p>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">126%</div>
                  <p className="text-sm text-muted-foreground">Pipeline Growth</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">95%</div>
                  <p className="text-sm text-muted-foreground">More MQLs</p>
                </div>
                <div className="text-center bg-white rounded-lg p-4">
                  <div className="text-3xl font-bold text-green-600 mb-1">$2.6M</div>
                  <p className="text-sm text-muted-foreground">Added ARR</p>
                </div>
              </div>
              
              <div className="bg-green-100 rounded-lg p-4">
                <p className="text-green-800 font-semibold">
                  "Simple didn't just fix our problems - they built us a revenue machine. 
                  Now I can predict our numbers 3 months out with 85% accuracy."
                </p>
                <p className="text-sm text-green-700 mt-2">- Sarah Chen, 6 months later</p>
              </div>
            </Card>

            {/* Quick Wins Section */}
            <div className="bg-blue-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <Heading level={3} className="mb-4">
                  The <span className="text-blue-600">30-Day Quick Wins</span> Every Client Gets
                </Heading>
                <p className="text-muted-foreground">These are just the immediate improvements we deliver in the first month:</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { metric: "40%", label: "Faster Deal Processing", desc: "CRM cleanup eliminates data chaos" },
                  { metric: "25%", label: "More Accurate Forecasting", desc: "Real-time pipeline visibility" },
                  { metric: "$50K+", label: "Monthly Waste Eliminated", desc: "Kill toxic lead sources immediately" },
                  { metric: "2x", label: "Lead Quality Improvement", desc: "AI scoring finds real opportunities" }
                ].map((win, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">{win.metric}</div>
                    <div className="font-semibold text-gray-900 mb-2">{win.label}</div>
                    <p className="text-sm text-muted-foreground">{win.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Proof Bar */}
            <div className="bg-gradient-to-r from-gray-900 to-blue-900 text-white rounded-2xl p-8 text-center">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <p className="text-gray-300">Companies Transformed</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$47M+</div>
                  <p className="text-gray-300">Revenue Recovered</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">89%</div>
                  <p className="text-gray-300">Hit Growth Targets</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">45</div>
                  <p className="text-gray-300">Days Avg Payback</p>
                </div>
              </div>
              <div className="mt-8">
                <p className="text-xl mb-6">
                  <strong>Join the Revenue Recovery Revolution</strong>
                </p>
                <Button 
                  onClick={scrollToContact}
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg" 
                  data-testid="button-join-revolution"
                >
                  Get Your $2M Recovery Plan →
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
