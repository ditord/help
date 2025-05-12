import { Link, Outlet, useLocation } from "react-router";
import { ClipPathPanel } from "~/elements";
import { helpItems } from "~/config";
import type { UserType } from "~/store";
import type { Language } from "~/Types";

export default function HelpDetailsLayout() {
  const { pathname } = useLocation();

  const match = pathname.match(/\/(\w+)\/help\/(\w+)\/case-(\d+)\.(\d+)/);

  const lang = match ? match[1] as Language : "hy";
  const userType = match ? match[2] as UserType : "child";
  const caseId = match ? parseInt(match[3], 10) : 1;
  const optionId = match ? parseInt(match[4], 10) : 1;

  const helpItem = helpItems.find(item => item.id === caseId);
  const option = helpItem?.options.find(opt => opt.id === optionId);

  return (
    <main>
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl uppercase">Ի՞նչ անել, եթե…</h2>
        </div>
      </div>

      <div className="flex my-20">
        <div className="pr-4 pl-8 xl:pr-10 xl:pl-14 md:block hidden">
          <div className="h-25 flex items-center">
            <Link
              to={`${lang}/help`}
              className="px-4 py-2 text-center text-lg font-light text-[#5188D7] bg-[#EFF1F3] transition-colors duration-300 block"
            >
              Դեպքեր
            </Link>
          </div>
          <div className="flex flex-col gap-3 mt-10">
            {
              helpItems.map(item =>
                <div className="cursor-pointer" key={item.id}>
                  <ClipPathPanel width="w-20" height="h-20">{item.icon}</ClipPathPanel>
                </div>
              )
            }
          </div>
        </div>

        <div className="flex flex-1 flex-col px-4 md:pr-8 xl:pr-14">
          <div className="flex gap-5">
            <ClipPathPanel width="min-w-25 max-w-25" height="min-h-25 max-h-25 md:block hidden">
              <div className="scale-120">
                {helpItem?.icon}
              </div>
            </ClipPathPanel>
            <div>
              <h1 className="md:text-3xl text-2xl font-bold">{helpItem?.title[lang]}</h1>
              <h2 className="md:text-xl text-lg font-medium mt-3">{helpItem?.description[lang]}</h2>
            </div>
          </div>
          
          <div className="flex justify-end">
            <div className="mt-4">
              <p className="text-center text-lg font-light text-[#6D6D6D] pt-2">Հարցնում եմ որպես։</p>
              <div className="flex mt-4">
                <Link
                  to={`/${lang}/help/child/case-${caseId}.${optionId}`}
                  className={`px-4 py-2 text-center text-lg font-medium rounded-l-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "child" ? "bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
                >
                  երեխա / դեռահաս
                </Link>

                <Link
                  to={`/${lang}/help/parent/case-${caseId}.${optionId}`}
                  className={`px-4 py-2 text-center text-lg font-medium rounded-r-sm transition-colors duration-300 whitespace-nowrap cursor-pointer ${userType === "parent" ? "bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white" : "text-[#5188D7] bg-[#FAFAFA] hover:bg-[#EFF1F3]"}`}
                >
                  ծնող / խնամակալ
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>


      <Outlet />
    </main>
  );
}