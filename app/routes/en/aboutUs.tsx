import type { Route } from "../../routes/en/+types/aboutUs";
import AboutUsMain from "../AboutUsMain";
import type { Language } from "~/Types";
import { metadata } from "~/routes";

const lang: Language = "en";

export function meta({}: Route.MetaArgs) {
  return metadata.aboutUs[lang];
}

export default function AboutUs() {
  return (
    <AboutUsMain lang={lang} />
  );
}
