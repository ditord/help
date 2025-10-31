import { Link } from "react-router";
import type { Route } from "../routes/+types/aboutUs";
import metadata from "~/metadata";
import type { Language } from "~/Types";

interface Partner {
  name: string;
  logo: string;
  url: string;
}

export const partners: Partner[] = [
  {
    name: "UK International Development",
    logo: "/assets/images/partners/ukid.png",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-office"
  },
  {
    name: "Republic of Armenia",
    logo: "/assets/images/partners/ra.png",
    url: "https://www.gov.am"
  },
  {
    name: "UNICEF",
    logo: "/assets/images/partners/unicef.png",
    url: "https://www.unicef.org/armenia/en"
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
          <div className="xxl:w-3/4 mx-auto flex-col flex gap-3 lg:flex-row">
            <div className="max-lg:text-center">
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
            <div className="m-4 max-lg:text-center">
              <a
                href="/assets/docs/Portfolio.pdf"
                target='_blank'
                className="btn btn-blue btn-small"
              >
                <img
                  src="/assets/images/download.svg" 
                  alt="scroll left"
                  className="inline-block mr-2"
                />
                <span>
                  ԲԵՌՆԵԼ / DOWNLOAD
                </span>
              </a>
              <div className="mt-4 text-gray-500 text-xs text-center">PDF, 12.6 MB</div>
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
        <div className="flex max-lg:flex-col max-lg:gap-10">
          <div className="lg:flex-1/2">
            <h3 className="text-3xl font-bold text-gray-700">Ծրագրի մասին</h3>
            <p className="mt-4 text-gray-700 text-lg">ԿիբեռՉատ հարթակը ստեղծվել է «Աջակցություն երեխաներին և դեռահասներին՝ կանխելու և արձագանքելու առցանց սպառնալիքները» ծրագրի շրջանակում։</p>
            <p className="mt-4 text-gray-700 text-lg">Ծրագիրն իրականացվում է ՅՈՒՆԻՍԵՖ-ի, Բազմակողմանի տեղեկատվության ինստիտուտի և CyberHUB-ի կողմից՝ Միացյալ Թագավորության կառավարության ֆինանսավորմամբ և Հայաստանի կառավարության հետ համատեղ:</p>
            <p className="mt-4 text-gray-700 text-lg">Ծրագիրը ֆինանսավորվում է Միացյալ Թագավորության միջազգային զարգացման աջակցության շրջանակում՝ ՄԹ կառավարության կողմից: Հարթակում արտահայտված կարծիքները պատկանում են հեղինակներին և հնարավոր է չհամընկնեն ծրագիրն իրականացնող կազմակերպությունների, Միացյալ Թագավորության կառավարության պաշտոնական քաղաքականության կամ պաշտոնական դիրքորոշման հետ:</p>
          </div>
          <div className="lg:flex-1/2 flex flex-col gap-10 justify-center items-center">
            <div className="flex w-full justify-center items-center gap-10">
              {partners.slice(0, 3).map((partner, index) => (
                <div key={index} className="inline-flex justify-center items-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="h-20 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
            <div className="flex w-full justify-center items-center gap-10">
              {partners.slice(3).map((partner, index) => (
                <div key={index} className="inline-flex justify-center items-center">
                  <a href={partner.url} target="_blank" rel="noopener noreferrer" className="block">
                    <img 
                      src={partner.logo} 
                      alt={`${partner.name} logo`} 
                      className="h-20 object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
