import Navbar from "../../../components/blocks/Navbar";
import Hero from "../../../components/blocks/Hero";
import Features from "../../../components/blocks/Features";
import Process from "../../../components/blocks/Process";
import Results from "../../../components/blocks/Results";
import Testimonials from "../../../components/blocks/Testimonials";
import CTA from "../../../components/blocks/CTA";
import Footer from "../../../components/blocks/Footer";
import { Section } from "../../../components/ui/section";
import { Heading } from "../../../components/ui/heading";
import { CalendlyWidget } from "../../../components/ui/calendly-widget";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Results />
        <Testimonials />
        <CTA />
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">Book Your Free Strategy Call</Heading>
              <p className="text-lg text-gray-600">
                Choose a time that works for you.
              </p>
            </div>
            <CalendlyWidget />
            <div className="text-center mt-8">
              <p className="text-xl font-semibold text-gray-900 mb-2" data-testid="text-assessment-cta">Get Your Assessment</p>
              <p className="text-gray-500 text-sm" data-testid="text-consultation-details">30-minute consultation • No commitment</p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
