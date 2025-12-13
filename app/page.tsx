import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
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
          <About />
        </FadeIn>
        <FadeIn>
          <Skills />
        </FadeIn>
        <FadeIn>
          <Projects />
        </FadeIn>
        <FadeIn>
          <Experience />
        </FadeIn>
        <FadeIn>
          <GitHubStats />
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
