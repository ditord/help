import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from "react-router";
import { Header, Footer } from "~/components";
import type { Language } from "~/Types";


export default function MainLayout() {
  const location = useLocation();
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  useEffect(() => {
    const handleHashScroll = () => {
      if (location.hash) {
        const elementId = location.hash.substring(1);

        const targetElement = document.getElementById(elementId);

        if (targetElement) {
          const elementTop = targetElement.offsetTop;
          const scrollPosition = elementTop - 40;

          window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
          });

          const newUrl = window.location.pathname + window.location.search;
          window.history.replaceState(null, '', newUrl);
        }
      }
    };

    handleHashScroll();
  }, [location.hash, location.pathname, location.search]);

  return (
    <>
    <Header lang={lang} />

    <Outlet />

    <Footer lang={lang} />
    </>
  );
}