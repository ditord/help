import { Link, Outlet, useLocation } from "react-router";
import { ClipPathPanel } from "~/elements";
import { helpItems, type HelpItemType } from "~/config";
import { useWindowStore, useCaseTabStore, type UserType } from "~/store";
import type { Language } from "~/Types";
import { useEffect, useRef, useState } from "react";

interface ItemRefs {
  [key: string]: HTMLDivElement | null;
}

export default function HelpDetailsLayout() {
  const isMobile = useWindowStore(store => store.isMobile);
  const activeTab = useCaseTabStore(store => store.activeTab);
  const [selectedTab, setSelectedTab] = useState('');
  const setActiveTab = useCaseTabStore(store => store.setActiveTab);
  const { pathname } = useLocation();
  const itemRefs = useRef<ItemRefs>({});

  const match = pathname.match(/\/(\w+)\/help\/(\w+)\/case-(\d+)\.(\d+)/);

  const lang = match ? match[1] as Language : "hy";
  const userType = match ? match[2] as UserType : "child";
  const caseId = match ? parseInt(match[3], 10) : 1;
  const optionId = match ? parseInt(match[4], 10) : 1;

  const helpItem = helpItems.find(item => item.id === caseId);

  const handleItemClick = (item?: HelpItemType) => {
    if (helpItems[helpItems.length - 1].id === item?.id) {
      const targetElement = document.getElementById('contact');
      const elementTop = targetElement?.offsetTop || 0;
      const scrollPosition = elementTop - 40;

      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
      });
      return;
    }
    if (selectedTab === item?.id?.toString()) {
      setSelectedTab('')
    } else {
      setSelectedTab(item?.id?.toString() || "");
    }
    console.log(item?.id);
  };

  const hasActive = helpItems.some(item => item.id.toString() === selectedTab);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (selectedTab && itemRefs.current[selectedTab]) {
        if (!itemRefs.current[selectedTab].contains(event.target as Node)) {
          setSelectedTab('');
        }
      }
    };

    if (hasActive) {
      document.addEventListener('mouseup', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mouseup', handleClickOutside);
    };
  }, [hasActive, selectedTab]);

  return (
    <main>
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl uppercase">Ի՞նչ անել, եթե…</h2>
        </div>
      </div>

      <div className="flex max-lg:flex-col mb-20 lg:mt-14 mt-0">
        <div className="px-4 lg:pl-8 xl:pr-10 xl:pl-14">
          <div className="h-25 flex items-center max-lg:justify-center">
            <Link
              to={`${lang}/help`}
              className="px-4 py-2 text-center text-lg font-light text-[#5188D7] flex gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                <path d="M19 12.5H5" stroke="#5188D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19.5L5 12.5L12 5.5" stroke="#5188D7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              դեպքեր
            </Link>
          </div>
          <div className="flex-col gap-3 mt-10 lg:flex hidden">
            {
              helpItems.map(item =>
                <div
                  className={`relative ${item.id === caseId ? "h-22 w-22" : "h-18 w-18"}`}
                  key={item.id}
                  ref={(el: HTMLDivElement | null) => { itemRefs.current[item.id] = el; }}
                >
                  <div className="group cursor-pointer">
                    <div
                      className={`absolute inset-0 ${item.id === caseId || Number(selectedTab) === item.id ? "hidden" : "block group-hover:hidden"}`}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.iconInactive}
                    </div>
                    <div
                      className={`absolute inset-0 ${item.id === caseId || Number(selectedTab) === item.id ? "block" : "hidden group-hover:block"}`}
                      onClick={() => handleItemClick(item)}
                    >
                      {item.iconActive}
                    </div>
                    {
                      (!hasActive ||  Number(selectedTab) !== item.id) ?
                        <div className="absolute left-full top-1/2 -translate-y-1/2 ml-2 w-max bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-100 whitespace-nowrap z-10">
                          {item.title[lang]}
                        </div> : null
                    }
                  </div>
                  {
                    (!isMobile && (hasActive && Number(selectedTab) === item.id)) ?
                      <div
                        className="z-1 absolute left-full top-1/2 -translate-y-1/2 ml-2 shadow-md w-100 p-6 flex flex-col gap-5 transition-shadow duration-300 ease-in-out rounded-sm bg-white"
                      >
                        <h2 className="text-md font-bold">{item.title[lang]}</h2>
                        {
                          item.options.map((option, index) =>
                            <h3 className="text-md" key={option.id}>
                              Զարգացում {index + 1}
                              <Link
                                to={`/${lang}/help/${userType}/case-${selectedTab}.${option.id}`}
                                onClick={() => { setSelectedTab(''); setActiveTab("tec"); }}
                                preventScrollReset
                                className={`flex justify-between gap-2 cursor-pointer text-[#5A8FDC] hover:underline group ${Number(selectedTab) === caseId && optionId === option.id ? "pointer-events-none" : ""}`}
                              >
                                {option.text}
                                <img
                                  src="/assets/images/arrow-right.svg"
                                  alt="to help" 
                                  className="w-8 transition-all group-hover:scale-[1.2] transform duration-300" 
                                />
                              </Link>
                            </h3>
                          )
                        }
                      </div>: null
                  }
                </div>
              )
            }
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 md:pr-8 xl:pr-14">
          <div className="flex gap-5">
            <ClipPathPanel width="md:min-w-25 md:max-w-25 min-w-18 max-w-18" height="md:min-h-25 md:max-h-25 min-h-18 max-h-18">
              <div className="md:scale-120">
                {helpItem?.icon}
              </div>
            </ClipPathPanel>
            <div>
              <h1 className="md:text-3xl text-2xl font-bold">{helpItem?.title[lang]}</h1>
              <h2 className="md:text-xl text-lg font-medium mt-3">{helpItem?.options.find(option => option.id === optionId)?.text}</h2>
            </div>
          </div>
          
          <div className="flex md:justify-end justify-center">
            <div className="mt-4">
              <p className="text-center text-lg font-light text-[#6D6D6D] pt-2">Հարցնում եմ որպես։</p>
              <div className="flex mt-2">
                <Link
                  to={`/${lang}/help/child/case-${caseId}.${optionId}`}
                  className={`px-4 py-2 text-center text-lg font-medium rounded-l-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "child" ? "pointer-events-none bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
                >
                  երեխա / դեռահաս
                </Link>

                <Link
                  to={`/${lang}/help/parent/case-${caseId}.${optionId}`}
                  className={`px-4 py-2 text-center text-lg font-medium rounded-r-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "parent" ? "pointer-events-none bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
                >
                  ծնող / խնամակալ
                </Link>
              </div>
            </div>
          </div>

          <div className="w-full mt-5 bg-[#FAFAFA] lg:p-10 p-4 flex xl:flex-row flex-col gap-10">
            <div className="flex-1 h-256 min-h-256 flex-col flex">
              <div className="flex relative -bottom-[1px]">
                <button
                  onClick={() => setActiveTab("tec")}
                  className={`md:px-5 py-3 px-2 cursor-pointer flex gap-2 font-medium text-[#5188D7] hover:bg-white rounded-t-md border-t border-l border-r ${activeTab === "tec" ? "bg-white border-[#8E8E93]" : "border-transparent max-md:border-[#8E8E93]"}`}
                >
                  <img src="/assets/images/help-sections/technical.svg" alt="technical" className="w-5" />
                  <span className={activeTab === "tec" ? "" : "max-md:hidden"}>ՏԵԽՆԻԿԱԿԱՆ ԼՈՒԾՈՒՄ</span>
                </button>
                <button
                  onClick={() => setActiveTab("leg")}
                  className={`md:px-5 py-3 px-2 cursor-pointer flex gap-2 font-medium text-[#5188D7] hover:bg-white rounded-t-md border-t border-l border-r ${activeTab === "leg" ? "bg-white border-[#8E8E93]" : "border-transparent max-md:border-[#8E8E93]"}`}
                >
                  <img src="/assets/images/help-sections/legal.svg" alt="legal" className="w-5" />
                  <span className={activeTab === "leg" ? "" : "max-md:hidden"}>ԻՐԱՎԱԿԱՆ ԼՈՒԾՈՒՄ</span>
                </button>
                <button
                  onClick={() => setActiveTab("psy")}
                  className={`md:px-5 py-3 px-2 cursor-pointer flex gap-2 font-medium text-[#5188D7] hover:bg-white rounded-t-md border-t border-l border-r ${activeTab === "psy" ? "bg-white border-[#8E8E93]" : "border-transparent max-md:border-[#8E8E93]"}`}
                >
                  <img src="/assets/images/help-sections/psychological.svg" alt="psychological" className="w-5" />
                  <span className={activeTab === "psy" ? "" : "max-md:hidden"}>ՀՈԳԵԲԱՆԱԿԱՆ ԼՈՒԾՈՒՄ</span>
                </button>
              </div>
              <div className="flex-1 h-full border border-[#8E8E93] bg-white overflow-hidden">
                <Outlet />
              </div>
            </div>
            <div className="2xl:w-60 xl:w-50 flex xl:flex-col md:flex-row flex-col gap-10 xl:mt-12">
              <iframe className="aspect-[9/16] 2xl:w-60 xl:w-50 md:w-1/2" src="https://www.youtube.com/embed/sypdBtiH02E" title="YouTube video player" />
              <iframe className="aspect-[9/16] 2xl:w-60 xl:w-50 md:w-1/2" src="https://www.youtube.com/embed/sypdBtiH02E" title="YouTube video player" />
            </div>
          </div>
          {/* <div className="mt-10">
            <span>Եթե դեռ ունես հարցեր, կապ հաստատիր մեզ հետ։</span>
          </div> */}
        </div>
      </div>
    </main>
  );
}