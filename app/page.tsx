import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BugMascot from "@/components/BugMascot";

export default function Home() {
  return (
    <>
      <Sidebar />
      <main id="main-content" className="lg:pl-60 relative" tabIndex={-1}>
        <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <Hero />
          <FadeIn><About /></FadeIn>
          <FadeIn><Projects /></FadeIn>
          <FadeIn><Experience /></FadeIn>
          <FadeIn><Journal /></FadeIn>
          <FadeIn><Contact /></FadeIn>
        </div>
        <Footer />
      </main>
      <BugMascot />
    </>
  );
}
