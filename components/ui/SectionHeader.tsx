import Reveal from "./Reveal";

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeaderProps) {
  const isCenter = align === "center";
  return (
    <Reveal
      className={`${isCenter ? "mx-auto text-center" : "text-left"} max-w-2xl ${className}`}
    >
      {eyebrow && <span className="eyebrow mb-4">{eyebrow}</span>}
      <h2 className="text-[1.7rem] font-bold text-ink sm:text-[2.1rem] lg:text-[2.5rem]">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-[1rem] leading-relaxed text-ink-muted sm:text-[1.1rem]">
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
