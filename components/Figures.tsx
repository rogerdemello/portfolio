/** Sets figures like "200+", "99.5%" and "~70%" in bold so a skimming reader lands on them. */
export default function Figures({ text }: { text: string }) {
  return (
    <>
      {text.split(/(~?\d[\d,.]*\+?%?)/g).map((part, i) =>
        i % 2 === 1 ? (
          <strong key={i} className="font-semibold">
            {part}
          </strong>
        ) : (
          part
        )
      )}
    </>
  );
}
