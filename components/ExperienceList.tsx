"use client";
import { useState, type ReactNode } from "react";
import type { Role } from "@/lib/content";
import Figures from "./Figures";

/**
 * Each role shows the three lines that matter; click it to read the full account.
 * The details stay in the page (just collapsed and hidden from tab order), so nothing is lost to crawlers.
 */
export default function ExperienceList({ items }: { items: { role: Role; tools: ReactNode }[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <ol className="mt-12 border-t border-ink/[0.14]">
      {items.map(({ role: r, tools }) => {
        const isOpen = open === r.company;
        const id = `role-${r.company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
        return (
          <li key={r.company} className="border-b border-ink/[0.14]">
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={id}
              onClick={() => setOpen(isOpen ? null : r.company)}
              className="group grid w-full gap-x-10 gap-y-2 py-9 text-left md:grid-cols-[10.5rem_1fr]"
            >
              <span className="meta block md:pt-2.5">
                <span className="block font-semibold text-ink">{r.period}</span>
                {r.place && <span className="block">{r.place}</span>}
                {r.current && <span className="note mt-1 block -rotate-2 text-[1.3rem]">that’s now</span>}
              </span>

              <span className="block max-w-[40rem]">
                <span className="flex items-start justify-between gap-4">
                  <span className="block text-[1.65rem] font-medium leading-tight tracking-[-0.02em]">
                    {r.company}
                    <span className="font-normal text-muted"> · {r.role}</span>
                  </span>
                  <span
                    aria-hidden
                    className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-md border border-ink/30 font-sans text-lg leading-none transition-colors group-hover:bg-ink group-hover:text-paper"
                  >
                    {isOpen ? "−" : "+"}
                  </span>
                </span>

                <span className="mt-3 block space-y-1.5 text-[1.08rem] leading-[1.5] text-ink/85">
                  {r.summary.map((line) => (
                    <span key={line} className="flex gap-3">
                      <span aria-hidden className="text-pen">
                        →
                      </span>
                      <span>
                        <Figures text={line} />
                      </span>
                    </span>
                  ))}
                </span>

                <span className="mt-3 block font-sans text-[0.86rem] font-semibold text-pen">
                  {isOpen ? "Hide the full experience" : "Read the full experience"}
                </span>
              </span>
            </button>

            <div
              id={id}
              role="region"
              aria-label={`${r.company}, full experience`}
              className={`grid ${
                isOpen
                  ? "visible grid-rows-[1fr] [transition:grid-template-rows_0.3s_ease,visibility_0s]"
                  : "invisible grid-rows-[0fr] [transition:grid-template-rows_0.3s_ease,visibility_0s_linear_0.3s]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid gap-x-10 gap-y-5 pb-10 md:grid-cols-[10.5rem_1fr]">
                  <span aria-hidden className="hidden md:block" />
                  <div className="max-w-[40rem]">
                    <ul className="list-disc space-y-2.5 pl-5 text-[1.08rem] leading-[1.55] marker:text-pen">
                      {r.details.map((d) => (
                        <li key={d}>
                          <Figures text={d} />
                        </li>
                      ))}
                    </ul>
                    <p className="meta mt-6 font-semibold text-ink">Worked with</p>
                    <div className="mt-2">{tools}</div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
