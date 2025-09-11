import Hero from "../../../components/blocks/Hero";
import Navbar from "../../../components/blocks/Navbar";
import Problem from "../../../components/blocks/Problem";
import Solution from "../../../components/blocks/Solution";
import Results from "../../../components/blocks/Results";
import CTA from "../../../components/blocks/CTA";
import Footer from "../../../components/blocks/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Results />
        <CTA />
      </main>
      <Footer />
    </>
  );
}