import type { HelpItemType } from "~/config";
import { ClipPathPanel } from "~/elements";
import type { Language } from "~/Types";

type HelpItemProps = {
  item: HelpItemType;
  lang: Language;
  onClick: () => void;
};

export const HelpItem = ({ item, lang, onClick }: HelpItemProps) => {
  return (
    <div 
      onClick={onClick}
      className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] 
                 bg-white mb-6 p-6 flex flex-col h-full group cursor-pointer 
                 transition-shadow duration-300 ease-in-out rounded-sm"
    >
      <ClipPathPanel width="w-20" height="h-20">{item.icon}</ClipPathPanel>
      <h3 className="font-medium text-lg mt-4 min-h-15">
        {item.title[lang]}
      </h3>
      <h4 className="mt-4 text-gray-600 flex-grow">
        {item.description[lang]}
      </h4>
      <div className="flex justify-end">
        <img 
          src="/assets/images/arrow-right.svg" 
          alt="to help" 
          className="w-10 transition-all group-hover:scale-[1.2] transform duration-300" 
        />
      </div>
    </div>
  );
};