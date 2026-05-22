type EyebrowProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Eyebrow({ children, className = "" }: EyebrowProps) {
  return (
    <p
      className={`mb-2 font-body text-sm font-medium uppercase tracking-[0.15em] text-[var(--storia-black)] ${className}`.trim()}
    >
      {children}
    </p>
  );
}
