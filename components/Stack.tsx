"use client";
import { FaArrowRight } from "react-icons/fa6";
import Section from "@/components/Section";
import SectionHeader from "@/components/SectionHeader";
import FadeIn from "@/components/FadeIn";
import { techIcon } from "@/lib/techIcons";
import { CODING_PROFILES } from "@/lib/profiles";

const groups = [
  {
    label: "Languages",
    tint: "bg-[#EDF2EC] text-[#3F6B4F]",
    items: ["Python", "TypeScript", "C++", "Java", "C", "SQL"],
  },
  {
    label: "Agentic & GenAI",
    tint: "bg-[#F6ECEA] text-[#9C5544]",
    items: ["RAG Pipelines", "Multi-Agent Systems", "LangChain", "LangGraph", "Prompt Engineering", "Semantic Search", "Azure OpenAI", "Hugging Face"],
  },
  {
    label: "Machine Learning",
    tint: "bg-[#EEF1F7] text-[#41597D]",
    items: ["Scikit-learn", "PyTorch", "XGBoost", "Anomaly Detection", "NumPy", "Pandas", "Model Evaluation"],
  },
  {
    label: "Data & Vector Stores",
    tint: "bg-[#F7EFE6] text-[#8A6238]",
    items: ["FAISS", "Pinecone", "ChromaDB", "PostgreSQL", "Supabase", "Redis", "MLflow"],
  },
  {
    label: "Backend & Frontend",
    tint: "bg-[#EFEDF6] text-[#5B5279]",
    items: ["FastAPI", "Flask", "Node.js", "Express", "REST APIs", "Next.js", "React", "Tailwind CSS"],
  },
  {
    label: "DevOps & Cloud",
    tint: "bg-[#E8F1F0] text-[#3A6B63]",
    items: ["Docker", "CI/CD", "AWS", "Vercel", "Render", "Git", "GitHub", "Linux"],
  },
];

export default function Stack() {
  return (
    <Section id="stack">
      <SectionHeader
        eyebrow="Toolkit"
        title={<>The tools I reach for.</>}
        description="Chosen because they ship reliably, not because they're trending."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g, i) => (
          <FadeIn key={g.label} delay={Math.min(i, 3) * 70} className="h-full">
            <div className="card card-hover h-full p-6">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="font-display text-[1.1rem] font-bold text-ink">{g.label}</h3>
                <span className={`rounded-full px-2.5 py-1 text-[0.72rem] font-bold ${g.tint}`}>
                  {g.items.length}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((item) => {
                  const Icon = techIcon(item);
                  return (
                    <span key={item} className="pill">
                      {Icon && <Icon size={14} className="shrink-0" aria-hidden />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Competitive programming */}
      <div className="mt-14">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="font-display text-[1.35rem] font-extrabold track-tight text-ink">
            Where I practise
          </h3>
          <p className="text-[0.95rem] text-ink-muted">
            Data structures and algorithms, kept sharp.
          </p>
        </div>

        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {CODING_PROFILES.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeIn key={p.name} delay={i * 70} className="h-full">
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card card-hover group flex h-full items-center gap-4 p-5"
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-sm ${p.tint}`}>
                  <Icon size={20} />
                </span>

                <span className="min-w-0">
                  <span className="block font-display text-[1.02rem] font-bold text-ink">
                    {p.name}
                  </span>
                  <span className="block truncate text-[0.87rem] text-ink-subtle">
                    @{p.handle}
                  </span>
                </span>

                <FaArrowRight
                  size={12}
                  className="ml-auto shrink-0 text-ink-subtle transition-transform duration-200 group-hover:translate-x-1 group-hover:text-accent"
                />
              </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
