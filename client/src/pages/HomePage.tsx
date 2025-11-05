import Navbar from "../../../components/blocks/Navbar";
import Hero from "../../../components/blocks/Hero";
import Features from "../../../components/blocks/Features";
import Process from "../../../components/blocks/Process";
import Results from "../../../components/blocks/Results";
import Testimonials from "../../../components/blocks/Testimonials";
import CTA from "../../../components/blocks/CTA";
import Footer from "../../../components/blocks/Footer";

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
      </main>
      <Footer />
    </div>
  );
}
