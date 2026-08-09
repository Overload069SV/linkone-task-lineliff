import Image from "next/image";
import LineQR from "@/components/ui/LineQR";
import { SITE, type Dict } from "@/lib/content";

export default function Footer({ dict }: { dict: Dict }) {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy text-[#cdd8ea]">
      <div className="container-x pt-16 sm:pt-20">
        <div className="grid gap-10 pb-12 md:grid-cols-[1.6fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Image src="/logo-white.png" alt="Linkone" width={150} height={34} className="h-8 w-auto" />
            <p className="mt-4 font-display font-semibold text-white">{SITE.positioningEn}</p>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-[#8ea1c0]">
              {dict.footer.description}
            </p>
          </div>

          {/* Menu column */}
          <div>
            <h4 className="mb-4 text-[0.95rem] font-semibold text-white">{dict.ui.footerMenu}</h4>
            <ul className="space-y-2.5">
              {dict.nav.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-[0.95rem] text-[#a9b8d1] transition-colors hover:text-white">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-[0.95rem] font-semibold text-white">{dict.ui.footerContact}</h4>
            <p className="text-[0.95rem] text-[#a9b8d1]">{dict.ui.website}</p>
            <a href="#home" className="mt-1 inline-block font-display font-semibold text-white hover:text-brand-300">
              {SITE.website}
            </a>
            <p className="mt-5 text-[0.95rem] text-[#a9b8d1]">{dict.ui.email}</p>
            <a
              href={`mailto:${SITE.email}`}
              className="mt-1 inline-block font-display font-semibold text-white hover:text-brand-300"
            >
              {SITE.email}
            </a>
            <p className="mt-5 text-[0.95rem] text-[#a9b8d1]">{dict.ui.lineLabel}</p>
            <a
              href={SITE.lineAddUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 inline-block font-display font-semibold text-white hover:text-brand-300"
            >
              {SITE.lineId}
            </a>
            <div className="mt-4 flex justify-start">
              <LineQR
                href={SITE.lineAddUrl}
                caption={dict.ui.scanToAdd}
                lineId={SITE.lineId}
                size={148}
                captionClassName="text-[#8ea1c0]"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-3 border-t border-white/10 py-6 text-[0.86rem] text-[#8093b2] sm:flex-row sm:items-center">
          <p>© {year} Linkone. {dict.ui.rights}</p>
          <p className="font-display font-medium text-[#a9b8d1]">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
