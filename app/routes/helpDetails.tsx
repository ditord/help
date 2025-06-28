import type { Route } from "../routes/+types/helpDetails";
import metadata from "~/metadata";
import { useLoaderData, useNavigate } from "react-router";
import { json } from "@remix-run/node";
import { useCaseTabStore } from "~/store";
import { getStaticHelpContent } from "~/helpDetailsData/helpDetailsUtils";
import { useEffect } from "react";
import dictionary from "~/dictionary.json";
import { Tooltip } from "~/helpers";


export function meta({ location }: Route.MetaArgs) {
  const pathMatch = location.pathname.match(/\/(\w+)\/help\/(\w+)\/case-(\d+)\.(\d+)/);
  if (!pathMatch) {
    return undefined;
  }
  const [_, lang, userType, caseIdStr, optionIdStr] = pathMatch;
  
  const key = `${userType}/case-${caseIdStr}.${optionIdStr}`

  return (metadata as Record<string, Record<string, any>>)[key]?.[lang];
}

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

  return json({ content, lang, caseId, optionId, userType });
}

export default function HelpDetails() {
  const navigate = useNavigate();
  const activeTab = useCaseTabStore(store => store.activeTab);
  const { content, lang, caseId, optionId, userType } = 
  useLoaderData<{ 
    content?: any
    lang: string;
    caseId: number;
    optionId: number;
    userType: string;
  }>();

  useEffect(() => {
    const container = document.getElementById('case-content');
    container?.scrollTo({ top: 0 });
		const links = container?.querySelectorAll('a');
    if (links) {
      links.forEach(link => {
        if (link.href && link.href.startsWith('to:')) {
          const newLink = link.href.replace('to:', `/${lang}`);
          link.href = newLink;
          link.addEventListener('click', (e) => {
            e.preventDefault();
            navigate(newLink, { preventScrollReset: true });
          });
        } else {
          link.target = '_blank';
          link.rel = 'noopener noreferrer';
        }
      });
    }
    const dictionaryWords = container?.querySelectorAll('[data-title]');
    dictionaryWords?.forEach(word => {
      const title = word.getAttribute('data-title');
      const description = dictionary.find((item: any) => item.word === title)?.description || '';
      word.classList.add('cursor-help');
      (word as HTMLElement).style.color = '#0662a2';
      (word as HTMLElement).style.textDecoration = 'none';
      (word as HTMLElement).style.fontWeight = 'bold';
      if (description) new Tooltip(word as HTMLElement, description);
    })
  }, [activeTab, caseId, optionId, lang, userType]);

  return (
    <div className="w-full h-full flex flex-col">
      {content[activeTab] && content[activeTab].navigation ? (
        <div className="py-3 px-5">
          <div
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: content[activeTab] && content[activeTab].navigation }}
          />
        </div>
        ) : null
      }
      <main id="case-content" className="overflow-x-hidden overflow-y-scroll h-full px-5 py-4">
        <div
          className="prose max-w-none"
          dangerouslySetInnerHTML={{ __html: content[activeTab] && content[activeTab].text }}
        />
      </main>
    </div>
  );
}
