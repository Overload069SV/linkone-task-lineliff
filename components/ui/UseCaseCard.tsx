import type { UseCaseItem } from "@/lib/content";

export default function UseCaseCard({ item }: { item: UseCaseItem }) {
  const Icon = item.icon;
  return (
    <article className="group card relative flex h-full flex-col overflow-hidden p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card">
      {/* soft corner glow */}
      <span className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-brand-50 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />

      <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand">
        <Icon className="h-7 w-7" strokeWidth={2} />
      </span>

      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-brand-600">
        {item.titleEn}
      </p>
      <h3 className="mt-1 text-[1.2rem] font-bold text-ink">{item.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{item.desc}</p>
    </article>
  );
}
