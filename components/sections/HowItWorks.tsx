import Reveal from "@/components/ui/Reveal";
import PhoneMockup from "@/components/ui/PhoneMockup";
import type { Dict } from "@/lib/content";

export default function HowItWorks({ dict }: { dict: Dict }) {
  const how = dict.how;
  const phone = dict.phones[1]; // Workspace
  return (
    <section id="how-it-works" className="section-y">
      <div className="container-x">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow mb-4">{how.eyebrow}</span>
          <h2 className="text-[1.7rem] font-bold text-ink sm:text-[2.1rem] lg:text-[2.5rem]">{how.title}</h2>
          <p className="mt-4 text-[1rem] leading-relaxed text-ink-muted sm:text-[1.1rem]">{how.subtitle}</p>
        </Reveal>

        <div className="mt-14 grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          {/* Visual */}
          <Reveal className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-[330px]">
              <div className="absolute inset-0 -z-10 translate-y-6 rounded-[2.5rem] bg-brand-gradient opacity-10 blur-2xl" />
              <PhoneMockup src={phone.src} alt={how.imageAlt} sizes="(max-width: 1024px) 300px, 330px" />
            </div>
          </Reveal>

          {/* Steps timeline */}
          <ol className="order-1 lg:order-2">
            {how.steps.map((step, i) => {
              const Icon = step.icon;
              const last = i === how.steps.length - 1;
              return (
                <Reveal key={step.no} as="li" delay={i * 80} className="relative flex gap-5 pb-8 last:pb-0">
                  {/* connector line */}
                  {!last && (
                    <span
                      aria-hidden
                      className="absolute left-[27px] top-14 h-[calc(100%-3.5rem)] w-0.5 bg-gradient-to-b from-brand-300 to-brand-100"
                    />
                  )}
                  <span className="relative z-10 flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-brand">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                    <span className="absolute -right-1.5 -top-1.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-white bg-navy text-[0.72rem] font-bold text-white">
                      {step.no}
                    </span>
                  </span>
                  <div className="pt-1">
                    <h3 className="text-[1.15rem] font-bold text-ink">{step.title}</h3>
                    <p className="mt-1.5 text-[0.95rem] leading-relaxed text-ink-muted">{step.desc}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
