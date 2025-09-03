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
                    <svg className="w-6 h-6 text-destructive" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 9.75L14.25 12 12 14.25 9.75 12 12 9.75z M12 2.25L18.75 9H15.75v4.5h-1.5V9h-2.5v4.5h-1.5V9H6.75L12 2.25z M12 21.75L5.25 15H8.25v-4.5h1.5V15h2.5v-4.5h1.5V15h3L12 21.75z"/>
                    </svg>
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
