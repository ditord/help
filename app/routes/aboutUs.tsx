import type { Route } from "../routes/+types/aboutUs";
import { metadata } from "~/routes";
import { useLocation } from "react-router";
import { PartnersSection } from "~/components";
import type { Language } from "~/Types";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.aboutUs[lang];
}

export default function AboutUs() {
  const lang: Language = useLocation().pathname.includes("/hy") ? "hy" : "en";

  return (
    <main>
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h1 className="text-white font-bold text-3xl md:text-4xl uppercase">Մեր մասին</h1>
        </div>
      </div>
      <div className="container xl:!max-w-[1200px] mx-auto px-4 my-20 flex flex-col gap-5">
        <p className="mb-4 text-gray-700">
          ԿիբեռՉատը նպատակ ունի օգնել մինչև 18 տարեկան երեխաներին և դեռահասներին, 
          ինչպես նաև նրանց ծնողներին հասկանալ՝ ինչ վտանգներ կարող են սպասել առցանց 
          միջավայրում և ինչպես պաշտպանվել դրանցից։
        </p>
        
        <p className="mb-4 text-gray-700">
          Մենք համատեղում ենք կանխարգելման և աջակցման գործիքներ, որպեսզի հնարավոր լինի 
          ոչ միայն սովորել ու զգուշանալ, այլև ստանալ տեխնիկական, իրավական և հոգեբանական 
          օգնություն, երբ արդեն խնդիր է առաջացել։
        </p>
        
        <p className="mb-2 text-gray-700">Հարթակում կարելի է գտնել՝</p>
        
        <ul className="mb-6 list-disc list-inside space-y-2 text-gray-700">
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              ուսուցողական նյութեր, բացատրական տեսանյութեր, կրթական մոդուլներ (
              <span className="px-1">Ռեսուրսներ</span>)
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              իրական դեպքեր, որոնցից հարկավոր է զգուշանալ և որոնց բախվելիս պետք է 
              առաջնորդվել ներկայացված քայլերով (
              <span className="px-1">Ինչ անել, եթե</span>),
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              աջակցություն՝ չատբոտի կամ թեժ գծի միջոցով (ցանկության դեպքում՝ անանուն), 
              որը հասանելի է 24/7 շուրջօրյա ռեժիմով (
              <span className="px-1">Հետադարձ կապ</span>)։
            </span>
          </li>
        </ul>
        
        <p className="mb-4 text-gray-700">
          Չաթբոտն առաջարկում է արագ ուղեցույց, ինչպես նաև անվտանգ, անանուն ու մատչելի 
          եղանակով օգտատերերին ուղղորդում է համապատասխան ռեսուրսներին: Ավելի լուրջ կամ 
          բարդ դեպքերում թեժ գիծը երեխաներին և դեռահասներին կապում է վերապատրաստված 
          մասնագետների հետ, որոնք առաջարկում են տեխնիկական, իրավական, հոգեբանական աջակցություն:
        </p>
        
        <p className="mb-4 text-gray-700">
          Մեր թիմը բաղկացած է ոլորտի լավագույն մասնագետներից, որոնք աշխատում են առցանց 
          տիրույթում տուժած անձանց աջակցելու ուղղությամբ։
        </p>
        
        <p className="mb-2 text-gray-700">ԿիբեռՉատում աշխատում են՝</p>
        
        <ul className="mb-6 list-disc list-inside space-y-2 text-gray-700">
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              մեդիա փորձագետներ և տեխնիկական մասնագետներ, որոնք օգնում են հասկանալ 
              տեխնիկական խնդիրները, դրանց հնարավոր լուծումներն ու առցանց հարթակների 
              գործառույթները, օգտագործման պայմանները,
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              իրավաբաններ, որոնք օգնում են իրավական հարցերում և բացատրում քո 
              իրավունքներն ու հնարավոր քայլերը,
            </span>
          </li>
          <li className="flex">
            <span className="mr-2">•</span>
            <span>
              հոգեբաններ, որոնք պատրաստ են լսել ու աջակցել՝ խուճապի, տագնապի ու 
              լարված իրավիճակներում կողմնորոշվելու դիմագրավելու հարցում։
            </span>
          </li>
        </ul>
        
        <p className="mb-8 text-gray-700">
          Մեր գլխավոր նպատակն է բարձրացնել թվային գրագիտությունը և ապահովել, որ 
          ոչ մի երեխա, դեռահաս, ծնող կամ խնամակալ մենակ չզգա իրեն թվային խնդիրների ժամանակ։
        </p>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <p className="mb-4 text-gray-600 text-sm">
            ԿիբեռՉատ հարթակը ստեղծվել է «Աջակցություն երեխաներին և դեռահասներին՝ 
            կանխելու և արձագանքելու առցանց սպառնալիքները» ծրագրի շրջանակում։
          </p>
          
          <p className="text-gray-600 text-sm">
            Ծրագիրը ֆինանսավորվում է Միացյալ Թագավորության միջազգային զարգացման 
            աջակցության շրջանակում՝ ՄԹ կառավարության կողմից: Հարթակում արտահայտված 
            կարծիքները պատկանում են հեղինակներին և հնարավոր է չհամընկնեն ծրագիրն 
            իրականացնող կազմակերպությունների, Միացյալ Թագավորության կառավարության 
            պաշտոնական քաղաքականության կամ պաշտոնական դիրքորոշման հետ:
          </p>
        </div>
      </div>
      <PartnersSection lang={lang} />
    </main>
  );
}
