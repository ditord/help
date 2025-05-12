import type { MouseEvent } from "react";
import { Link } from "react-router";
import type { HelpItemOptionType } from "~/config";
import { type UserType } from "~/store";
import type { Language } from "~/Types";

type HelpItemProps = {
  options: HelpItemOptionType[];
  lang: Language;
  onLinkClick: (e: MouseEvent<HTMLAnchorElement>, linkEnd: string) => void;
  itemId: number;
  userType: UserType;
};

export const HelpDetails = ({ options, onLinkClick, itemId, userType, lang }: HelpItemProps) => {
  const link = userType ? `${userType}/` : "";

  return (
    <div
      className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] p-6 flex flex-col gap-5 transition-shadow duration-300 ease-in-out rounded-sm w-full bg-white"
    >
      {
        options.map((option, index) =>
          <h3 className="text-md group" key={option.id}>
            Զարգացում {index + 1}
            <Link
              to={userType ? `/${lang}/help/${userType}/case-${itemId}.${option.id}` : `/${lang}/help/`}
              onClick={e => onLinkClick(e, `/case-${itemId}.${option.id}`)}
              className="flex justify-between gap-2 cursor-pointer text-[#5A8FDC] hover:underline"
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
    </div>
  );
};