import {
  ArrowRight,
  PlayCircle,
  CheckCircle2,
  Hourglass,
  Users,
  MessageCircle,
  ListChecks,
  TrendingUp,
} from "lucide-react";
import Image from "next/image";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import { SITE, type Dict } from "@/lib/content";

const MINI_ICONS = [MessageCircle, ListChecks, TrendingUp];
const MINI_TONES = [
  "bg-[#e7f8ee] text-[#06C755]", // LINE green
  "bg-brand-50 text-brand-600",
  "bg-brand-50 text-brand-600",
];

export default function Hero({ dict }: { dict: Dict }) {
  const hero = dict.hero;
  const phone = dict.phones[0];

  return (
    <section id="home" className="relative overflow-hidden">
      {/* ---------- Background image (silk waves) ---------- */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[#EAF3FF]" />
        <Image
          src="/images/hero-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="container-x grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:gap-10 lg:py-24">
        {/* ---------- Left: copy ---------- */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white/70 px-4 py-1.5 text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-brand-600 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-600" />
              {hero.eyebrow}
            </span>
          </Reveal>

          <Reveal delay={60}>
            <h1 className="mt-6 text-[2.35rem] font-extrabold leading-[1.1] tracking-tight text-ink sm:text-[3rem] lg:text-[3.35rem]">
              {hero.titleLead} <span className="text-brand-600">{hero.titleHighlight}</span>
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-ink-muted">{hero.subtitle}</p>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-3 max-w-xl text-[0.98rem] leading-relaxed text-ink-muted/90">{hero.support}</p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-8 flex flex-wrap gap-3.5">
              <CTAButton href={SITE.lineAddUrl} external variant="primary" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                {hero.primaryCta}
              </CTAButton>
              <CTAButton href="#how-it-works" variant="ghost" size="lg" icon={<PlayCircle className="h-5 w-5" />}>
                {hero.secondaryCta}
              </CTAButton>
            </div>
          </Reveal>

          {/* mini feature cards */}
          <Reveal delay={280}>
            <div className="mt-10 grid max-w-xl gap-4 sm:grid-cols-3">
              {hero.miniCards.map((card, i) => {
                const Icon = MINI_ICONS[i];
                return (
                  <div
                    key={card.title}
                    className="rounded-2xl border border-line bg-white/80 p-4 shadow-soft backdrop-blur transition-all duration-200 hover:-translate-y-0.5 hover:shadow-card"
                  >
                    <span className={`mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl ${MINI_TONES[i]}`}>
                      <Icon className="h-5 w-5" strokeWidth={2.2} />
                    </span>
                    <h3 className="text-[0.95rem] font-bold text-ink">{card.title}</h3>
                    <p className="mt-1 text-[0.82rem] leading-snug text-ink-muted">{card.desc}</p>
                  </div>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* ---------- Right: phone + floating cards ---------- */}
        <Reveal delay={160} className="relative">
          <div className="relative mx-auto max-w-[320px] lg:max-w-[370px]">
            <Image
              src="/images/hero-phone.png"
              alt={phone.alt}
              width={894}
              height={1446}
              priority
              sizes="(max-width: 1024px) 320px, 370px"
              className="h-auto w-full drop-shadow-[0_34px_60px_rgba(6,26,51,0.22)]"
            />

            {/* 68% Complete (left) */}
            <div className="absolute -left-5 top-14 hidden w-max animate-floatY rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur sm:block lg:-left-12">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-white">
                  <CheckCircle2 className="h-5 w-5" />
                </span>
                <div className="leading-none">
                  <p className="font-display text-lg font-extrabold text-ink">{hero.float.progress.value}</p>
                  <p className="mt-0.5 text-[0.72rem] font-medium text-ink-muted">{hero.float.progress.label}</p>
                </div>
              </div>
              <div className="mt-2.5 h-1.5 w-32 overflow-hidden rounded-full bg-brand-50">
                <div className="h-full w-[68%] rounded-full bg-brand-600" />
              </div>
            </div>

            {/* 2 Pending Approvals (top-right) */}
            <div className="absolute -right-4 top-24 hidden w-max animate-floatY items-center gap-2.5 rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur [animation-delay:-2s] sm:flex lg:-right-12">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#fff1e2] text-[#f59331]">
                <Hourglass className="h-5 w-5" />
              </span>
              <div className="leading-none">
                <p className="font-display text-lg font-extrabold text-ink">{hero.float.approvals.value}</p>
                <p className="mt-0.5 text-[0.72rem] font-medium text-ink-muted">{hero.float.approvals.label}</p>
              </div>
            </div>

            {/* Team synced (bottom-right) */}
            <div className="absolute -right-3 bottom-20 hidden w-max animate-floatY items-center gap-2.5 rounded-2xl border border-line bg-white/95 p-3 shadow-lift backdrop-blur [animation-delay:-4s] sm:flex lg:-right-10">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#e7f8ee] text-[#06C755]">
                <Users className="h-5 w-5" />
              </span>
              <div className="leading-tight">
                <p className="text-[0.9rem] font-bold text-ink">{hero.float.synced.title}</p>
                <p className="text-[0.72rem] font-medium text-[#06C755]">{hero.float.synced.sub}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
