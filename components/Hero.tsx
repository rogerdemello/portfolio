import { profile } from "@/lib/content";
import { Arrow } from "./Doodles";
import HeroShots from "./HeroShots";

const links = [
  { label: "Email me", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
];

export default function Hero() {
  return (
    <section id="top" className="page pb-6 pt-14 sm:pt-24">
      <h1 className="text-[clamp(3.4rem,9vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.038em]">Hi, I&apos;m Roger.</h1>

      <div className="relative mt-9">
        <div className="max-w-[42rem] space-y-5 text-[1.28rem] leading-[1.6] sm:text-[1.38rem] lg:max-w-[36rem] xl:max-w-[38rem]">
          <p>
            I&apos;m a software engineer in Nagpur, India. I build machine learning and generative AI systems end to
            end: Python and TypeScript services over PostgreSQL, shipped in Docker through CI/CD.
          </p>

          <p>
            Right now I&apos;m an AI engineer intern at Innovun Global, working remotely on the retrieval pipeline
            and prompts behind a live RAG agent for the Red Cross in Mexico. Before that I spent six months at AI
            LifeBOT, where I engineered <strong className="font-semibold">3 production apps</strong> for{" "}
            <strong className="font-semibold">200+ users</strong> and kept them at{" "}
            <strong className="font-semibold">99.5% uptime</strong>.
          </p>

          <p>
            I&apos;ve just finished my B.Tech, and{" "}
            <mark className="marker relative">
              I can start immediately
              {/* margin note under the phrase, wide screens only */}
              <span aria-hidden className="pointer-events-none absolute left-[22%] top-full mt-0.5 hidden items-start gap-1 lg:flex">
                <Arrow kind="up-left" className="h-9 w-14 shrink-0" />
                <span className="note mt-5 inline-block -rotate-2 whitespace-nowrap">start date: whenever you need</span>
              </span>
            </mark>
            , in any timezone.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4 lg:mt-14">
          <a href={profile.cv} target="_blank" rel="noopener noreferrer" download={profile.cvFile} className="btn btn-ink">
            Download my CV <span aria-hidden>↓</span>
          </a>
          <p className="flex flex-wrap gap-x-5 gap-y-1 font-sans text-[0.98rem]">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="link"
              >
                {l.label}
                {l.external && <span aria-hidden> ↗</span>}
              </a>
            ))}
          </p>
        </div>

        <HeroShots />
      </div>
    </section>
  );
}
