import { Header, Footer, HelpItem } from "~/components";
import { helpItems, type HelpItemType } from "~/config";
import type { Language } from "~/Types";

export default function HelpMain({ lang = "hy" }: { lang: Language }) {
  const handleItemClick = (item: HelpItemType) => {
  };

  return (
    <>
      <Header lang={lang} />

      <main className="bg-[#fafafa]">
        <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
          <div className="container mx-auto items-center flex h-full px-4">
            <h2 className="text-white font-bold text-3xl md:text-4xl">Ի՞նչ անել, եթե…</h2>
          </div>
        </div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
              {helpItems.map((item, index) => (
                <HelpItem 
                  key={index} 
                  item={item} 
                  lang="hy"
                  onClick={() => handleItemClick(item)}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}