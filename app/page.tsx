import MissionBar from "@/components/MissionBar";
import MissionControl from "@/components/MissionControl";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Journal from "@/components/Journal";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FadeIn from "@/components/FadeIn";
import BugMascot from "@/components/BugMascot";

export default function Home() {
  return (
    <>
      <MissionBar />
      <main id="main-content" className="pt-11 relative" tabIndex={-1}>
        <div className="mx-auto max-w-4xl px-4 sm:px-8">
          <MissionControl />
          <FadeIn><Projects /></FadeIn>
          <FadeIn><Stack /></FadeIn>
          <FadeIn><Experience /></FadeIn>
          <FadeIn><Journal /></FadeIn>
          <FadeIn><Contact /></FadeIn>
          <FadeIn><About /></FadeIn>
        </div>
        <Footer />
      </main>
      <BugMascot />
    </>
  );
}
