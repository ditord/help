import { Link } from "react-router";
import type { Route } from "../routes/+types/aboutUs";
import metadata from "~/metadata";
import type { Language } from "~/Types";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

export const founders: Partner[] = [
  {
    name: "UK International Development",
    logo: "/assets/images/partners/ukid.png",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-office"
  },
  {
    name: "Media Diversity Institute",
    logo: "/assets/images/partners/mdi.png",
    url: "https://mdi.am"
  },
  {
    name: "CyberHUB",
    logo: "/assets/images/partners/cyberhub.png",
    url: "https://cyberhub.am/"
  },
  {
    name: "UNICEF",
    logo: "/assets/images/partners/unicef.png",
    url: "https://www.unicef.org/armenia/en"
  },
];

export const supporters: Partner[] = [
  {
    name: "Republic of Armenia",
    logo: "/assets/images/partners/ra.png",
    url: "https://www.gov.am"
  },
  {
    name: "Izmirlian Foundation",
    logo: "/assets/images/partners/izmirlian.png",
    url: "https://www.izmirlianfoundation.am/"
  },
  {
    name: "Meta",
    logo: "/assets/images/partners/meta.png",
    url: "https://www.meta.com/about/"
  },
];

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.aboutUs[lang];
}

export default function AboutUs() {
  return (
    <main>
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h1 className="text-white font-bold text-3xl md:text-4xl uppercase">Մեր մասին</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-10 lg:mt-20 mb-20 flex flex-col lg:gap-20 gap-10">
        <div className="flex max-lg:p-4 max-lg:shadow-[0_4px_10px_rgba(0,0,0,0.05)] rounded-md">
          <div className="xxl:w-3/4 mx-auto flex-col flex gap-5 lg:flex-row">
            <div className="content-center items-center xl:flex text-center">
              <img 
                src="/assets/images/about-us/file-icon.svg" 
                alt="scroll left"
                className="lg:max-w-[100px] max-lg:max-w-[60px] inline-block"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-gray-700">ԿիբեռՉատ պորտֆոլիո</h3>
              <p className="text-lg text-gray-700">Ծանոթացեք մեր գործունեության ազդեցության, վիճակագրության, մեզ աջակցելու և այլ մանրամասներին։</p>
              <div className="h-px bg-gray-500 opacity-20 mt-2" />
              <h3 className="text-3xl font-bold text-gray-700 mt-2">CyberChat portfolio</h3>
              <p className="text-lg text-gray-700">Learn about the impact of our activities, statistics, how to support us, and other details.</p>
            </div>
            <div className="m-4 max-lg:text-center flex">
              <div className="m-auto">
                <a
                  href="/assets/docs/Portfolio.pdf"
                  target='_blank'
                  className="btn btn-blue"
                >
                  <img
                    src="/assets/images/download.svg" 
                    alt="scroll left"
                    className="inline-block mr-2 relative top-[-2px]"
                  />
                  <span>
                    ԲԵՌՆԵԼ / DOWNLOAD
                  </span>
                </a>
                <div className="mt-5 text-gray-500 text-xs text-center">PDF, 12.6 MB</div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-1 lg:flex-3/4 backdrop-blur-[0.2rem] z-10">
            <h3 className="text-3xl font-bold text-gray-700">Մեր նպատակը</h3>
            <p className="mt-4 text-lg text-gray-700">
              ԿիբեռՉատը նպատակ ունի օգնել մինչև 18 տարեկան երեխաներին, դեռահասներին, ինչպես նաև նրանց ծնողներին հասկանալ, թե ինչ վտանգներ կարող են սպասել առցանց միջավայրում և ինչպես պաշտպանվել դրանցից։
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Մենք համատեղում ենք կանխարգելման և աջակցման գործիքներ, որպեսզի հնարավոր լինի ոչ միայն սովորել ու զգուշանալ, այլև ստանալ տեխնիկական, իրավական և հոգեբանական օգնություն, երբ արդեն խնդիր է առաջացել։
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Մեր գլխավոր նպատակն է բարձրացնել թվային գրագիտությունը և ապահովել, որ ոչ մի երեխա, դեռահաս, ծնող կամ խնամակալ մենակ չզգա իրեն թվային խնդիրների ժամանակ։
            </p>
          </div>
          <div className="lg:flex-1/4 items-center justify-center flex max-lg:absolute inset-0">
            <img 
              src="/assets/images/about-us/shield.svg" 
              alt="scroll left"
              className="lg:w-1/2 w-9/12 h-full max-lg:p-10" 
            />
          </div>
        </div>
        <div className="flex relative">
          <div className="lg:flex-1/4 items-center justify-center flex max-lg:absolute inset-0">
            <img 
              src="/assets/images/about-us/question.svg" 
              alt="scroll left" 
              className="lg:w-1/2 w-9/12 h-full max-lg:p-10"
            />
          </div>
          <div className="flex-1 lg:flex-3/4 backdrop-blur-[0.2rem] z-10">
            <h3 className="text-3xl font-bold text-gray-700">Հարթակում կարելի է գտնել</h3>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Ռեսուրսներ</p>
              <p className="text-gray-700 text-lg mt-2">ուսուցողական նյութեր, բացատրական տեսանյութեր, տերմինների բառարան</p>
            </div>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Ի՞նչ անել, եթե...</p>
              <p className="text-gray-700 text-lg mt-2">իրական դեպքեր, որոնցից հարկավոր է զգուշանալ և որոնց բախվելիս պետք է առաջնորդվել ներկայացված քայլերով</p>
            </div>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Հետադարձ կապ</p>
              <p className="text-gray-700 text-lg mt-2">աջակցություն՝ չատբոտի կամ թեժ գծի միջոցով (ցանկության դեպքում՝ անանուն), որը հասանելի է 24/7 շուրջօրյա ռեժիմով</p>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-1 lg:flex-3/4 backdrop-blur-[0.2rem] z-10">
            <h3 className="text-3xl font-bold text-gray-700">Չատբոտ և թեժ գիծ</h3>
            <p className="mt-4 text-gray-700 text-lg">
              Չաթբոտն առաջարկում է արագ ուղեցույց, ինչպես նաև անվտանգ, անանուն ու մատչելի եղանակով օգտատերերին ուղղորդում է համապատասխան ռեսուրսներին: Ավելի լուրջ կամ բարդ դեպքերում թեժ գիծը երեխաներին և դեռահասներին կապում է վերապատրաստված մասնագետների հետ, որոնք առաջարկում են տեխնիկական, իրավական, հոգեբանական աջակցություն:
            </p>
          </div>
          <div className="lg:flex-1/4 items-center justify-center flex max-lg:absolute inset-0">
            <img
              src="/assets/images/about-us/chat.svg"
              alt="scroll left"
              className="lg:w-1/2 w-9/12 h-full max-lg:p-10 opacity-50"
            />
          </div>
        </div>
        <div className="flex relative">
          <div className="lg:flex-1/4 items-center justify-center flex max-lg:absolute inset-0">
            <img
              src="/assets/images/about-us/team.svg"
              alt="scroll left" 
              className="lg:w-1/2 w-9/12 h-full max-lg:p-10"
            />
          </div>
          <div className="flex-1 lg:flex-3/4 backdrop-blur-[0.2rem] z-10">
            <h3 className="text-3xl font-bold text-gray-700">Մեր թիմը</h3>
            <p className="mt-4 text-gray-700 text-lg">Մեր թիմը բաղկացած է ոլորտի լավագույն մասնագետներից, որոնք աշխատում են առցանց տիրույթում տուժած անձանց աջակցելու ուղղությամբ։</p>
            <p className="mt-4 text-gray-700 text-lg">ԿիբեռՉատում աշխատում են</p>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Մեդիա փորձագետներ և տեխնիկական մասնագետներ</p>
              <p className="text-gray-700 text-lg mt-2">օգնում են հասկանալ տեխնիկական խնդիրները, դրանց հնարավոր լուծումներն ու առցանց հարթակների գործառույթները, օգտագործման պայմանները</p>
            </div>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Իրավաբաններ</p>
              <p className="text-gray-700 text-lg mt-2">օգնում են իրավական հարցերում և բացատրում քո իրավունքներն ու հնարավոր քայլերը</p>
            </div>
            <div className="mt-4 p-10 rounded-xl bg-[#F0F7FFCC]">
              <p className="font-bold text-gray-700 text-lg">Հոգեբաններ</p>
              <p className="text-gray-700 text-lg mt-2">պատրաստ են լսել ու աջակցել՝ խուճապի, տագնապի ու լարված իրավիճակներում կողմնորոշվելու դիմագրավելու հարցում</p>
            </div>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-1 lg:flex-3/4 backdrop-blur-[0.2rem] z-10">
            <h3 className="text-3xl font-bold text-gray-700">Գործընկերների մասին</h3>
            <p className="mt-4 text-gray-700 text-lg">
              Հարթակում արտահայտված տեսակետները պատկանում են հեղինակներին և կարող են չհամընկնել աջակից կազմակերպությունների պաշտոնական դիրքորոշման հետ։
            </p>
          </div>
          <div className="lg:flex-1/4 items-center justify-center flex max-lg:absolute inset-0">
            <svg viewBox="0 0 246 246" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-1/2 w-9/12 h-full">
              <g opacity="0.5">
                <path d="M112.75 61.5H143.5L177.223 27.675C178.175 26.7143 179.309 25.9517 180.558 25.4314C181.807 24.911 183.147 24.6431 184.5 24.6431C185.853 24.6431 187.193 24.911 188.442 25.4314C189.691 25.9517 190.825 26.7143 191.777 27.675L218.223 54.2225C220.132 56.143 221.203 58.7408 221.203 61.4487C221.203 64.1567 220.132 66.7545 218.223 68.675L194.75 92.25H112.75V112.75C112.75 115.468 111.67 118.076 109.748 119.998C107.826 121.92 105.218 123 102.5 123C99.7815 123 97.1744 121.92 95.2522 119.998C93.3299 118.076 92.25 115.468 92.25 112.75V82C92.25 76.5631 94.4098 71.3488 98.2543 67.5043C102.099 63.6598 107.313 61.5 112.75 61.5ZM51.25 112.75V153.75L27.7775 177.223C25.8684 179.143 24.7969 181.741 24.7969 184.449C24.7969 187.157 25.8684 189.755 27.7775 191.675L54.2225 218.223C55.1754 219.183 56.309 219.946 57.5581 220.466C58.8071 220.987 60.1469 221.254 61.5 221.254C62.8531 221.254 64.1929 220.987 65.4419 220.466C66.691 219.946 67.8246 219.183 68.7775 218.223L112.75 174.25H153.75C156.468 174.25 159.076 173.17 160.998 171.248C162.92 169.326 164 166.718 164 164V153.75H174.25C176.968 153.75 179.576 152.67 181.498 150.748C183.42 148.826 184.5 146.218 184.5 143.5V133.25H194.75C197.468 133.25 200.076 132.17 201.998 130.248C203.92 128.326 205 125.718 205 123V112.75H133.25V123C133.25 128.437 131.09 133.651 127.246 137.496C123.401 141.34 118.187 143.5 112.75 143.5H92.25C86.8131 143.5 81.5988 141.34 77.7543 137.496C73.9098 133.651 71.75 128.437 71.75 123V92.25L51.25 112.75Z" fill="url(#paint0_linear_2838_988)" />
              </g>
              <defs>
                <linearGradient id="paint0_linear_2838_988" x1="24.7969" y1="221.254" x2="236.949" y2="27.4593" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#5188D7" />
                  <stop offset="1" stopColor="#80C9EB" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-gray-700 text-center">ՀԻՄՆԱԴԻՐՆԵՐ</h3>
          <div className="flex justify-center items-center gap-8">
            {founders.map((partner, index) => (
              <div key={index} className="min-w-0 shrink flex justify-center items-center">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block max-w-full">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className="h-20 max-w-full object-contain"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="text-2xl font-bold text-gray-700 text-center">ԳՈՐԾԸՆԿԵՐՆԵՐ ԵՎ ԱՋԱԿԻՑՆԵՐ</h3>
          <div className="flex justify-center items-center gap-8">
            {supporters.map((partner, index) => (
              <div key={index} className="min-w-0 shrink flex justify-center items-center">
                <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block max-w-full">
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`${partner.name === "Meta" ? "h-6" : partner.name === "Izmirlian Foundation" ? "h-14" : "h-20"} max-w-full object-contain`}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
