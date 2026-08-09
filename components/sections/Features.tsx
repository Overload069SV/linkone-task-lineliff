import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import FeatureCard from "@/components/ui/FeatureCard";
import type { Dict } from "@/lib/content";

export default function Features({ dict }: { dict: Dict }) {
  const features = dict.features;
  return (
    <section id="features" className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow={features.eyebrow} title={features.title} subtitle={features.intro} />

        <div className="mt-12 flex flex-wrap justify-center gap-5">
          {features.items.map((item, i) => (
            <Reveal
              key={item.no}
              delay={(i % 4) * 60}
              className="w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] xl:w-[calc(25%-0.9375rem)]"
            >
              <FeatureCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
