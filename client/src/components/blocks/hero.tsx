import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";
import backgroundImage from "@assets/generated_images/Minimalist_business_background_76510443.png";

export default function Hero() {
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

  const scrollToProblem = () => {
    const element = document.getElementById('problem');
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Heading level={1} center className="mb-6">
            Align your revenue ecosystem.{" "}
            <span className="gradient-text">Drive measurable growth.</span>
          </Heading>
          
          <p className="text-xl lg:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Break down silos between sales, marketing, customer success, and finance. 
            Transform fragmented teams into a unified revenue machine.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="px-8 py-4 text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              data-testid="button-schedule-call"
            >
              Schedule Exploration Call
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToProblem}
              className="px-8 py-4 text-lg transition-all duration-200"
              data-testid="button-learn-more"
            >
              Learn More
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
