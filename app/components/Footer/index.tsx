import { Copyright } from "./Copyright";
import { ClipPathPanel, WhatsappIcon, PhoneIcon } from "~/elements";
import MuiPhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link } from "react-router";
import { mainContacts, helpContacts } from "~/config";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Հետադարձ կապ",
    forHelp: "Օգնության համար",
    buttonDescription1: "Զանգի'ր մեր թեժ գծին (24/7)",
    buttonDescription2: "Զանգի'ր մեզ WhatsApp-ով",
    buttonDescription3: "Կապվի'ր WhatsApp չատբոտին",
    buttonDescription4: "Գրի'ր չատբոտին անանուն",
    findUsSocial: "Գտիր մեզ առցանց",
    connectionInfo: "Մեզ կարող եք գրել էլ֊փոստով, կամ տոմս բացելով մեր աջակցության հարթակում կամ էլ զանգելով/գրելով մեզ Signal/Telegram/Whatsapp հավելվածներով։",
    pgpInfo: "Օգտագործեք հետևյալ PGP բանալին՝ գաղտնագրված նամակագրության համար։",
    pgpLink: "Ներբեռնել բանալին",
  },
  en: {
    title: "Contact us",
    forHelp: "For help",
    buttonDescription1: "Call our hotline (24/7)",
    buttonDescription2: "Call us on WhatsApp",
    buttonDescription3: "Connect with WhatsApp chatbot",
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
            <p className="text-2xl text-center mb-10">{texts[lang].forHelp}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="px-4 mb-4 text-center">
                <p className="text-lg font-light lg:mb-4 mb-2 lg:hidden xl:inline-block whitespace-nowrap">{texts[lang].buttonDescription1}</p>

                <Link
                  className="hover:opacity-70 transform duration-300 flex items-center gap-2 rounded-4xl mx-auto border-2 px-6 py-3 w-fit max-lg:mx-auto border-[#2B2B30]"
                  to={helpContacts.phone.link}
                >
                  <PhoneIcon className="text-[#2B2B30] w-8 h-8" />
                  <span className="text-[#2B2B30]">{helpContacts.phone.text[lang]}</span>
                </Link>
              </div>
              <div className="px-4 mb-4 text-center">
                <p className="text-lg font-light lg:mb-4 mb-2 lg:hidden xl:inline-block whitespace-nowrap">{texts[lang].buttonDescription2}</p>

                <Link
                  className="hover:opacity-70 transform duration-300 flex items-center gap-2 rounded-4xl mx-auto border-2 border-[#1DA851] bg-[#1DA851] px-6 py-3 w-fit max-lg:mx-auto"
                  to={helpContacts.whatsappPhone.link}
                >
                  <WhatsappIcon className="text-white w-8 h-8" />
                  <span className="text-white">{helpContacts.whatsappPhone.text[lang]}</span>
                </Link>
              </div>
              <div className="px-4 mb-4 text-center">
                <p className="text-lg font-light lg:mb-4 mb-2 lg:hidden xl:inline-block whitespace-nowrap">{texts[lang].buttonDescription3}</p>

                <Link
                  className="hover:opacity-70 transform duration-300 flex items-center gap-2 rounded-4xl mx-auto border-2 border-[#1DA851] bg-[#1DA851] px-6 py-3 w-fit max-lg:mx-auto"
                  to={helpContacts.whatsappAnonChat.link}
                >
                  <WhatsappIcon className="text-white w-8 h-8" />
                  <span className="text-white">{helpContacts.whatsappAnonChat.text[lang]}</span>
                </Link>
              </div>
              <div className="px-4 mb-4 text-center">
                <p className="text-lg font-light lg:mb-4 mb-2 lg:hidden xl:inline-block whitespace-nowrap">{texts[lang].buttonDescription4}</p>

                <Link
                  className="hover:opacity-70 transform duration-300 flex items-center gap-2 rounded-4xl mx-auto border-2 border-[#5188D7] bg-[#5188D7] px-6 py-3 w-fit max-lg:mx-auto"
                  to={helpContacts.anonChat.link}
                >
                  <WhatsappIcon className="text-white w-8 h-8" />
                  <span className="text-white">{helpContacts.anonChat.text[lang]}</span>
                </Link>
              </div>
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
