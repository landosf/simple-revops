import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Hero from "@/components/blocks/hero";
import Problem from "@/components/blocks/problem";
import Solution from "@/components/blocks/solution";
import CaseStudies from "@/components/blocks/case-studies";
import CTA from "@/components/blocks/cta";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <CaseStudies />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
