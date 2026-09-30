"use client";
import { useEffect, useRef, useState } from "react";

/**
 * A screenshot that loads straight away (no lazy-loading: some browsers, including in-app and
 * background webviews, never trigger it, and these files are tiny) and asks again if the
 * request fails or stalls.
 */
export default function Shot({
  src,
  alt,
  width,
  height,
  className = "",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
}) {
  const ref = useRef<HTMLImageElement>(null);
  const [attempt, setAttempt] = useState(0);
  const retry = () => setAttempt((a) => (a < 2 ? a + 1 : a));

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // A failure that happened before hydration never fires onError, so look for it now.
    if (el.complete && el.naturalWidth === 0) retry();
    // A stalled request never errors either: give it a few seconds, then ask again.
    const timer = setTimeout(() => {
      if (!el.complete || el.naturalWidth === 0) retry();
    }, 6000);
    return () => clearTimeout(timer);
  }, [attempt]);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={attempt ? `${src}?r=${attempt}` : src}
      alt={alt}
      width={width}
      height={height}
      decoding="async"
      onError={retry}
      className={`figure shot ${className}`}
    />
  );
}
