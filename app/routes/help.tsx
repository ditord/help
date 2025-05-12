import type { Route } from "../routes/+types/help";
import { metadata } from "~/routes";
import { useEffect, useRef, useState, type MouseEvent as MouseEventReact } from "react";
import { useSearchParams, useLocation } from "react-router";
import { UserTypePopup, HelpItem, HelpDetails } from "~/components";
import { helpItems, type HelpItemType } from "~/config";
import { useUserStore, useWindowStore } from "~/store";
import type { Language } from "~/Types";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.help[lang];
}

interface ItemRefs {
  [key: string]: HTMLDivElement | null;
}

export default function Help() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";
  const itemRefs = useRef<ItemRefs>({});
  const [link, setLink] = useState(["", ""]);
  const { userType, setUserType } = useUserStore();
  const isMobile = useWindowStore(store => store.isMobile);
  const [searchParams, setSearchParams] = useSearchParams();
  const active = searchParams.get('active');

  
  const handleItemClick = (item?: HelpItemType) => {
    const newParams = new URLSearchParams(searchParams);

    if (active === item?.id?.toString()) {
      newParams.delete("active");
    } else {
      newParams.set('active', item?.id?.toString() || "");
    }
    setSearchParams(newParams, { replace: true, preventScrollReset: true });
  };

  const handleLinkClick = (e: MouseEventReact<HTMLAnchorElement>, linkEnd: string) => {
    if (!userType) {
      const newParams = new URLSearchParams(searchParams);
      newParams.delete("active");
      setSearchParams(newParams, { replace: true, preventScrollReset: true });
      e.preventDefault();
      const element = e.target as HTMLAnchorElement;
      setLink([element.href, linkEnd]);
    }
  };

  const hasActive = typeof active === "string" && helpItems.some(item => item.id.toString() === active);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (active && itemRefs.current[active]) {
        if (!itemRefs.current[active].contains(event.target as Node)) {
          const newParams = new URLSearchParams(searchParams);
          newParams.delete("active");
          setSearchParams(newParams, { replace: true, preventScrollReset: true });
        }
      }
    };

    if (hasActive) {
      document.addEventListener('mouseup', handleClickOutside);
      const element = document.getElementById(`case-${active}`);
      if (element) {
        const yOffset = -100;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [hasActive, active]);

  return (
    <main className="bg-white">
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl uppercase">Ի՞նչ անել, եթե…</h2>
        </div>
      </div>

      <p className="text-center text-xl font-bold mt-4 px-4">Ումի՞ց է հարցը</p>
      <p className="text-center text-lg font-light px-4 text-[#6D6D6D] pt-2">Նշիր ճիշտ տարբերակը։ Քո պատասխանը կօգնի մեզ աջակցել ճիշտ ձևով։</p>
      <div className="flex justify-center px-4 mt-4">
        <button
          onClick={() => setUserType('child')}
          className={`px-4 py-2 text-center text-lg font-medium rounded-l-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "child" ? "bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
        >
          երեխա / դեռահաս
        </button>

        <button
          onClick={() => setUserType('parent')}
          className={`px-4 py-2 text-center text-lg font-medium rounded-r-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "parent" ? "bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
        >
          ծնող / խնամակալ
        </button>
      </div>

      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4">
          <div className="help-items md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
          >
            {helpItems.map((item) => (
              <div key={item.id.toString()} className="md:relative" ref={(el: HTMLDivElement | null) => { itemRefs.current[item.id] = el; }}>
                <HelpItem
                  userType={userType}
                  item={item}
                  activeItemId={hasActive ? Number(active) : undefined}
                  lang={lang}
                  onClick={() => isMobile ? null : handleItemClick(item)}
                  onLinkClick={handleLinkClick}
                />

                {
                  (!isMobile && (hasActive && Number(active) === item.id)) ?
                    <div className="help-options max-md:hidden absolute top-[calc(100%-80px)] h-auto z-1 w-full">
                      <HelpDetails
                        itemId={item.id}
                        options={item.options}
                        onLinkClick={handleLinkClick}
                        lang={lang}
                        userType={userType}
                      />
                    </div> : null
                }
              </div>
            ))}
          </div>
        </div>
      </section>

      {
        (!userType && link[0] && link[1]) ?
          <UserTypePopup link={link} /> :
          null
      }
    </main>
  );
}
