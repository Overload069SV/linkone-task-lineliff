import { ArrowRight } from "lucide-react";
import type { FeatureItem } from "@/lib/content";

export default function FeatureCard({ item }: { item: FeatureItem }) {
  const Icon = item.icon;
  return (
    <article className="group card flex h-full flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </span>
        <span className="font-display text-sm font-bold tracking-widest text-brand-100 transition-colors group-hover:text-brand-300">
          {item.no}
        </span>
      </div>

      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.06em] text-brand-600">
        {item.titleEn}
      </p>
      <h3 className="mt-1 text-[1.15rem] font-bold text-ink">{item.title}</h3>
      <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-muted">{item.desc}</p>

      <div className="mt-auto flex items-start gap-2 pt-5">
        <ArrowRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-500" strokeWidth={2.5} />
        <p className="text-[0.9rem] font-medium text-ink">{item.outcome}</p>
      </div>
    </article>
  );
}
