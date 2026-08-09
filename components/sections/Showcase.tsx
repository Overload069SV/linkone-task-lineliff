import Image from "next/image";
import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeader from "@/components/ui/SectionHeader";
import type { Dict } from "@/lib/content";

export default function Showcase({ dict }: { dict: Dict }) {
  const showcase = dict.showcase;
  return (
    <section className="section-y">
      <div className="container-x">
        <SectionHeader eyebrow={showcase.eyebrow} title={showcase.title} subtitle={showcase.intro} />

        <div className="mt-16 space-y-16 lg:space-y-24">
          {showcase.items.map((item, i) => {
            const imageRight = i % 2 === 1;
            return (
              <div key={item.tag} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
                {/* Device */}
                <Reveal className={imageRight ? "lg:order-2" : "lg:order-1"}>
                  <div className="relative mx-auto w-full max-w-[280px]">
                    <div className="absolute inset-x-6 bottom-2 top-8 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-15 blur-2xl" />
                    <div className="rounded-[2.4rem] border-[12px] border-navy bg-navy shadow-lift">
                      <div className="overflow-hidden rounded-[1.7rem]">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          width={941}
                          height={1672}
                          sizes="(max-width: 1024px) 260px, 280px"
                          className="h-auto w-full"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>

                {/* Copy */}
                <Reveal className={imageRight ? "lg:order-1" : "lg:order-2"}>
                  <span className="inline-block rounded-full bg-brand-50 px-3.5 py-1.5 text-[0.75rem] font-semibold uppercase tracking-[0.06em] text-brand-600">
                    {item.tag}
                  </span>
                  <h3 className="mt-4 text-[1.4rem] font-bold text-ink sm:text-[1.7rem]">{item.title}</h3>
                  <p className="mt-3 text-[1rem] leading-relaxed text-ink-muted">{item.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {item.points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                          <Check className="h-3.5 w-3.5" strokeWidth={3} />
                        </span>
                        <span className="text-[0.95rem] text-ink">{p}</span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
