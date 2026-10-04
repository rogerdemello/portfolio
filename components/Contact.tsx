import { profile } from "@/lib/content";
import CopyEmail from "./CopyEmail";
import LocalTime from "./LocalTime";

export default function Contact() {
  return (
    <section id="contact" className="page pb-24 pt-24 sm:pt-32">
      <h2 className="h2">Say hello</h2>

      <p className="measure mt-5 text-[1.28rem] leading-[1.6]">
        I’m open to full-time roles in AI/ML engineering and software development (SDE). The fastest way to reach me is
        a call.
      </p>

      <p className="mt-8">
        <a
          href={profile.phoneHref}
          className="link text-[clamp(1.9rem,6vw,3rem)] font-medium tracking-[-0.02em]"
        >
          {profile.phone}
        </a>
      </p>

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <a href={profile.phoneHref} className="btn btn-ink">
          Call me <span aria-hidden>→</span>
        </a>
        <a href={profile.cv} target="_blank" rel="noopener noreferrer" download={profile.cvFile} className="btn btn-line">
          Download my CV <span aria-hidden>↓</span>
        </a>
      </div>

      <ul className="mt-10 space-y-1.5 font-sans text-[1.02rem]">
        <li>
          <span className="inline-block w-24 text-muted">Email</span>
          <a href={`mailto:${profile.email}`} className="link break-all">
            {profile.email}
          </a>
          <CopyEmail email={profile.email} />
        </li>
        <li>
          <span className="inline-block w-24 text-muted">LinkedIn</span>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="link">
            {profile.linkedinLabel}
          </a>
        </li>
        <li>
          <span className="inline-block w-24 text-muted">GitHub</span>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="link">
            {profile.githubLabel}
          </a>
        </li>
      </ul>

      <p className="note mb-5 mt-14 inline-block origin-left -rotate-3 text-[2.4rem]" aria-hidden>
        talk soon, Roger
      </p>
      <p className="meta">
        <LocalTime />
      </p>
    </section>
  );
}
