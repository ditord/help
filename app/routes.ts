import { type RouteConfig, route, layout } from "@react-router/dev/routes";

export const metadata = {
  home: {
    hy: [
      { title: "CyberHUB-AM — Դեռահասների կիբեռաջակցություն հարթակ" },
      // { name: "description", content: "Welcome to React Router!" },
    ],
    en: [
      { title: "CyberHUB-AM — Դեռահասների կիբեռաջակցություն հարթակ" },
      // { name: "description", content: "Welcome to React Router!" },
    ],
  },
  aboutUs: { hy: [], en: [] },
  help: { hy: [], en: [] },
  resources: { hy: [], en: [] },
};

export default [
  layout("layouts/mainLayout.tsx", [
    { path: "hy", id: "hy-home", file: "routes/home.tsx" },
    { path: "en", id: "en-home", file: "routes/home.tsx" },

    { path: "hy/about-us", id: "hy-about-us", file: "routes/aboutUs.tsx" },
    { path: "en/about-us", id: "en-about-us", file: "routes/aboutUs.tsx" },

    { path: "hy/help", id: "hy-help", file: "routes/help.tsx" },
    { path: "en/help", id: "en-help", file: "routes/help.tsx" },

    { path: "hy/resources", id: "hy-resources", file: "routes/resources.tsx" },
    { path: "en/resources", id: "en-resources", file: "routes/resources.tsx" },
  ]),

] satisfies RouteConfig;
