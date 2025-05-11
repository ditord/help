import { Copyright } from "./Copyright";
import { ClipPathPanel } from "~/elements";
import MuiPhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router";
import { mainContacts, helpContacts } from "~/config";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Հետադարձ կապ",
    buttonDescription1: "Թեժ գիծ",
    buttonDescription2: "WhatsApp զանգ",
    buttonDescription3: "WhatsApp չատ",
    buttonDescription4: "ԿիբեռՉատ",
    findUsSocial: "Գտիր մեզ առցանց",
    connectionInfo: "Մեզ կարող եք գրել էլ֊փոստով, կամ տոմս բացելով մեր աջակցության հարթակում կամ էլ զանգելով/գրելով մեզ Signal/Telegram/Whatsapp հավելվածներով։",
    pgpInfo: "Օգտագործեք հետևյալ PGP բանալին՝ գաղտնագրված նամակագրության համար։",
    pgpLink: "Ներբեռնել բանալին",
  },
  en: {
    title: "Contact us",
    buttonDescription1: "Hotline",
    buttonDescription2: "WhatsApp Call",
    buttonDescription3: "WhatsApp Chat",
    buttonDescription4: "Write to the chatbot anonymously",
    findUsSocial: "Find us online",
    connectionInfo: "Feel free to contact us by E-mail or by opening a ticket at our help-desk or by contacting us via Phone/Signal/Telegram/Whatsapp:",
    pgpInfo: "Use the following PGP key for encrypted correspondence",
    pgpLink: "Download key:",
  },
};

export const Footer = ({ lang = "hy" }: { lang?: Language }) => {
  return (
    <footer className="bg-[#fafafa]">
      <section id="contact" className="py-21">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-15 text-center">{texts[lang].title}</h2>
          <div className="mb-16">
            <div className="flex max-lg:flex-wrap justify-center lg:gap-6">
              <Link
                className="transform duration-300 hover:shadow-md scale-[0.9] hover:scale-[1] flex flex-col items-center justify-center gap-4 rounded-sm shadow-xs bg-white border-[#2B2B30] w-70 h-70"
                to={helpContacts.phone.link}
              >
                <img src="/assets/images/contact-icons/gridicons_phone.png" alt="phone" className="w-16" />
                <div className="flex flex-col gap-2 items-center justify-between h-25">
                  <span className="font-bold text-lg">{texts[lang].buttonDescription1}</span>
                  <span className="text-lg">8016</span>
                  <span className="text-[#828282] text-lg">Զանգի’ր մեզ 24/7</span>
                </div>
              </Link>
              <Link
                className="transform duration-300 hover:shadow-md scale-[0.9] hover:scale-[1] flex flex-col items-center justify-center gap-4 rounded-sm shadow-xs bg-white border-[#2B2B30] w-70 h-70"
                to={helpContacts.whatsappPhone.link}
              >
                <img src="/assets/images/contact-icons/whatsapp.png" alt="whatsapp" className="w-16" />
                <div className="flex flex-col gap-2 items-center justify-between h-25">
                  <span className="font-bold text-lg">{texts[lang].buttonDescription2}</span>
                  <span className="text-lg">8016</span>
                  <span className="text-[#828282] text-lg">Զանգի’ր WhatsApp-ով</span>
                </div>
              </Link>
              <Link
                className="transform duration-300 hover:shadow-md scale-[0.9] hover:scale-[1] flex flex-col items-center justify-center gap-4 rounded-sm shadow-xs bg-white border-[#2B2B30] w-70 h-70"
                to={helpContacts.whatsappAnonChat.link}
              >
                <img src="/assets/images/contact-icons/whatsapp.png" alt="whatsapp" className="w-16" />
                <div className="flex flex-col gap-2 items-center justify-between h-25">
                  <span className="font-bold text-lg">{texts[lang].buttonDescription3}</span>
                  <span className="text-[#828282] text-lg text-center">Գրի’ր WhatsApp <br />չատբոտին</span>
                </div>
              </Link>
              <Link
                className="transform duration-300 hover:shadow-md scale-[0.9] hover:scale-[1] flex flex-col items-center justify-center gap-4 rounded-sm shadow-xs bg-white border-[#2B2B30] w-70 h-70"
                to={helpContacts.anonChat.link}
              >
                <img src="/assets/images/contact-icons/chat_logo.png" alt="chat" className="w-16" />
                <div className="flex flex-col gap-2 items-center justify-between h-25">
                  <span className="font-bold text-lg">{texts[lang].buttonDescription4}</span>
                  <span className="text-[#828282] text-lg text-center">Գրի’ր չատբոտին <br />անանուն</span>
                </div>
              </Link>
            </div>
          </div>
          <div className="mb-20">
            <p className="text-2xl text-center mb-10">{texts[lang].findUsSocial}</p>
            <div className="flex max-md:flex-col justify-center items-center gap-x-12 gap-y-6">
              <div className="flex md:gap-x-12 gap-x-8 transition-transform duration-500 ease-in-out">
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/linkedin.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/linkedin-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
                
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/facebook.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/facebook-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
                
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/instagram.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/instagram-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
              </div>
              
              <div className="flex md:gap-x-12 gap-x-8">
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/youtube.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/youtube-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
                
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/tiktok.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/tiktok-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
                
                <Link to="#" className="relative w-11 h-11 group">
                  <span className="absolute inset-0 bg-[url('/assets/images/snapchat.svg')] bg-no-repeat bg-center group-hover:opacity-0 transition-opacity" />
                  <span className="absolute inset-0 bg-[url('/assets/images/snapchat-hover.svg')] bg-no-repeat bg-center opacity-0 group-hover:opacity-100 transition-opacity group-hover:scale-[1.2] transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex max-lg:flex-col">
            <div className="flex-1 px-4">
              <div className="pt-7 border-t border-gray-300">
                <div className="mb-6">
                  <p className="text-xl font-light leading-8 mb-6">
                    {texts[lang].connectionInfo}
                  </p>
                </div>
                <div className="pt-5">
                  <div className="mb-5 min-h-16 ml-2">
                    <Link
                      target="_blank"
                      rel="noopener noreferrer"
                      to={mainContacts.location.link}
                      className="inline-flex items-center pr-4 group"
                    >
                      <span className="mr-6">
                        <ClipPathPanel>
                          <LocationOnIcon className="text-white !w-7 !h-7" />
                        </ClipPathPanel>
                      </span>
                      <span className="text-xl font-medium">{mainContacts.location.text[lang]}</span>
                    </Link>
                  </div>
                  <div className="block mb-5 min-h-16 ml-2">
                    <Link to={mainContacts.phone.link} className="inline-flex items-center pr-4 group">
                      <span className="mr-6">
                        <ClipPathPanel>
                          <MuiPhoneIcon className="text-white !w-7 !h-7" />
                        </ClipPathPanel>
                      </span>
                      <span className="text-xl font-medium">{mainContacts.phone.text[lang]}</span>
                    </Link>
                  </div>
                  <div className="block mb-5 min-h-16 ml-2">
                    <Link to={mainContacts.mail.link} className="inline-flex items-center pr-4 group">
                      <span className="mr-6">
                        <ClipPathPanel>
                          <MailIcon className="text-white !w-7 !h-7" />
                        </ClipPathPanel>
                      </span>
                      <span className="text-xl font-medium">{mainContacts.mail.text[lang]}</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 px-4">
              <div className="pt-7 border-t border-gray-300">
                <div className="mb-6">
                  <p className="text-xl font-light leading-8 mb-6">
                    {texts[lang].pgpInfo}
                  </p>
                  <p className="mb-6 text-xl font-light">
                    <Link to="https://cyberhub.am/keys/helpdesk.asc" className="text-[#5a8fdc] hover:text-[#2967c1]">
                      {texts[lang].pgpLink}
                    </Link>
                  </p>
                </div>
                <div className="2xl:w-[90%] w-full after-skew-gradient">
                  <div className="mb-8 flex flex-col sm:flex-row text-white gap-5">
                    <div className="opacity-70 text-xl font-light leading-8 sm:w-35 flex-none">
                      Key ID:
                    </div>
                    <div className="text-xl font-medium leading-8">
                      F9D923A8
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row text-white gap-5">
                    <div className="opacity-70 text-xl font-light leading-8 sm:w-35 whitespace-nowrap flex-none">
                      Key Fingerprint:
                    </div>
                    <div className="text-xl font-medium leading-8">
                      D63C EC9C D3AD 51BE EFCB 683F F2B8 6042 F9D9 23A8
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Copyright lang={lang} />
    </footer>
  )
};
