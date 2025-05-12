import { Outlet, useLocation } from "react-router";
import type { Language } from "~/Types";

export default function HelpDetailsLayout() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";

  return (
    <>
    <Outlet />
    </>
  );
}