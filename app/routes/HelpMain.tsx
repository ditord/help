import { Header, Footer } from "~/components";
import type { Language } from "~/Types";


export default function HelpMain({ lang }: { lang: Language }) {
  return (
    <>
    <Header lang={lang} />

    <main>
    </main>

    <Footer lang={lang} />
    </>
  );
}
