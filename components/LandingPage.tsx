import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhatIsLinkone from "@/components/sections/WhatIsLinkone";
import Problems from "@/components/sections/Problems";
import Features from "@/components/sections/Features";
import UseCases from "@/components/sections/UseCases";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyLinkone from "@/components/sections/WhyLinkone";
import Showcase from "@/components/sections/Showcase";
import FinalCTA from "@/components/sections/FinalCTA";
import HtmlLang from "@/components/HtmlLang";
import { getDict, type Lang } from "@/lib/content";

export default function LandingPage({ lang }: { lang: Lang }) {
  const dict = getDict(lang);
  return (
    <>
      <HtmlLang lang={lang} />
      <Navbar nav={dict.nav} ui={dict.ui} lang={lang} />
      <main>
        <Hero dict={dict} />
        <WhatIsLinkone dict={dict} />
        <Problems dict={dict} />
        <Features dict={dict} />
        <UseCases dict={dict} />
        <HowItWorks dict={dict} />
        <WhyLinkone dict={dict} />
        <Showcase dict={dict} />
        <FinalCTA dict={dict} />
      </main>
      <Footer dict={dict} />
    </>
  );
}
