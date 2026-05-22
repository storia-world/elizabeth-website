"use client";

import { useScrollY } from "@/lib/useScrollY";

export default function ScrollProgress() {
  const scrollY = useScrollY();
  const maxScroll =
    typeof document !== "undefined"
      ? document.documentElement.scrollHeight - window.innerHeight
      : 1;
  const progress = maxScroll > 0 ? Math.min(scrollY / maxScroll, 1) : 0;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-0.5 origin-left bg-[var(--storia-black)]"
      style={{ transform: `scaleX(${progress})` }}
      aria-hidden
    />
  );
}
