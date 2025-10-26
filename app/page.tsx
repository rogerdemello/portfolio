import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import StatsSection from "@/components/StatsSection";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />
        <FadeIn>
          <Education />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <StatsSection />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Training />
        </FadeIn>
        <FadeIn>
          <Contact />
        </FadeIn>
        <Footer />
      </main>
    </>
  );
}
