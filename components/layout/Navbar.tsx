"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { SITE, type Dict, type Lang, type NavLink } from "@/lib/content";

function LangToggle({ lang, onNavigate }: { lang: Lang; onNavigate?: () => void }) {
  const base = "rounded-full px-2.5 py-1 text-[0.8rem] font-semibold transition-colors";
  return (
    <div className="inline-flex items-center rounded-full border border-line bg-white p-0.5" role="group" aria-label="Language">
      <Link
        href="/"
        onClick={onNavigate}
        aria-current={lang === "th" ? "true" : undefined}
        className={`${base} ${lang === "th" ? "bg-brand-600 text-white" : "text-ink-muted hover:text-brand-600"}`}
      >
        TH
      </Link>
      <Link
        href="/en"
        onClick={onNavigate}
        aria-current={lang === "en" ? "true" : undefined}
        className={`${base} ${lang === "en" ? "bg-brand-600 text-white" : "text-ink-muted hover:text-brand-600"}`}
      >
        EN
      </Link>
    </div>
  );
}

export default function Navbar({
  nav,
  ui,
  lang,
}: {
  nav: NavLink[];
  ui: Dict["ui"];
  lang: Lang;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const home = lang === "en" ? "/en" : "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 h-[72px] w-full transition-colors duration-200 ${
        scrolled ? "border-b border-line bg-white/85 shadow-soft backdrop-blur-md" : "border-b border-transparent bg-white/70 backdrop-blur-md"
      }`}
    >
      <nav className="container-x flex h-full items-center justify-between gap-4">
        {/* Brand */}
        <Link href={home} className="flex items-center gap-2.5" aria-label={ui.brandHome}>
          <Image src="/logo-blue.png" alt="Linkone" width={132} height={30} className="h-7 w-auto" priority />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-[0.95rem] font-medium text-ink-muted transition-colors hover:text-brand-600 after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-0 after:bg-brand-gradient after:transition-all after:duration-200 hover:after:w-full"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTAs + language */}
        <div className="hidden items-center gap-3 lg:flex">
          <LangToggle lang={lang} />
          <a href={SITE.lineAddUrl} target="_blank" rel="noopener noreferrer" className="btn btn-md btn-primary">
            {ui.start}
          </a>
        </div>

        {/* Mobile: language + toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <LangToggle lang={lang} />
          <button
            type="button"
            aria-label={open ? ui.closeMenu : ui.openMenu}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-line text-ink"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-[72px] z-40 origin-top border-b border-line bg-white px-5 pb-6 pt-2 shadow-lift transition-all duration-200 lg:hidden ${
          open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-3 opacity-0"
        }`}
      >
        <ul className="flex flex-col">
          {nav.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-line/70 py-3.5 text-[1.02rem] font-medium text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <a
            href={SITE.lineAddUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="btn btn-md btn-primary w-full"
          >
            {ui.startLong}
          </a>
        </div>
      </div>
    </header>
  );
}
