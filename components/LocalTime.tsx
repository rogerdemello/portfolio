"use client";
import { useEffect, useState } from "react";

const clock = () =>
  new Intl.DateTimeFormat("en-IN", { hour: "numeric", minute: "2-digit", hour12: true, timeZone: "Asia/Kolkata" }).format(new Date());

/** "It's 9:41 pm in India right now." Useful for anyone deciding when to reach me. Rendered after mount to avoid a server/client mismatch. */
export default function LocalTime() {
  const [t, setT] = useState<string | null>(null);
  useEffect(() => {
    setT(clock());
    const id = setInterval(() => setT(clock()), 30_000);
    return () => clearInterval(id);
  }, []);
  return <span>{t ? `It's ${t.toLowerCase()} in India right now.` : "Based in India (IST)."}</span>;
}
