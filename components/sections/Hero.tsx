import { ArrowRight, PlayCircle, CheckCircle2, TrendingUp } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import PhoneMockup from "@/components/ui/PhoneMockup";
import Reveal from "@/components/ui/Reveal";
import { SITE, type Dict } from "@/lib/content";

export default function Hero({ dict }: { dict: Dict }) {
  const hero = dict.hero;
  const phone = dict.phones[0];
  return (
    <section id="home" className="relative overflow-hidden bg-hero-fade">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-32 -top-40 h-[520px] w-[520px] rounded-full bg-brand-300/40 blur-[90px] animate-floatA" />
        <div className="absolute -bottom-48 -left-32 h-[460px] w-[460px] rounded-full bg-sky/30 blur-[90px] animate-floatB" />
        <div className="absolute inset-0 grid-lines" />
      </div>

      <div className="container-x relative z-10 grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:py-24">
        {/* Copy */}
        <div>
          <Reveal>
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-sky" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 text-[2.3rem] font-extrabold leading-[1.12] tracking-tight text-ink sm:text-[3rem] lg:text-[3.4rem]">
              {hero.titleLead}{" "}
              <span className="text-gradient">{hero.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted sm:text-[1.15rem]">
              {hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-4 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted/90">
              {hero.support}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <CTAButton href={SITE.lineAddUrl} external variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                {hero.primaryCta}
              </CTAButton>
              <CTAButton href="#how-it-works" variant="ghost" size="lg" icon={<PlayCircle className="h-5 w-5" />}>
                {hero.secondaryCta}
              </CTAButton>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal delay={300}>
            <dl className="mt-12 grid max-w-xl grid-cols-1 overflow-hidden rounded-3xl border border-line bg-white/70 shadow-soft backdrop-blur-sm sm:grid-cols-3">
              {hero.stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`p-5 sm:p-6 ${i > 0 ? "border-t border-line sm:border-l sm:border-t-0" : ""}`}
                >
                  <dd className="font-display text-[1.9rem] font-extrabold leading-none text-gradient">
                    {s.value}
                    {s.unit && <span className="ml-1 text-base font-bold text-ink-muted">{s.unit}</span>}
                  </dd>
                  <dt className="mt-2 text-[0.85rem] leading-snug text-ink-muted">{s.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-[340px] lg:max-w-[380px]">
            <PhoneMockup
              src={phone.src}
              alt={phone.alt}
              priority
              sizes="(max-width: 1024px) 340px, 380px"
            />

            {/* Floating progress card — sits beside the phone (left), gently bobs */}
            <div className="absolute -left-10 top-24 hidden w-max animate-floatY rounded-xl border border-line bg-white/95 p-2 shadow-lift backdrop-blur sm:block md:-left-20 lg:-left-16">
              <div className="flex items-center gap-1.5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-brand-50 text-brand-600">
                  <TrendingUp className="h-3.5 w-3.5" />
                </span>
                <div className="leading-tight">
                  <p className="text-[0.55rem] font-medium text-ink-muted">{hero.floatProgressLabel}</p>
                  <p className="font-display text-[0.72rem] font-bold text-ink">{hero.floatProgressValue}</p>
                </div>
              </div>
              <div className="mt-1 h-1 w-16 overflow-hidden rounded-full bg-brand-50">
                <div className="h-full w-[68%] rounded-full bg-brand-gradient" />
              </div>
            </div>

            {/* Floating done card — sits beside the phone (right), bobs out of phase */}
            <div className="absolute -right-8 bottom-24 hidden w-max animate-floatY items-center gap-1.5 rounded-xl border border-line bg-white/95 p-2 shadow-lift backdrop-blur [animation-delay:-3s] sm:flex md:-right-20 lg:-right-16">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 text-emerald-500">
                <CheckCircle2 className="h-3.5 w-3.5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.55rem] font-medium text-ink-muted">{hero.floatDoneLabel}</p>
                <p className="font-display text-[0.72rem] font-bold text-ink">{hero.floatDoneValue}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
