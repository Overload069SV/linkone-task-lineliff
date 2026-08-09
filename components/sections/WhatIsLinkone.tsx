import { Check } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import PhoneMockup from "@/components/ui/PhoneMockup";
import type { Dict } from "@/lib/content";

export default function WhatIsLinkone({ dict }: { dict: Dict }) {
  const what = dict.what;
  const phone = dict.phones[4]; // LINE summary card
  return (
    <section id="product" className="section-y">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <Reveal className="order-2 lg:order-1">
          <div className="relative mx-auto max-w-[360px]">
            <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2.5rem] bg-brand-50 blur-2xl" />
            <PhoneMockup src={phone.src} alt={what.imageAlt} sizes="(max-width: 1024px) 340px, 360px" />
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="eyebrow mb-4">{what.eyebrow}</span>
            <h2 className="text-[1.8rem] font-bold text-ink sm:text-[2.2rem]">{what.title}</h2>
          </Reveal>

          <div className="mt-5 space-y-4">
            {what.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-[1rem] leading-relaxed text-ink-muted">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {what.bullets.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                    <Check className="h-3.5 w-3.5" strokeWidth={3} />
                  </span>
                  <span className="text-[0.95rem] font-medium text-ink">{b}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
