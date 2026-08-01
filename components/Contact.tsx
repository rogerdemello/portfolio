"use client";
import { FaEnvelope, FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa6";
import Section from "@/components/Section";
import FadeIn from "@/components/FadeIn";

const channels = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "rogerdemello289@gmail.com",
    href: "mailto:rogerdemello289@gmail.com",
    tint: "bg-[#F6ECEA] text-[#9C5544]",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "in/rogerdemello",
    href: "https://linkedin.com/in/rogerdemello",
    tint: "bg-[#EEF1F7] text-[#41597D]",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@rogerdemello",
    href: "https://github.com/rogerdemello",
    tint: "bg-[#EDF2EC] text-[#3F6B4F]",
  },
];

export default function Contact() {
  return (
    <Section id="contact">
      <FadeIn>
      <div className="card overflow-hidden">
        <div className="px-6 py-14 text-center sm:px-10 md:py-20">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-go animate-pulse-dot" />
            Available for work
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl font-display text-[2.1rem] font-extrabold leading-[1.08] track-tighter text-ink sm:text-[2.9rem]">
            Let&rsquo;s build something worth shipping.
          </h2>

          <p className="mx-auto mt-5 max-w-prose text-[1.05rem] leading-relaxed text-ink-muted">
            I&rsquo;m open to AI engineering roles and interesting problems in agents,
            retrieval and ML infrastructure. Email is the fastest way to reach me.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href="mailto:rogerdemello289@gmail.com" className="btn">
              Send an email
              <FaArrowRight size={13} />
            </a>
            <a
              href="/Roger_Demello_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Roger_Demello_CV.pdf"
              className="btn-soft"
            >
              Download CV
            </a>
          </div>
        </div>

        {/* Channels */}
        <div className="grid gap-px border-t border-edge bg-edge sm:grid-cols-3">
          {channels.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-card p-6 transition-colors duration-200 hover:bg-paper-sunk"
              >
                <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-sm ${c.tint}`}>
                  <Icon size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-[0.78rem] font-bold uppercase tracking-wide text-ink-subtle">
                    {c.label}
                  </span>
                  <span className="block truncate text-[0.95rem] font-semibold text-ink">
                    {c.value}
                  </span>
                </span>
                <FaArrowRight
                  size={12}
                  className="ml-auto shrink-0 text-ink-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
            );
          })}
        </div>
      </div>
      </FadeIn>
    </Section>
  );
}
