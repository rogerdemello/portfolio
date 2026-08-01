"use client";
import { FaArrowRight, FaDownload } from "react-icons/fa6";
import { FaRobot, FaSearch, FaLayerGroup } from "react-icons/fa";
import { techIcon } from "@/lib/techIcons";

const building = [
  {
    icon: FaRobot,
    tint: "bg-[#EDF2EC] text-[#3F6B4F]",
    label: "Autonomous Agents",
    note: "Tool-using and goal-driven",
  },
  {
    icon: FaSearch,
    tint: "bg-[#EEF1F7] text-[#41597D]",
    label: "Retrieval Systems",
    note: "RAG that actually retrieves",
  },
  {
    icon: FaLayerGroup,
    tint: "bg-[#F7EFE6] text-[#8A6238]",
    label: "ML Infrastructure",
    note: "Training through to serving",
  },
];

const metrics = [
  { value: "3", label: "Production apps" },
  { value: "200+", label: "Users served" },
  { value: "35%", label: "Lower latency" },
  { value: "99.5%", label: "Uptime" },
];

// Logos shown in the "working with" strip.
const marquee = [
  "Python", "PyTorch", "FastAPI", "LangChain", "Next.js",
  "PostgreSQL", "Docker", "AWS", "Redis", "TypeScript",
];

export default function Hero() {
  return (
    <section id="home" className="scroll-mt-24 bg-paper pt-28 md:pt-36">
      <div className="mx-auto max-w-content px-5 sm:px-6">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          {/* Copy */}
          <div className="lg:col-span-6">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-go animate-pulse-dot" />
              Available for AI engineering roles
            </span>

            <h1 className="mt-6 font-display text-[2.7rem] font-extrabold leading-[1.03] track-tighter text-ink sm:text-[3.6rem] lg:text-[4rem]">
              I build AI systems
              <br />
              that actually{" "}
              <span className="relative whitespace-nowrap text-accent">
                ship
                {/* Hand-drawn underline rather than a highlight block. */}
                <svg
                  aria-hidden
                  viewBox="0 0 200 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-1.5 left-0 h-3 w-full text-accent/35"
                >
                  <path
                    d="M2 11c38-6 78-8 118-7 26 1 52 3 78 8"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>

            <p className="mt-7 max-w-prose text-[1.075rem] leading-relaxed text-ink-muted">
              AI Engineer focused on agents, retrieval and real-world systems.
              Shipped to 200&#43; users, benchmarked honestly, and built to run
              without a pile of external services.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#projects" className="btn">
                See my work
                <FaArrowRight size={13} />
              </a>
              <a
                href="/Roger_Demello_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Roger_Demello_CV.pdf"
                className="btn-soft"
              >
                <FaDownload size={13} />
                Download CV
              </a>
            </div>

            <p className="mt-7 text-sm text-ink-subtle">
              B.Tech graduate · Nagpur, India · Open to remote
            </p>
          </div>

          {/* Visual: a stack of real content presented as cards */}
          <div className="relative lg:col-span-6">
            {/* Soft tinted plate behind the stack - depth without a gradient. */}
            <div
              aria-hidden
              className="absolute -inset-3 -rotate-2 rounded-lg bg-accent-soft/70 sm:-inset-4"
            />

            <div className="relative space-y-4">
              <div className="card p-6">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
                  <p className="text-[0.8rem] font-bold uppercase tracking-wider text-ink-subtle">
                    Currently building
                  </p>
                </div>

                <ul className="mt-5 space-y-4">
                  {building.map((b) => {
                    const Icon = b.icon;
                    return (
                      <li key={b.label} className="flex items-center gap-4">
                        <span
                          className={`grid h-11 w-11 shrink-0 place-items-center rounded-sm ${b.tint}`}
                        >
                          <Icon size={17} />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-display text-[1.02rem] font-bold text-ink">
                            {b.label}
                          </span>
                          <span className="block text-sm text-ink-subtle">{b.note}</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="card grid grid-cols-2 gap-px overflow-hidden bg-edge sm:grid-cols-4">
                {metrics.map((m) => (
                  <div key={m.label} className="bg-card px-4 py-5 text-center">
                    <p className="font-display text-2xl font-extrabold track-tight text-ink">
                      {m.value}
                    </p>
                    <p className="mt-1 text-[0.72rem] font-semibold uppercase tracking-wide text-ink-subtle">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Logo strip */}
        <div className="mt-20 border-t border-edge py-10 md:mt-28">
          <p className="text-center text-[0.78rem] font-bold uppercase tracking-[0.14em] text-ink-subtle">
            Working with
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-9 gap-y-6">
            {marquee.map((name) => {
              const Icon = techIcon(name);
              if (!Icon) return null;
              return (
                <span
                  key={name}
                  title={name}
                  className="flex items-center gap-2 text-ink-subtle transition-colors duration-200 hover:text-ink"
                >
                  <Icon size={22} />
                  <span className="text-sm font-semibold">{name}</span>
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
