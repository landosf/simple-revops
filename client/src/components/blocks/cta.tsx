import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function CTA() {
  const openCalendly = () => {
    // In production, this would open Calendly modal or navigate to Calendly page
    window.open('https://calendly.com', '_blank');
  };

  return (
    <Section id="contact" background="primary">
      <Container>
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={2} center className="text-primary-foreground mb-6">
            Ready to unify your revenue ecosystem?
          </Heading>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto">
            Schedule a 30-minute exploration call to discover how we can align your teams and accelerate growth.
          </p>
          
          {/* Calendly Embed Container */}
          <Card className="shadow-2xl">
            <CardContent className="p-6">
              {/* Calendly iframe placeholder - in production, replace with actual Calendly embed */}
              <div className="bg-muted/20 rounded-lg p-12 text-center border-2 border-dashed border-border">
                <svg className="w-16 h-16 text-muted-foreground mb-4 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <Heading level={3} className="mb-2" data-testid="calendly-heading">
                  Calendly Integration
                </Heading>
                <p className="text-muted-foreground mb-6">
                  30-minute exploration call booking widget will be embedded here
                </p>
                {/* 
                  In production, replace the above placeholder with:
                  <iframe 
                    src="https://calendly.com/your-calendly-url" 
                    width="100%" 
                    height="600" 
                    frameBorder="0"
                    title="Schedule a call"
                  ></iframe>
                */}
                
                {/* Fallback CTA Button */}
                <Button 
                  size="lg"
                  onClick={openCalendly}
                  className="px-8 py-4 text-lg shadow-lg"
                  data-testid="button-schedule-now"
                >
                  Schedule Now
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="mt-12 text-center">
            <p className="text-primary-foreground/80 mb-4">Prefer to reach out directly?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="mailto:hello@simplerevenue.com" 
                className="inline-flex items-center text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors"
                data-testid="contact-email"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hello@simplerevenue.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="inline-flex items-center text-primary-foreground hover:text-primary-foreground/80 font-medium transition-colors"
                data-testid="contact-phone"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (555) 123-4567
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
