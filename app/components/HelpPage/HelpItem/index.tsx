import type { HelpItemType } from "~/config";
import { ClipPathPanel } from "~/elements";
import type { Language } from "~/Types";

type HelpItemProps = {
  item: HelpItemType;
  lang: Language;
  onClick: () => void;
  activeItemId?: number;
};

export const HelpItem = ({ item, lang, activeItemId, onClick }: HelpItemProps) => {
  const disableClick = typeof activeItemId === "number" && activeItemId !== item.id;

  let dynamicWrapperClass = "cursor-pointer hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] group";
  if (disableClick) {
    dynamicWrapperClass = "sm:blur-[5px] sm:bg-[#ddd] sm:cursor-default";
  }

  return (
    <div
      onClick={disableClick ? () => {} : onClick}
      className={`${dynamicWrapperClass} shadow-[0_4px_10px_rgba(0,0,0,0.05)] mb-6 p-6 flex flex-col h-full transition-shadow duration-300 ease-in-out rounded-sm`}
    >
      <ClipPathPanel width="w-20" height="h-20">{item.icon}</ClipPathPanel>
      <h3 className="font-medium text-lg mt-4 min-h-15">
        {item.title[lang]}
      </h3>
      <h4 className="mt-4 text-gray-600 flex-grow">
        {item.description[lang]}
      </h4>
      <p className="flex justify-end">
        <img 
          src="/assets/images/arrow-right.svg" 
          alt="to help" 
          className="w-10 transition-all group-hover:scale-[1.2] transform duration-300" 
        />
      </p>
    </div>
  );
};