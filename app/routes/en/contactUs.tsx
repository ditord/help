import type { Route } from "../../routes/en/+types/contactUs";
import ContactUsMain from "../ContactUsMain";
import { metadata } from "~/routes";
import type { Language } from "~/Types";

const lang: Language = "en";

export function meta({}: Route.MetaArgs) {
  return metadata.contactUs[lang];
}

export default function ContactUs() {
  return (
    <ContactUsMain lang={lang} />
  );
}
