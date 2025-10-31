import Hero from "@/components/Hero";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import StatsSection from "@/components/StatsSection";
import Training from "@/components/Training";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import MobileNav from "@/components/MobileNav";
import BackToTop from "@/components/BackToTop";
import ParticleBackground from "@/components/ParticleBackground";
import GitHubStats from "@/components/GitHubStats";

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <MobileNav />
      <main className="min-h-screen relative z-20">
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
          <GitHubStats />
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
      <BackToTop />
    </>
  );
}
