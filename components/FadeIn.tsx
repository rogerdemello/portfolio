"use client";
import { useEffect, useRef, useState } from "react";

/**
 * Reveals its children once they scroll into view, then stops observing.
 *
 * `delay` exists so grids can stagger their items - passing `i * 60` down a
 * list makes the cards cascade instead of snapping in as one block. Keep the
 * total under ~400ms or the last item feels late.
 */
export default function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(18px)",
        transition:
          "opacity 0.55s cubic-bezier(0.33,1,0.68,1), transform 0.55s cubic-bezier(0.33,1,0.68,1)",
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
