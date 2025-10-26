import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import StatsSection from "@/components/StatsSection";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <Education />
        <Skills />
        <StatsSection />
        <Projects />
        <Training />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
