import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Card, CardContent } from "@/components/ui/card";
import { statsData, silosData } from "@/data/content";

export default function Problem() {
  return (
    <Section id="problem">
      <Container>
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Heading level={2} center className="mb-4">
              Revenue teams are misaligned, and it's costing millions.
            </Heading>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Disconnected teams, fragmented data, and misaligned KPIs are silently destroying your growth potential.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {statsData.map((stat, index) => (
              <Card key={index} className="shadow-card hover-lift">
                <CardContent className="p-6 text-center">
                  <div className={`text-3xl lg:text-4xl font-bold mb-2 ${stat.color}`} data-testid={`stat-value-${index}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium" data-testid={`stat-label-${index}`}>
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Silos Grid */}
          <div className="bg-muted/50 rounded-xl p-8 lg:p-12">
            <Heading level={3} center className="mb-12">
              The Cost of Silos
            </Heading>
            <div className="grid md:grid-cols-2 gap-8">
              {silosData.map((silo, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                    {index === 0 && (
                      <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                    {index === 1 && (
                      <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18.364 5.636M5.636 18.364l12.728-12.728" />
                      </svg>
                    )}
                    {index === 2 && (
                      <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                      </svg>
                    )}
                    {index === 3 && (
                      <svg className="w-6 h-6 text-destructive" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2" data-testid={`silo-title-${index}`}>
                      {silo.title}
                    </h4>
                    <p className="text-muted-foreground" data-testid={`silo-description-${index}`}>
                      {silo.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
