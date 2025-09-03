import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { solutionPillars } from "@/data/content";

export default function Solution() {
  return (
    <Section id="solution" background="muted">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level={2} center className="mb-4">
              The Solution: Unified Revenue Operations
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our three-pillar approach transforms fragmented teams into a cohesive revenue engine.
            </p>
          </div>

          {/* Solution Pillars */}
          <div className="grid lg:grid-cols-3 gap-8">
            {solutionPillars.map((pillar, index) => (
              <Card key={index} className="shadow-card hover-lift">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${pillar.iconBg} rounded-lg flex items-center justify-center mb-6 mx-auto`}>
                    <svg className={`w-8 h-8 ${pillar.iconColor}`} fill="currentColor" viewBox="0 0 24 24">
                      <path d={pillar.iconPath} />
                    </svg>
                  </div>
                  <Heading level={3} center className="mb-4" data-testid={`pillar-title-${index}`}>
                    {pillar.title}
                  </Heading>
                  <ul className="space-y-3 text-muted-foreground">
                    {pillar.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-emerald-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span data-testid={`pillar-feature-${index}-${featureIndex}`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
