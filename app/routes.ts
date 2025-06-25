import { type RouteConfig, layout } from "@react-router/dev/routes";
import { helpItems } from "./config";

type RouteEntryWithPath = {
  path: string;
  id: string;
  file: string;
  loader?: any;
};

export default [
  layout("layouts/mainLayout.tsx", [
    ...["hy", "en"].reduce<RouteEntryWithPath[]>(
      (a, lang) => {
        a.push({ path: lang, id: `${lang}-home`, file: "routes/home.tsx" });
        a.push({ path: `${lang}/about-us`, id: `${lang}-about-us`, file: "routes/aboutUs.tsx" });
        a.push({ path: `${lang}/help`, id: `${lang}-help`, file: "routes/help.tsx" });
        a.push({ path: `${lang}/resources`, id: `${lang}-resources`, file: "routes/resources.tsx" });
        return a;
      }, 
      []
    ),

    layout("layouts/helpDetailsLayout.tsx", [
      ...["hy", "en"].reduce<RouteEntryWithPath[]>(
        (a, lang) => {
          ["child", "parent"].forEach(userType => {
            helpItems.forEach(helpItem => {
              if (helpItem.id !== 8) {
                helpItem.options.forEach(option => {
                  a.push({
                    path: `${lang}/help/${userType}/case-${helpItem.id}.${option.id}`,
                    id: `${lang}-${userType}-${helpItem.id}-${option.id}`,
                    file: "routes/helpDetails.tsx",
                  });
                });
              }
            });
          });
          return a;
        }, 
        []
      ),
    ]),
  ]),

] satisfies RouteConfig;
