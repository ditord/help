import type { Route } from "../routes/+types/home";
import metadata from "~/metadata";
import { useLocation } from "react-router";
import { HeroSection, PartnersSection, AdvertSection, BlogsSection, HelpSection } from "~/components";
import type { Language } from "~/Types";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.home[lang];
}

export default function Home() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";

  return (
    <main>
      <HeroSection lang={lang} />
      <HelpSection lang={lang} />
      <div className="relative after-shape" />
      {/* <AboutUsSection /> */}
      <AdvertSection lang={lang} />
      <BlogsSection lang={lang} />
      <PartnersSection lang={lang} />
    </main>
  );
}
