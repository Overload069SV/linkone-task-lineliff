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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.items.map((item, i) => (
            <Reveal key={item.no} delay={(i % 4) * 60}>
              <FeatureCard item={item} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
