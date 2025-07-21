import { Link } from "react-router";
import { WhatsappIcon, TelegramIcon } from "~/elements";
import { mainContacts, helpContacts } from "~/config";
import type { Language } from "~/Types";

export const HeaderTop = ({ lang = "hy" }: { lang?: Language }) => {
  return (
    <div className="hidden lg:flex bg-white h-[62px] px-4 border-b border-black/10 transition duration-500 items-center">
      <div className="mx-auto px-3.5 w-full">
        <div className="flex">
          <div className="w-full flex justify-between">
            <div className="flex space-x-6 text-gray-600 text-sm font-light leading-6">
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={mainContacts.mail.link}
                className="pl-9 bg-[url('/assets/images/mail_header.svg')] bg-no-repeat bg-[length:24px_24px] bg-left flex items-center"
              >
                {mainContacts.mail.text[lang]}
              </Link>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                to={mainContacts.phone.link}
                className="pl-9 bg-[url('/assets/images/phone_header.svg')] bg-no-repeat bg-[length:24px_18px] bg-left flex items-center"
              >
                {mainContacts.phone.text[lang]}
              </Link>

              {/* <Link target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" to={helpContacts.phone.link}>
                <span className="text-gray-600">{texts[lang].emergency}</span>
                <PhoneIcon className="text-[#8E8E93] w-7.5 h-7.5" />
                <span className="text-gray-600">{helpContacts.phone.text[lang]}</span>
              </Link> */}
              <Link target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" to={helpContacts.whatsappPhone.link}>
                <WhatsappIcon className="text-[#8E8E93] w-7.5 h-7.5" />
                <span>{helpContacts.whatsappPhone.text[lang]}</span>
              </Link>
              <Link target="_blank" rel="noopener noreferrer" className="flex items-center gap-2" to={helpContacts.telegramAnonChat.link}>
                <TelegramIcon className="text-[#8E8E93] w-7.5 h-7.5" />
                <span>{helpContacts.telegramAnonChat.text[lang]}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
