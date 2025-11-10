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
import dataQualityImage from '@assets/IMG_6179_1762560235232.jpeg';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <Heading level={2} className="mb-4">The Foundation of Every Great Decision: <span className="text-primary">Data You Can Trust</span></Heading>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Your revenue strategy is only as good as the data behind it. We build systems on six critical pillars that transform raw data into reliable intelligence.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 rounded-2xl p-8 md:p-12 shadow-2xl">
              <img 
                src={dataQualityImage} 
                alt="Data Quality Framework showing six pillars: Data Integrity, Methodological Soundness, Accuracy, Reliability, Serviceability, and Accessibility" 
                className="w-full rounded-lg shadow-lg"
                data-testid="img-data-quality-framework"
              />
              <div className="mt-8 text-center">
                <p className="text-white text-lg leading-relaxed">
                  Every dashboard, report, and insight we deliver is built on these proven data quality principles—ensuring you make confident decisions backed by accurate, accessible intelligence.
                </p>
              </div>
            </div>
          </div>
        </Section>
        
        <Process />
        <Results />
        <Testimonials />
        <CTA />
        <Section padding="small" className="!py-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <Heading level={2} className="mb-4">Book Your Strategy Call</Heading>
              <p className="text-lg text-gray-600">
                choose a time to discuss where you are, where you need to go, and the path to get there.
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
