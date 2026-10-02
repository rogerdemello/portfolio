import { techFor } from "@/lib/tech-icons";

/** One tool: its logo in brand colour, then its name. Glows like highlighter on hover (see .skill). */
export default function Tool({ name }: { name: string }) {
  const { icon: Icon, color } = techFor(name);
  return (
    <li className="skill">
      <Icon size={22} style={{ color }} aria-hidden className="skill-icon shrink-0" />
      <span>{name}</span>
    </li>
  );
}
