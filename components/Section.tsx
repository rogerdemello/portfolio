/**
 * Full-bleed section band with a centred content column. Alternating `tone`
 * between sections is what gives the page its horizontal banding, so each
 * block reads as its own surface instead of one long scroll of text.
 */
export default function Section({
  id,
  tone = "paper",
  children,
}: {
  id: string;
  tone?: "paper" | "sunk";
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 ${tone === "sunk" ? "bg-paper-sunk" : "bg-paper"}`}
    >
      <div className="mx-auto max-w-content px-5 py-20 sm:px-6 md:py-28">
        {children}
      </div>
    </section>
  );
}
