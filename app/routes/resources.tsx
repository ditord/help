import { useState } from "react";
import type { Route } from "../routes/+types/resources";
import type { Language } from "~/Types";
import dictionary from "../dictionary.json";
import { Link } from "react-router";
import metadata from "~/metadata";

export function meta({ location }: Route.MetaArgs) {
  const lang: Language = location.pathname.includes("/hy") ? "hy" : "en";

  return metadata.resources[lang];
}

type TabTypes = "unicef" | "unicef_youtube" | "babycef" | "cyberhub"

const tabs: { [key in TabTypes]: { text: string, content: any[] } } = {
  unicef: {
    text: "UNICEF",
    content: [
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/797A1056.jpg.webp?itok=2LKSOTZa",
        description: "10 պարզ կանոն, որոնք կօգնեն ձեզ համացանցում ավելի անվտանգ լինել",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/10-%D5%BA%D5%A1%D6%80%D5%A6-%D5%AF%D5%A1%D5%B6%D5%B8%D5%B6-%D5%B8%D6%80%D5%B8%D5%B6%D6%84-%D5%AF%D6%85%D5%A3%D5%B6%D5%A5%D5%B6-%D5%B1%D5%A5%D5%A6-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%B8%D6%82%D5%B4-%D5%A1%D5%BE%D5%A5%D5%AC%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3-%D5%AC%D5%AB%D5%B6%D5%A5%D5%AC",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/A94A6956-1.jpg.webp?itok=m5esJvWQ",
        description: "Առցանց տիրույթում հոգեկան առողջությունը բարելավելու 5 եղանակ",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%A1%D5%BC%D6%81%D5%A1%D5%B6%D6%81-%D5%BF%D5%AB%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%B8%D6%82%D5%B4-%D5%B0%D5%B8%D5%A3%D5%A5%D5%AF%D5%A1%D5%B6-%D5%A1%D5%BC%D5%B8%D5%B2%D5%BB%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8-%D5%A2%D5%A1%D6%80%D5%A5%D5%AC%D5%A1%D5%BE%D5%A5%D5%AC%D5%B8%D6%82-5-%D5%A5%D5%B2%D5%A1%D5%B6%D5%A1%D5%AF",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/DSCF20806565656565.JPG.webp?itok=g6jtQVnb",
        description: "Պատկերապատում (կոմիքս). Կիբեռ-նինձաները պայքարում են համացանցային վտանգների դեմ",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%A6%D5%A5%D5%AF%D5%B8%D6%82%D5%B5%D6%81%D5%B6%D5%A5%D6%80/%D5%BA%D5%A1%D5%BF%D5%AF%D5%A5%D6%80%D5%A1%D5%BA%D5%A1%D5%BF%D5%B8%D6%82%D5%B4-%D5%AF%D5%B8%D5%B4%D5%AB%D6%84%D5%BD-%D5%AF%D5%AB%D5%A2%D5%A5%D5%BC-%D5%B6%D5%AB%D5%B6%D5%B1%D5%A1%D5%B6%D5%A5%D6%80%D5%A8-%D5%BA%D5%A1%D5%B5%D6%84%D5%A1%D6%80%D5%B8%D6%82%D5%B4-%D5%A5%D5%B6-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%A1%D5%B5%D5%AB%D5%B6-%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80%D5%AB-%D5%A4%D5%A5%D5%B4",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/UNI363750_0.jpg.webp?itok=RhmmEJa7",
        description: "Ինչպես ապահովել երեխայի անվտանգությունն առցանց տիրույթում",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5%D5%BD-%D5%A1%D5%BA%D5%A1%D5%B0%D5%B8%D5%BE%D5%A5%D5%AC-%D5%A5%D6%80%D5%A5%D5%AD%D5%A1%D5%B5%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6-%D5%A1%D5%BC%D6%81%D5%A1%D5%B6%D6%81-%D5%BF%D5%AB%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%B8%D6%82%D5%B4",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/797A0707.jpg.webp?itok=5h75eCUa",
        description: "Ինչ պետք է իմանա յուրաքանչյուր դեռահաս կիբերբուլիինգի մասին",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%AB%D5%B6%D5%B9-%D5%BA%D5%A5%D5%BF%D6%84-%D5%A7-%D5%AB%D5%B4%D5%A1%D5%B6%D5%A1-%D5%B5%D5%B8%D6%82%D6%80%D5%A1%D6%84%D5%A1%D5%B6%D5%B9%D5%B5%D5%B8%D6%82%D6%80-%D5%A4%D5%A5%D5%BC%D5%A1%D5%B0%D5%A1%D5%BD-%D5%AF%D5%AB%D5%A2%D5%A5%D6%80%D5%A2%D5%B8%D6%82%D5%AC%D5%AB%D5%AB%D5%B6%D5%A3%D5%AB-%D5%B4%D5%A1%D5%BD%D5%AB%D5%B6",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/2018.3.7_UNICEF_Children_002.jpg.webp?itok=2hbBmmUu",
        description: "Ինչպե՞ս համացանցում ապահովել երեխաների անվտանգությունը",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5%D5%9E%D5%BD-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%B8%D6%82%D5%B4-%D5%A1%D5%BA%D5%A1%D5%B0%D5%B8%D5%BE%D5%A5%D5%AC-%D5%A5%D6%80%D5%A5%D5%AD%D5%A1%D5%B6%D5%A5%D6%80%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/Gyumri%20Youth%20House_%20Collage%202.png.webp?itok=kePMlgtI",
        description: "Ինչպես ավելի անվտանգ օգտվել համացանցից․ խորհուրդներ երիտասարդներից",
        linkText: "կարդալ գրառումը",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5%D5%BD-%D5%A1%D5%BE%D5%A5%D5%AC%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3-%D6%85%D5%A3%D5%BF%D5%BE%D5%A5%D5%AC-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%AB%D6%81%E2%80%A4-%D5%AD%D5%B8%D6%80%D5%B0%D5%B8%D6%82%D6%80%D5%A4%D5%B6%D5%A5%D6%80-%D5%A5%D6%80%D5%AB%D5%BF%D5%A1%D5%BD%D5%A1%D6%80%D5%A4%D5%B6%D5%A5%D6%80%D5%AB%D6%81",
      },
    ],
  },
  unicef_youtube: {
    text: "UNICEF YouTube",
    content: [
      {
        img: "/assets/images/resources/unicef_youtube_1.jpeg",
        description: "Սոցիալական մեդիան և դեռահասները",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=syRgXQHHPlw&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9",
      },
      {
        img: "/assets/images/resources/unicef_youtube_7.jpeg",
        description: "Կիբերբուլինգ",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=xF_PPj9xh44&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9&index=3",
      },
      {
        img: "/assets/images/resources/unicef_youtube_8.jpeg",
        description: "Համացանցը և դեռահասների հուզականությունը",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=zqmyBdPSlnw&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9&index=3",
      },
      {
        img: "/assets/images/resources/unicef_youtube_2.jpeg",
        description: "Ծնողական ժողով 2 | Ինպե՞ս ձևավորել թվային առողջ սովորություններ տանը",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=lRgKKuJM8_c",
      },
      {
        img: "/assets/images/resources/unicef_youtube_3.jpeg",
        description: "Ինչպես օգնել երեխային կառավարել էկրանների առջև անցկացվող ժամանակը",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=os6Dk-XptA0",
      },
      {
        img: "/assets/images/resources/unicef_youtube_4.jpeg",
        description: "Ծնողական ժողով | Կախվածություն գաջեթներից",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=ewCnB8W3wOw",
      },
      {
        img: "/assets/images/resources/unicef_youtube_5.jpeg",
        description: "ՅՈՒՆԻՍԵՖ-ի անկյուն. ծնողի դպրոց | Երեխան և համացանցը",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=oklqkKL2Pg8",
      },
      {
        img: "/assets/images/resources/unicef_youtube_6.jpeg",
        description: "Սոցիալական ցանցերը և երեխաները | Ուղիղ եթեր",
        linkText: "կարդալ գրառումը",
        link: "https://www.youtube.com/watch?v=A_kVyYqFHRU&t=7s",
      },
    ],
  },
  babycef: {
    text: "Babycef",
    content: [],
  },
  cyberhub: {
    text: "CyberHUB",
    content: [],
  },
};

export default function Resources() {
  const [activeTab, setActiveTab] = useState<TabTypes>("unicef");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="bg-white">
      <div className="w-full h-30 bg-[linear-gradient(47.56deg,_#639BDF_0%,_#80C9EB_103.5%)]">
        <div className="container mx-auto items-center flex h-full px-4">
          <h2 className="text-white font-bold text-3xl md:text-4xl uppercase">ՌԵՍՈՒՐՍՆԵՐ</h2>
        </div>
      </div>
      <section id="useful-posts" className="container mx-auto px-4 pt-14">
        <h2 className="text-3xl md:text-4xl font-black mb-10">Օգտակար նութեր</h2>

        <div className="w-full mt-5 bg-[#FAFAFA] lg:p-10 p-4 flex xl:flex-row flex-col gap-10">
            <div className="flex-1 flex-col flex">
              <div className="flex relative -bottom-[1px]">
                {
                  Object.keys(tabs).map((tabName) =>
                    <button
                      key={tabName}
                      onClick={() => setActiveTab(tabName as TabTypes)}
                      className={`md:px-5 py-3 px-2 cursor-pointer flex gap-2 font-medium text-[#5188D7] hover:bg-white rounded-t-md border-t border-l border-r ${activeTab === tabName ? "bg-white border-[#8E8E93]" : "border-transparent max-md:border-[#8E8E93]"}`}
                    >
                      <span>{tabs[tabName as TabTypes].text}</span>
                    </button>
                  )
                }
              </div>
              <div className="flex-1 h-full border border-[#8E8E93] bg-white px-10 pt-10 xl:pb-10 xl:columns-2 columns-1 gap-10">
                {
                  tabs[activeTab].content.map((tabContent) =>
                    <div className="h-45 shadow-xs flex gap-3 mb-10 rounded-sm" key={tabContent.img}>
                      <img src={tabContent.img} className="aspect-[5/4] object-cover h-45 rounded-sm" />
                      <div className="flex flex-col justify-between py-2 w-full">
                        <p className="font-bold">{tabContent.description}</p>
                        <Link
                          to={tabContent.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-sm text-[#5188D7] py-2 cursor-pointer flex justify-between group pr-3"
                        >
                          {tabContent.linkText}
                          <img
                            src="/assets/images/arrow-right.svg"
                            alt="to help" 
                            className="w-8 transition-all group-hover:scale-[1.2] transform duration-300" 
                          />
                        </Link>
                      </div>
                    </div>
                  )
                }
              </div>
            </div>
          </div>
      </section>
      <section id="dictionary" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl md:text-4xl font-black">Բառարան</h2>

        <div className="relative my-8 border border-[#D1D5DC]">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
              <path d="M9.16715 16.3333C12.8491 16.3333 15.8338 13.3486 15.8338 9.66667C15.8338 5.98477 12.8491 3 9.16715 3C5.48526 3 2.50049 5.98477 2.50049 9.66667C2.50049 13.3486 5.48526 16.3333 9.16715 16.3333Z" stroke="#909090" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M17.501 18L13.876 14.375" stroke="#909090" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <input
            type="text"
            placeholder="Որոնել տերմին"
            className="pl-10 pr-4 py-3 rounded-md focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="2xl:columns-3 lg:columns-2 columns-1 gap-4">
          {
            dictionary.map(item => !searchTerm || item.word.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) || item.description.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()) ? (
              <div className="mb-4 bg-[#FAFAFA] border-l-4 border-[#5188D7] p-6 pl-10 break-inside-avoid" key={item.word}>
                <p className="text-lg font-bold">{item.word}</p>
                <p className="text-lg mt-4">{item.description}</p>
              </div>
            ) : null)
          }
        </div>
      </section>
    </main>
  );
}
