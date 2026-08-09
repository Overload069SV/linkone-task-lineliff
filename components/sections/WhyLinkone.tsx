import Reveal from "@/components/ui/Reveal";
import PhoneMockup from "@/components/ui/PhoneMockup";
import type { Dict } from "@/lib/content";

export default function WhyLinkone({ dict }: { dict: Dict }) {
  const why = dict.why;
  const phone = dict.phones[3]; // Profile
  return (
    <section className="section-y bg-brand-50/50">
      <div className="container-x grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Copy + points */}
        <div>
          <Reveal>
            <span className="eyebrow mb-4">{why.eyebrow}</span>
            <h2 className="max-w-lg text-[1.7rem] font-bold text-ink sm:text-[2.1rem] lg:text-[2.4rem]">
              {why.title}
            </h2>
          </Reveal>

          <ol className="mt-8 space-y-4">
            {why.items.map((item, i) => (
              <Reveal key={item.title} as="li" delay={i * 60}>
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft transition-all duration-200 hover:border-brand-300 hover:shadow-card">
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient font-display text-base font-bold text-white shadow-brand">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[1.08rem] font-bold text-ink">{item.title}</h3>
                    <p className="mt-1 text-[0.95rem] leading-relaxed text-ink-muted">{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Visual — sticky on large screens */}
        <Reveal className="lg:sticky lg:top-24">
          <div className="relative mx-auto max-w-[340px]">
            <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2.5rem] bg-brand-200/50 blur-2xl" />
            <PhoneMockup src={phone.src} alt={why.imageAlt} sizes="(max-width: 1024px) 320px, 340px" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
