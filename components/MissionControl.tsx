"use client";
import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";

/**
 * MissionControl - the ops-console overview screen.
 * Roger monitored as a live system: an operator/status panel, a real-time
 * telemetry sparkline, a system-status readout, and a row of metric tiles.
 */

/* Deterministic seed so SSR and first client render match; then it animates. */
const SEED = [38, 42, 40, 46, 52, 48, 55, 60, 57, 63, 59, 66, 62, 68, 64, 70, 67, 72, 69, 74];

function useLiveSeries(len = SEED.length) {
  const [data, setData] = useState<number[]>(SEED.slice(0, len));
  useEffect(() => {
    const id = setInterval(() => {
      setData((prev) => {
        const last = prev[prev.length - 1] ?? 60;
        const next = Math.max(20, Math.min(96, last + (Math.random() * 22 - 11)));
        return [...prev.slice(1), next];
      });
    }, 1400);
    return () => clearInterval(id);
  }, []);
  return data;
}

function Sparkline({ data, color = "hsl(var(--primary))", fill = true }: { data: number[]; color?: string; fill?: boolean }) {
  const W = 240, H = 60, pad = 4;
  const min = Math.min(...data), max = Math.max(...data);
  const span = max - min || 1;
  const pts = data.map((v, i) => {
    const x = pad + (i / (data.length - 1)) * (W - pad * 2);
    const y = pad + (1 - (v - min) / span) * (H - pad * 2);
    return [x, y] as const;
  });
  const line = pts.map(([x, y]) => `${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${pad},${H - pad} ${line} ${W - pad},${H - pad}`;
  const [lx, ly] = pts[pts.length - 1];
  return (
    <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" preserveAspectRatio="none" aria-hidden>
      {fill && <polygon points={area} fill={color} opacity={0.12} />}
      <polyline points={line} fill="none" stroke={color} strokeWidth={1.6} strokeLinejoin="round" strokeLinecap="round" />
      <circle cx={lx} cy={ly} r={2.6} fill={color} />
    </svg>
  );
}

function Uptime() {
  // "operational since" counter - months of experience, ticking seconds for life.
  const [s, setS] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setS((v) => v + 1), 1000);
    return () => clearInterval(id);
  }, []);
  const base = 2 * 365 * 24 * 3600; // ~2 yrs
  const total = base + s;
  const d = Math.floor(total / 86400);
  const h = Math.floor((total % 86400) / 3600);
  const m = Math.floor((total % 3600) / 60);
  const sec = total % 60;
  return (
    <span className="tnum">
      {d}<span className="text-foreground/40">d</span> {String(h).padStart(2, "0")}:{String(m).padStart(2, "0")}:{String(sec).padStart(2, "0")}
    </span>
  );
}

function Gauge({ value }: { value: number }) {
  return (
    <div className="h-1.5 w-full rounded-full bg-background-tertiary overflow-hidden">
      <div className="h-full rounded-full bg-primary" style={{ width: `${value}%` }} />
    </div>
  );
}

const status = [
  { k: "DEPLOYMENT", v: "OK", tone: "primary" },
  { k: "AGENTS", v: "3 ACTIVE", tone: "primary" },
  { k: "RAG PIPELINE", v: "NOMINAL", tone: "primary" },
  { k: "LATENCY", v: "WITHIN LIMITS", tone: "cyan" },
  { k: "HIRE SIGNAL", v: "BROADCASTING", tone: "amber" },
];

const toneColor: Record<string, string> = {
  primary: "text-primary",
  cyan: "text-secondary",
  amber: "text-accent",
};

export default function MissionControl() {
  const series = useLiveSeries();
  const throughput = Math.round(series[series.length - 1] * 12 + 40);

  return (
    <section id="home" className="relative min-h-[calc(100vh-2.75rem)] flex flex-col justify-center py-12">
      {/* Masthead */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <span className="eyebrow flex items-center gap-2">
          <span className="led" aria-hidden /> Mission Control — Operator Console
        </span>
        <span className="inline-flex items-center gap-2 font-mono text-xs text-primary draft-letter">
          Status: online — available for deployment
        </span>
      </div>

      {/* Top row: identity + status readout */}
      <div className="grid lg:grid-cols-3 gap-4">
        {/* Identity / operator panel */}
        <div className="panel panel-live lg:col-span-2 p-6 sm:p-7">
          <p className="readout mb-2">Operator</p>
          <h1 className="font-sans font-extrabold text-foreground leading-[0.95] tracking-tight text-4xl sm:text-5xl lg:text-6xl">
            Roger Demello
          </h1>
          <p className="mt-3 font-mono text-secondary draft-letter text-sm sm:text-base">
            AI / ML Engineer <span className="text-foreground/40">· callsign</span> RD.OPS
          </p>
          <p className="mt-4 text-sm sm:text-base text-foreground/65 leading-relaxed max-w-xl">
            Monitoring a system that builds systems — autonomous agents, honest retrieval, and
            ML models tuned for real-world deployment. All subsystems nominal.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Roger_Demello_Resume.pdf"
              className="btn-solid group"
            >
              <FaDownload size={12} className="group-hover:translate-y-0.5 transition-transform duration-200" />
              Download Ops Manual
            </a>
            <span className="font-mono text-xs text-foreground/45 draft-letter">
              <span className="text-accent">◎</span> Ground station — Nagpur, India
            </span>
          </div>
        </div>

        {/* System status readout */}
        <div className="panel p-5">
          <div className="flex items-center justify-between mb-3">
            <p className="readout">System Status</p>
            <span className="font-mono text-[0.6rem] text-primary draft-letter flex items-center gap-1.5">
              <span className="led" aria-hidden /> all nominal
            </span>
          </div>
          <ul className="space-y-2">
            {status.map((s) => (
              <li key={s.k} className="flex items-center justify-between font-mono text-xs">
                <span className="text-foreground/55">{s.k}</span>
                <span className={`draft-letter ${toneColor[s.tone]}`}>{s.v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 pt-3 border-t border-card-border">
            <div className="flex items-center justify-between mb-1">
              <span className="readout">Uptime</span>
              <span className="font-mono text-xs text-accent"><Uptime /></span>
            </div>
          </div>
        </div>
      </div>

      {/* Telemetry tiles */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
        {/* Live throughput */}
        <div className="panel p-4 col-span-2 lg:col-span-2">
          <div className="flex items-center justify-between mb-2">
            <p className="readout">Inference Throughput</p>
            <p className="font-mono text-xs text-primary tnum">
              {throughput} <span className="text-foreground/40">req/s</span>
            </p>
          </div>
          <Sparkline data={series} />
        </div>

        {/* Accuracy gauge */}
        <div className="panel p-4">
          <p className="readout mb-2">Model Accuracy</p>
          <p className="font-sans font-extrabold text-3xl text-accent leading-none mb-3 tnum">87%</p>
          <Gauge value={87} />
        </div>

        {/* Users served */}
        <div className="panel p-4">
          <p className="readout mb-2">Users Served</p>
          <p className="font-sans font-extrabold text-3xl text-primary leading-none tnum">200+</p>
          <p className="font-mono text-[0.65rem] text-foreground/40 mt-2 draft-letter">across 3+ deployments</p>
        </div>
      </div>
    </section>
  );
}
