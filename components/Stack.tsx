"use client";

const groups = [
  { label: "Languages", items: ["Python", "C++", "Java", "SQL"] },
  { label: "AI & ML", items: ["LLMs", "RAG", "Agents", "LangChain", "LlamaIndex", "OpenAI API", "Hugging Face", "TensorFlow", "PyTorch", "Scikit-learn"] },
  { label: "Backend", items: ["FastAPI", "Flask", "REST APIs", "Async", "Microservices"] },
  { label: "Data", items: ["PostgreSQL", "MongoDB", "Vector DBs", "Pandas", "NumPy"] },
  { label: "Cloud & Tools", items: ["AWS", "Docker", "Git", "CI/CD", "Linux"] },
];

export default function Stack() {
  return (
    <section id="stack" className="py-20 md:py-28 border-t border-card-border">
      <div className="flex items-baseline gap-2.5">
        <span className="font-mono text-sm text-accent">03</span>
        <span className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/40">Stack</span>
      </div>
      <h2 className="font-display text-5xl sm:text-6xl text-foreground mt-3 mb-3 leading-none">
        Toolkit
      </h2>
      <p className="text-foreground/60 mb-10 max-w-lg">What I reach for - chosen because it ships, not because it&apos;s trendy.</p>

      <dl className="divide-y divide-card-border border-y border-card-border">
        {groups.map((g) => (
          <div key={g.label} className="grid sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-5">
            <dt className="font-mono text-xs uppercase tracking-[0.16em] text-foreground/45 sm:pt-1">{g.label}</dt>
            <dd className="flex flex-wrap gap-x-2 gap-y-1.5">
              {g.items.map((item, i) => (
                <span key={item} className="text-foreground/85">
                  {item}
                  {i < g.items.length - 1 && <span className="text-foreground/25 ml-2" aria-hidden>·</span>}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
