import { Outlet, useLocation } from "react-router";
import { Header, Footer } from "~/components";
import type { Language } from "~/Types";

export default function MainLayout() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";

  return (
    <>
    <Header lang={lang} />

    <Outlet />

    <Footer lang={lang} />
    </>
  );
}