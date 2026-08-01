import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BugMascot from "@/components/BugMascot";

/**
 * Sections own their own scroll reveals (header first, then staggered items),
 * so there is no page-level wrapper here - nesting the two would fade every
 * card twice.
 */
export default function Home() {
  return (
    <>
      <Navbar />

      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <Projects />
        <Stack />
        <Experience />
        <Journal />
        <About />
        <Contact />
      </main>

      <Footer />
      <BugMascot />
    </>
  );
}
