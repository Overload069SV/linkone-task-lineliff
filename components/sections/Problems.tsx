import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Dict } from "@/lib/content";

export default function Problems({ dict }: { dict: Dict }) {
  const problems = dict.problems;
  return (
    <section className="section-y bg-brand-50/50">
      <div className="container-x">
        <SectionHeader eyebrow={problems.eyebrow} title={problems.title} subtitle={problems.intro} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.items.map((item, i) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} as="article" delay={(i % 3) * 70}>
                <div className="card h-full p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-300 hover:shadow-card">
                  <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
                  <h3 className="text-[1.1rem] font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">{item.desc}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
