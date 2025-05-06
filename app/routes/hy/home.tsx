import type { Route } from "../../routes/hy/+types/home";
import { metadata } from "~/routes";
import type { Language } from "~/Types";
import HomeMain from "../HomeMain";

const lang: Language = "hy";

export function meta({}: Route.MetaArgs) {
  return metadata.home[lang];
}

export default function Home() {
  return (
    <HomeMain lang={lang} />
  );
}
