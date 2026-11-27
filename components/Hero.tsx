import { profile } from "@/lib/content";
import { Arrow, PenUnderline } from "./Doodles";
import HeroShots from "./HeroShots";
import CvLink from "./CvLink";

const links = [
  { label: "Email me", href: `mailto:${profile.email}` },
  { label: "GitHub", href: profile.github, external: true },
  { label: "LinkedIn", href: profile.linkedin, external: true },
];

export default function Hero() {
  return (
    <section id="top" className="page pb-6 pt-14 sm:pt-24">
      <h1 className="text-[clamp(3.4rem,9vw,6.5rem)] font-medium leading-[0.96] tracking-[-0.038em]">
        Hi, I’m{" "}
        <span className="relative inline-block italic">
          Roger
          <PenUnderline />
        </span>
        .
        <span className="sr-only"> Roger Richard Demello is an AI engineer and software engineer based in India.</span>
      </h1>

      <div className="relative mt-14">
        <div className="max-w-[42rem] space-y-5 text-[1.28rem] leading-[1.6] sm:text-[1.38rem] lg:max-w-[36rem] xl:max-w-[38rem]">
          <p>
            I’m a software engineer in India building machine learning and generative AI systems end to end, from
            Python and TypeScript services to Docker and CI/CD.
          </p>

          <p>
            I’m a Systems Engineer Trainee at Infosys. Before that I interned at Innovun Global, building a bilingual
            RAG assistant for an international NGO, and at AI LifeBOT I built{" "}
            <strong className="font-semibold">3 production apps</strong> for{" "}
            <strong className="font-semibold">500+ users</strong> at{" "}
            <strong className="font-semibold">99.5% uptime</strong>.
          </p>

          <p>
            I’ve just finished my B.Tech, and{" "}
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
          <CvLink variant="ink" />
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
