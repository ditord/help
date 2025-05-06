import { type RouteConfig, route } from "@react-router/dev/routes";

export const metadata = {
  home: {
    hy: [
      { title: "CyberHUB-AM — Դեռահասների կիբեռաջակցություն հարթակ" },
      // { name: "description", content: "Welcome to React Router!" },
    ],
    en: [
      { title: "CyberHUB-AM — Դեռահասների կիբեռաջակցություն հարթակ" },
      // { name: "description", content: "Welcome to React Router!" },
    ]
  },
  aboutUs: { hy: [], en: [] },
  help: { hy: [], en: [] },
  blogs: { hy: [], en: [] },
  contactUs: { hy: [], en: [] },
};

export default [
  route("hy", "routes/hy/home.tsx"),
  route("en", "routes/en/home.tsx"),

  route("hy/about-us", "routes/hy/aboutUs.tsx"),
  route("en/about-us", "routes/en/aboutUs.tsx"),

  route("hy/help", "routes/hy/help.tsx"),
  route("en/help", "routes/en/help.tsx"),

  route("hy/blogs", "routes/hy/blogs.tsx"),
  route("en/blogs", "routes/en/blogs.tsx"),

  route("hy/contact-us", "routes/hy/contactUs.tsx"),
  route("en/contact-us", "routes/en/contactUs.tsx"),
] satisfies RouteConfig;
