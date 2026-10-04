import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1} className="outline-none">
        <Hero />
        <Skills />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
