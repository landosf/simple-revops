import { Section } from "@/components/ui/section";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { Button } from "@/components/ui/button";

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
    <Section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-blue-800"></div>
      
      <Container className="relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="bg-yellow-400 text-black px-6 py-2 rounded-full inline-block mb-6 font-bold text-lg animate-pulse">
            🔥 FREE Revenue Audit (Worth $5K) - Limited Time
          </div>

          <Heading level={1} className="text-white mb-6 leading-tight">
            Turn revenue chaos into<br/>
            <span className="text-yellow-300">$2M+ growth in 90 days</span>
          </Heading>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-4xl mx-auto leading-relaxed">
            <strong>Your revenue teams are burning $50K+ monthly</strong> on misaligned efforts. 
            We've helped 50+ B2B companies recover this waste and turn it into predictable growth.
          </p>
          
          <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-yellow-300">126%</div>
                <div className="text-sm text-gray-300">Avg Pipeline Boost</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">90</div>
                <div className="text-sm text-gray-300">Days to Results</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-yellow-300">$2.1M</div>
                <div className="text-sm text-gray-300">Avg Revenue Added</div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="bg-red-600 hover:bg-red-700 text-white shadow-lg px-8 py-4 text-lg"
              data-testid="button-free-audit"
            >
              Get Your Revenue Audit (FREE) →
            </Button>
            <Button 
              variant="outline"
              size="lg"
              onClick={scrollToProblem}
              className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg"
              data-testid="button-case-study"
            >
              See $2.6M Recovery Story →
            </Button>
          </div>
          
          <div className="animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
