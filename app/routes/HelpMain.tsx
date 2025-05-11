import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router";
import { Header, Footer, HelpItem, HelpDetails } from "~/components";
import { helpItems, type HelpItemType } from "~/config";
import type { Language } from "~/Types";

interface ItemRefs {
  [key: string]: HTMLDivElement | null;
}

export default function HelpMain({ lang = "hy" }: { lang: Language }) {
  const itemRefs = useRef<ItemRefs>({});
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
  }, [hasActive, active])

  return (
    <>
      <Header lang={lang} />

      <main className="bg-[#fafafa]">
        <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
          <div className="container mx-auto items-center flex h-full px-4">
            <h2 className="text-white font-bold text-3xl md:text-4xl uppercase">Ի՞նչ անել, եթե…</h2>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="help-items md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6"
            >
              {helpItems.map((item) => (
                <div key={item.id.toString()} className="md:relative" ref={(el: HTMLDivElement | null) => { itemRefs.current[item.id] = el; }}>
                  <HelpItem
                    item={item}
                    activeItemId={hasActive ? Number(active) : undefined}
                    lang="hy"
                    onClick={() => handleItemClick(item)}
                  />

                  <div className={`help-options max-md:hidden absolute top-[calc(100%-80px)] h-auto z-1 w-full ${(hasActive && Number(active) === item.id) ? "" : "hidden"}`}>
                    <HelpDetails options={item.options} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}
