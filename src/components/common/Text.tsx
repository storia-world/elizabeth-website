type TextSize = "small" | "medium" | "large";

const SIZE_CLASSES: Record<TextSize, string> = {
  small: "text-[0.9rem] leading-[1.7]",
  medium: "text-[1.05rem] leading-[1.8]",
  large: "text-[1.1rem] leading-[1.8]",
};

type TextProps = {
  children: React.ReactNode;
  size?: TextSize;
  className?: string;
  as?: "p" | "span" | "div";
};

export default function Text({
  children,
  size = "medium",
  className = "",
  as: Tag = "p",
}: TextProps) {
  return (
    <Tag
      className={`font-body font-light text-[var(--storia-blackLight)] ${SIZE_CLASSES[size]} ${className}`.trim()}
    >
      {children}
    </Tag>
  );
}
