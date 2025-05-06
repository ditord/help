import type { Route } from "../../routes/hy/+types/aboutUs";
import { metadata } from "~/routes";
import type { Language } from "~/Types";
import AboutUsMain from "../AboutUsMain";

const lang: Language = "hy";

export function meta({}: Route.MetaArgs) {
  return metadata.aboutUs[lang];
}

export default function AboutUs() {
  return (
    <AboutUsMain lang={lang} />
  );
}
