import { ArrowRight } from "lucide-react";
import CTAButton from "@/components/ui/CTAButton";
import Reveal from "@/components/ui/Reveal";
import LineQR from "@/components/ui/LineQR";
import { SITE, type Dict } from "@/lib/content";

export default function FinalCTA({ dict }: { dict: Dict }) {
  const cta = dict.finalCta;
  return (
    <section id="contact" className="section-y">
      <div className="container-x">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy px-6 py-16 text-center sm:px-12 lg:rounded-[2.5rem] lg:py-20">
            {/* decorative */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-600/40 blur-3xl" />
              <div className="absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky/30 blur-3xl" />
              <div className="absolute inset-0 grid-lines opacity-60" />
            </div>

            <div className="relative z-10 mx-auto max-w-2xl">
              <h2 className="text-[1.7rem] font-bold leading-tight text-white sm:text-[2.2rem]">
                {cta.title}
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-[1.02rem] leading-relaxed text-[#c3d2ea]">
                {cta.subtitle}
              </p>
              <div className="mt-9 flex flex-wrap justify-center gap-3.5">
                <CTAButton href={SITE.lineAddUrl} external variant="white" size="lg" icon={<ArrowRight className="h-5 w-5" />}>
                  {cta.primaryCta}
                </CTAButton>
              </div>

              <div className="mt-9 flex flex-col items-center gap-3">
                <LineQR
                  href={SITE.lineAddUrl}
                  caption={dict.ui.scanToAdd}
                  lineId={SITE.lineId}
                  size={208}
                  captionClassName="text-[#c3d2ea]"
                />
                <p className="text-[0.9rem] text-[#a9b8d1]">
                  {dict.ui.orAddLine}{" "}
                  <a
                    href={SITE.lineAddUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-display font-semibold text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
                  >
                    {SITE.lineId}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
