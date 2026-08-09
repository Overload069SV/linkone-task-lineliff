import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import UseCaseCard from "@/components/ui/UseCaseCard";
import type { Dict } from "@/lib/content";

export default function UseCases({ dict }: { dict: Dict }) {
  const useCases = dict.useCases;
  return (
    <section id="use-cases" className="section-y bg-brand-50/50">
      <div className="container-x">
        <SectionHeader eyebrow={useCases.eyebrow} title={useCases.title} subtitle={useCases.intro} />

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {useCases.items.map((item, i) => (
            <Reveal
              key={item.titleEn}
              delay={(i % 3) * 70}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
            >
              <UseCaseCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
