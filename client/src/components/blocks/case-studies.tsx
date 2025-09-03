import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { caseStudyData } from "@/data/content";

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
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level={2} center className="mb-4">
              Proven Results
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we've transformed revenue operations for forward-thinking companies.
            </p>
          </div>

          {/* Case Study Card */}
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 border border-border rounded-2xl p-8 lg:p-12 shadow-card">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* Company Logo */}
                <Card className="mb-6 inline-block shadow-soft">
                  <CardContent className="p-6">
                    <span className="text-2xl font-bold text-primary" data-testid="case-study-client-name">
                      {caseStudyData.clientName}
                    </span>
                  </CardContent>
                </Card>
                
                <Heading level={3} className="mb-4" data-testid="case-study-headline">
                  {caseStudyData.headline}
                </Heading>
                
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed" data-testid="case-study-description">
                  {caseStudyData.description}
                </p>
                
                <button 
                  onClick={scrollToContact}
                  className="inline-flex items-center text-primary hover:text-primary/80 font-semibold transition-colors"
                  data-testid="button-read-case-study"
                >
                  Read Full Case Study
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {caseStudyData.results.map((result, index) => (
                  <Card key={index} className="shadow-soft">
                    <CardContent className="p-6 text-center">
                      <div className={`text-3xl font-bold mb-2 ${result.color}`} data-testid={`result-value-${index}`}>
                        {result.value}
                      </div>
                      <div className="text-sm text-muted-foreground font-medium" data-testid={`result-metric-${index}`}>
                        {result.metric}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
