import { Header, Footer, HeroSection, PartnersSection, AdvertSection, BlogsSection, HelpSection } from "~/components";
import type { Language } from "~/Types";

export default function HomeMain({ lang }: { lang: Language }) {
  return (
    <>
    <Header lang={lang} />

    <main>
      <HeroSection lang={lang} />
      <HelpSection lang={lang} />
      <div className="relative after-shape" />
      {/* <AboutUsSection /> */}
      <AdvertSection lang={lang} />
      <BlogsSection lang={lang} />
      <PartnersSection lang={lang} />
    </main>

    <Footer lang={lang} />
    </>
  );
}
