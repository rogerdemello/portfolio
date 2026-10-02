/**
 * Whiteboard-style architecture sketches for the two projects that have no presentable UI.
 * Lines are generated with a seeded jitter (so server and client render identical paths), then
 * drawn twice with a slight offset, the way a pen goes over a box twice.
 */

function rng(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const f = (n: number) => n.toFixed(1);

/** One imperfect edge: a slightly bowed line that overshoots its ends a little. */
function edge(r: () => number, x1: number, y1: number, x2: number, y2: number, j: number) {
  const dx = x2 - x1, dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const over = 3 + r() * 4;
  const sx = x1 - ux * over * r() + (r() - 0.5) * j;
  const sy = y1 - uy * over * r() + (r() - 0.5) * j;
  const ex = x2 + ux * over * r() + (r() - 0.5) * j;
  const ey = y2 + uy * over * r() + (r() - 0.5) * j;
  const bow = (r() - 0.5) * 5;
  const cx = (x1 + x2) / 2 - uy * bow + (r() - 0.5) * j;
  const cy = (y1 + y2) / 2 + ux * bow + (r() - 0.5) * j;
  return `M${f(sx)} ${f(sy)} Q${f(cx)} ${f(cy)} ${f(ex)} ${f(ey)}`;
}

function roughRect(x: number, y: number, w: number, h: number, seed: number) {
  const r = rng(seed);
  const pass = () =>
    [
      edge(r, x, y, x + w, y, 3),
      edge(r, x + w, y, x + w, y + h, 3),
      edge(r, x + w, y + h, x, y + h, 3),
      edge(r, x, y + h, x, y, 3),
    ].join(" ");
  return [pass(), pass()];
}

function roughLine(x1: number, y1: number, x2: number, y2: number, seed: number) {
  const r = rng(seed);
  return [edge(r, x1, y1, x2, y2, 2), edge(r, x1, y1, x2, y2, 2)];
}

/** Hand-drawn arrow from (x1,y1) to (x2,y2). */
function Arr({ x1, y1, x2, y2, seed, dashed = false, color = "rgb(28 27 25)" }: { x1: number; y1: number; x2: number; y2: number; seed: number; dashed?: boolean; color?: string }) {
  const [a, b] = roughLine(x1, y1, x2, y2, seed);
  const ang = Math.atan2(y2 - y1, x2 - x1);
  const head = (da: number) => `M${f(x2)} ${f(y2)} L${f(x2 - Math.cos(ang + da) * 11)} ${f(y2 - Math.sin(ang + da) * 11)}`;
  return (
    <g fill="none" stroke={color} strokeWidth={1.7} strokeLinecap="round" strokeDasharray={dashed ? "6 6" : undefined}>
      <path d={a} />
      <path d={b} opacity={0.5} />
      <path d={head(0.45)} />
      <path d={head(-0.45)} />
    </g>
  );
}

function Box({
  x, y, w, h, title, sub, seed, dashed = false, mark = false,
}: { x: number; y: number; w: number; h: number; title: string; sub?: string; seed: number; dashed?: boolean; mark?: boolean }) {
  const [a, b] = roughRect(x, y, w, h, seed);
  return (
    <g>
      {mark && <rect x={x + 5} y={y + 5} width={w - 8} height={h - 8} fill="rgb(255 229 138)" rx={3} />}
      <g fill="none" stroke="rgb(28 27 25)" strokeWidth={1.8} strokeLinecap="round" strokeDasharray={dashed ? "7 6" : undefined}>
        <path d={a} />
        <path d={b} opacity={0.5} />
      </g>
      <text x={x + w / 2} y={y + (sub ? h / 2 - 3 : h / 2 + 7)} textAnchor="middle" className="font-note" fontSize={22} fontWeight={600} fill="rgb(28 27 25)">
        {title}
      </text>
      {sub && (
        <text x={x + w / 2} y={y + h / 2 + 19} textAnchor="middle" className="font-note" fontSize={17} fill="rgb(108 105 98)">
          {sub}
        </text>
      )}
    </g>
  );
}

function PenNote({ x, y, lines, anchor = "start" }: { x: number; y: number; lines: string[]; anchor?: "start" | "middle" | "end" }) {
  return (
    <text x={x} y={y} textAnchor={anchor} className="font-note" fontSize={21} fill="rgb(37 69 201)">
      {lines.map((l, i) => (
        <tspan key={l} x={x} dy={i === 0 ? 0 : 22}>
          {l}
        </tspan>
      ))}
    </text>
  );
}

const frame = "figure bg-paper";

/** music-recsys, redrawn from the README's architecture block. */
export function MusicRecsysSketch({ bare = false }: { bare?: boolean }) {
  return (
    <svg role={bare ? undefined : "img"} aria-label={bare ? undefined : "Sketch of the music-recsys architecture: user events flow through an event bus and feature updater into an online store, then a two-tower model, ANN retrieval and a LightGBM ranker produce the top-N, with an MLflow registry, FastAPI and Prometheus around them."} aria-hidden={bare || undefined} viewBox="0 0 780 445" className={bare ? "block h-auto w-full" : frame}>
      {/* row 1: events in */}
      <Box x={20} y={30} w={130} h={66} title="user events" seed={11} />
      <Box x={205} y={30} w={140} h={66} title="event bus" sub="file → Kafka" seed={12} />
      <Box x={400} y={30} w={150} h={66} title="feature updater" seed={13} />
      <Box x={605} y={30} w={155} h={66} title="online store" sub="memory → Redis" seed={14} />
      <Arr x1={150} y1={63} x2={203} y2={63} seed={21} />
      <Arr x1={345} y1={63} x2={398} y2={63} seed={22} />
      <Arr x1={550} y1={63} x2={603} y2={63} seed={23} />

      {/* down, then the model path right to left */}
      <Arr x1={682} y1={98} x2={682} y2={168} seed={24} />
      <Box x={605} y={170} w={155} h={66} title="two-tower" sub="user embedding" seed={15} />
      <Box x={400} y={170} w={150} h={66} title="ANN retrieval" sub="candidates" seed={16} />
      <Box x={205} y={170} w={140} h={66} title="LightGBM" sub="ranker" seed={17} mark />
      <Box x={20} y={170} w={130} h={66} title="top-N" seed={18} />
      <Arr x1={603} y1={203} x2={552} y2={203} seed={25} />
      <Arr x1={398} y1={203} x2={347} y2={203} seed={26} />
      <Arr x1={203} y1={203} x2={152} y2={203} seed={27} />

      {/* serving */}
      <Arr x1={85} y1={238} x2={85} y2={306} seed={28} />
      <Box x={20} y={308} w={130} h={66} title="FastAPI" sub="/recommend" seed={19} />

      {/* the loop that keeps models fresh */}
      <Box x={230} y={318} w={290} h={70} title="MLflow registry" sub="retrain · refresh · precompute" seed={20} dashed />
      <Arr x1={300} y1={316} x2={275} y2={240} seed={29} dashed />
      <Arr x1={450} y1={316} x2={470} y2={240} seed={30} dashed />

      <PenNote x={560} y={300} lines={["every box sits behind", "an interface:", "memory ↔ Redis,", "file ↔ Kafka"]} />
      <PenNote x={560} y={398} lines={["watched by Prometheus", "+ Grafana"]} />
    </svg>
  );
}

/** DealSentry's review flow. */
export function DealSentrySketch({ bare = false }: { bare?: boolean }) {
  return (
    <svg role={bare ? undefined : "img"} aria-label={bare ? undefined : "Sketch of the DealSentry flow: an uploaded proposal is parsed, scored by a rules engine for pricing, legal and structural risk, routed for approval with an SLA clock, and only then signed, with an audit log, role-based access control and CRM integrations underneath."} aria-hidden={bare || undefined} viewBox="0 0 780 420" className={bare ? "block h-auto w-full" : frame}>
      <Box x={20} y={30} w={140} h={66} title="proposal" sub="PDF / DOCX upload" seed={31} />
      <Box x={215} y={30} w={140} h={66} title="parse" sub="text + structure" seed={32} />
      <Box x={410} y={30} w={190} h={66} title="rules engine" sub="pricing · legal · structure" seed={33} mark />
      <Box x={650} y={30} w={110} h={66} title="risk score" seed={34} />
      <Arr x1={160} y1={63} x2={213} y2={63} seed={41} />
      <Arr x1={355} y1={63} x2={408} y2={63} seed={42} />
      <Arr x1={600} y1={63} x2={648} y2={63} seed={43} />

      <Arr x1={705} y1={98} x2={705} y2={168} seed={44} />
      <Box x={620} y={170} w={140} h={66} title="approval" sub="routing + SLA clock" seed={35} />
      <Box x={410} y={170} w={150} h={66} title="reviewer" sub="role-based access" seed={36} />
      <Box x={215} y={170} w={140} h={66} title="signed" sub="only after review" seed={37} />
      <Arr x1={618} y1={203} x2={562} y2={203} seed={45} />
      <Arr x1={408} y1={203} x2={357} y2={203} seed={46} />

      <Box x={20} y={318} w={330} h={64} title="audit log" sub="every step attributable, on PostgreSQL" seed={38} dashed />
      <Box x={420} y={318} w={340} h={64} title="integrations" sub="Salesforce · HubSpot · Gmail · Drive" seed={39} dashed />

      <PenNote x={20} y={150} lines={["risk is scored before", "signature, not after"]} />
      <g fill="none" stroke="rgb(37 69 201)" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round">
        <path d="M206 152 C 268 176, 372 154, 426 108" />
        <path d="M426 108 C 425 112, 423 116, 421 120" />
        <path d="M426 108 C 421 108, 417 109, 412 111" />
      </g>
    </svg>
  );
}
