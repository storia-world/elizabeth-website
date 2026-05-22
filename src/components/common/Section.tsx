import type { CSSProperties, ReactNode } from "react";

export type SectionBackground = "beige" | "blue50" | "coffee" | "none";

const BACKGROUNDS: Record<Exclude<SectionBackground, "none">, string> = {
  beige: "var(--storia-beige)",
  blue50: "var(--storia-blue50)",
  coffee: "var(--storia-coffee)",
};

type SectionProps = {
  id?: string;
  background?: SectionBackground;
  padding?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
};

export default function Section({
  id,
  background = "beige",
  padding = "120px 8vw",
  className = "",
  style,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={className}
      style={{
        ...(background !== "none" && {
          background: BACKGROUNDS[background],
        }),
        padding,
        ...style,
      }}
    >
      {children}
    </section>
  );
}
