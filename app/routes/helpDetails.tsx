// import type { Route } from "../routes/+types/helpDetails";
// import { metadata } from "~/routes";
import { useLoaderData } from "react-router";
import { json } from "@remix-run/node";
import type { UserType } from "../store";
import type { Language } from "../Types";
import { helpItems } from "../config";
import { getStaticHelpContent } from "../helpDetailsData/helpDetailsUtils";

// export function meta({ location }: Route.MetaArgs) {
//   const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

//   return metadata.helpDetails[lang];
// }

export async function loader({ request }: { request: Request }) {
  const url = new URL(request.url);
  const path = url.pathname;
  const pathMatch = path.match(/\/(\w+)\/help\/(\w+)\/case-(\d+)\.(\d+)/);
  
  if (!pathMatch) {
    return json({ error: "Invalid path format" }, { status: 404 });
  }

  const [_, lang, userType, caseIdStr, optionIdStr] = pathMatch;
  const caseId = parseInt(caseIdStr, 10);
  const optionId = parseInt(optionIdStr, 10);

  const content = getStaticHelpContent(userType, caseId, optionId);

  if (!content) {
    return json({ error: "Content not found" }, { status: 404 });
  }

  return json({ content });
}

export default function HelpDetails() {
  const { content, lang, userType, caseId, optionId, error } = 
  useLoaderData<{ 
    content?: any,
    lang: Language, 
    userType: UserType, 
    caseId: number, 
    optionId: number,
    error?: string 
  }>();

  const helpItem = helpItems.find(item => item.id === caseId);
  const option = helpItem?.options.find(opt => opt.id === optionId);

  return (
    <>
    <main>
      {content?.metadata?.description}
    </main>
    </>
  );
}
