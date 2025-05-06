import type { Route } from "../../routes/en/+types/help";
import HelpMain from "../HelpMain";
import { metadata } from "~/routes";
import type { Language } from "~/Types";

const lang: Language = "en";

export function meta({}: Route.MetaArgs) {
  return metadata.help[lang];
}

export default function Help() {
  return (
    <HelpMain lang={lang} />
  );
}
