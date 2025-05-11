import type { Route } from "../routes/+types/resources";
import { metadata } from "~/routes";
import type { Language } from "~/Types";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.resources[lang];
}

export default function Resources() {
  return (
    <>
    <main>
    </main>
    </>
  );
}
