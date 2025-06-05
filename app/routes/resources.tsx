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
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/10-%D5%BA%D5%A1%D6%80%D5%A6-%D5%AF%D5%A1%D5%B6%D5%B8%D5%B6-%D5%B8%D6%80%D5%B8%D5%B6%D6%84-%D5%AF%D6%85%D5%A3%D5%B6%D5%A5%D5%B6-%D5%B1%D5%A5%D5%A6-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%B8%D6%82%D5%B4-%D5%A1%D5%BE%D5%A5%D5%AC%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3-%D5%AC%D5%AB%D5%B6%D5%A5%D5%AC",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/A94A6956-1.jpg.webp?itok=m5esJvWQ",
        description: "Առցանց տիրույթում հոգեկան առողջությունը բարելավելու 5 եղանակ",
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%A1%D5%BC%D6%81%D5%A1%D5%B6%D6%81-%D5%BF%D5%AB%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%B8%D6%82%D5%B4-%D5%B0%D5%B8%D5%A3%D5%A5%D5%AF%D5%A1%D5%B6-%D5%A1%D5%BC%D5%B8%D5%B2%D5%BB%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8-%D5%A2%D5%A1%D6%80%D5%A5%D5%AC%D5%A1%D5%BE%D5%A5%D5%AC%D5%B8%D6%82-5-%D5%A5%D5%B2%D5%A1%D5%B6%D5%A1%D5%AF",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/DSCF20806565656565.JPG.webp?itok=g6jtQVnb",
        description: "Պատկերապատում (կոմիքս). Կիբեռ-նինձաները պայքարում են համացանցային վտանգների դեմ",
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%A6%D5%A5%D5%AF%D5%B8%D6%82%D5%B5%D6%81%D5%B6%D5%A5%D6%80/%D5%BA%D5%A1%D5%BF%D5%AF%D5%A5%D6%80%D5%A1%D5%BA%D5%A1%D5%BF%D5%B8%D6%82%D5%B4-%D5%AF%D5%B8%D5%B4%D5%AB%D6%84%D5%BD-%D5%AF%D5%AB%D5%A2%D5%A5%D5%BC-%D5%B6%D5%AB%D5%B6%D5%B1%D5%A1%D5%B6%D5%A5%D6%80%D5%A8-%D5%BA%D5%A1%D5%B5%D6%84%D5%A1%D6%80%D5%B8%D6%82%D5%B4-%D5%A5%D5%B6-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%A1%D5%B5%D5%AB%D5%B6-%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B6%D5%A5%D6%80%D5%AB-%D5%A4%D5%A5%D5%B4",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/UNI363750_0.jpg.webp?itok=RhmmEJa7",
        description: "Ինչպես ապահովել երեխայի անվտանգությունն առցանց տիրույթում",
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5%D5%BD-%D5%A1%D5%BA%D5%A1%D5%B0%D5%B8%D5%BE%D5%A5%D5%AC-%D5%A5%D6%80%D5%A5%D5%AD%D5%A1%D5%B5%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6-%D5%A1%D5%BC%D6%81%D5%A1%D5%B6%D6%81-%D5%BF%D5%AB%D6%80%D5%B8%D6%82%D5%B5%D5%A9%D5%B8%D6%82%D5%B4",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/797A0707.jpg.webp?itok=5h75eCUa",
        description: "Ինչ պետք է իմանա յուրաքանչյուր դեռահաս կիբեռբուլիինգի մասին",
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%AB%D5%B6%D5%B9-%D5%BA%D5%A5%D5%BF%D6%84-%D5%A7-%D5%AB%D5%B4%D5%A1%D5%B6%D5%A1-%D5%B5%D5%B8%D6%82%D6%80%D5%A1%D6%84%D5%A1%D5%B6%D5%B9%D5%B5%D5%B8%D6%82%D6%80-%D5%A4%D5%A5%D5%BC%D5%A1%D5%B0%D5%A1%D5%BD-%D5%AF%D5%AB%D5%A2%D5%A5%D6%80%D5%A2%D5%B8%D6%82%D5%AC%D5%AB%D5%AB%D5%B6%D5%A3%D5%AB-%D5%B4%D5%A1%D5%BD%D5%AB%D5%B6",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/2018.3.7_UNICEF_Children_002.jpg.webp?itok=2hbBmmUu",
        description: "Ինչպե՞ս համացանցում ապահովել երեխաների անվտանգությունը",
        linkText: "Ավելին",
        link: "https://www.unicef.org/armenia/%D5%BA%D5%A1%D5%BF%D5%B4%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%B6%D5%A5%D6%80/%D5%AB%D5%B6%D5%B9%D5%BA%D5%A5%D5%9E%D5%BD-%D5%B0%D5%A1%D5%B4%D5%A1%D6%81%D5%A1%D5%B6%D6%81%D5%B8%D6%82%D5%B4-%D5%A1%D5%BA%D5%A1%D5%B0%D5%B8%D5%BE%D5%A5%D5%AC-%D5%A5%D6%80%D5%A5%D5%AD%D5%A1%D5%B6%D5%A5%D6%80%D5%AB-%D5%A1%D5%B6%D5%BE%D5%BF%D5%A1%D5%B6%D5%A3%D5%B8%D6%82%D5%A9%D5%B5%D5%B8%D6%82%D5%B6%D5%A8",
      },
      {
        img: "https://www.unicef.org/armenia/sites/unicef.org.armenia/files/styles/hero_extended/public/Gyumri%20Youth%20House_%20Collage%202.png.webp?itok=kePMlgtI",
        description: "Ինչպես ավելի անվտանգ օգտվել համացանցից․ խորհուրդներ երիտասարդներից",
        linkText: "Ավելին",
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
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=syRgXQHHPlw&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9",
      },
      {
        img: "/assets/images/resources/unicef_youtube_7.jpeg",
        description: "Կիբեռբուլինգ",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=xF_PPj9xh44&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9&index=3",
      },
      {
        img: "/assets/images/resources/unicef_youtube_8.jpeg",
        description: "Համացանցը և դեռահասների հուզականությունը",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=zqmyBdPSlnw&list=PLbDvyHcSfcHHirO8bYvX8eMDW4W7DjFT9&index=3",
      },
      {
        img: "/assets/images/resources/unicef_youtube_2.jpeg",
        description: "Ծնողական ժողով 2 | Ինպե՞ս ձևավորել թվային առողջ սովորություններ տանը",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=lRgKKuJM8_c",
      },
      {
        img: "/assets/images/resources/unicef_youtube_3.jpeg",
        description: "Ինչպես օգնել երեխային կառավարել էկրանների առջև անցկացվող ժամանակը",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=os6Dk-XptA0",
      },
      {
        img: "/assets/images/resources/unicef_youtube_4.jpeg",
        description: "Ծնողական ժողով | Կախվածություն գաջեթներից",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=ewCnB8W3wOw",
      },
      {
        img: "/assets/images/resources/unicef_youtube_5.jpeg",
        description: "ՅՈՒՆԻՍԵՖ-ի անկյուն. ծնողի դպրոց | Երեխան և համացանցը",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=oklqkKL2Pg8",
      },
      {
        img: "/assets/images/resources/unicef_youtube_6.jpeg",
        description: "Սոցիալական ցանցերը և երեխաները | Ուղիղ եթեր",
        linkText: "Ավելին",
        link: "https://www.youtube.com/watch?v=A_kVyYqFHRU&t=7s",
      },
    ],
  },
  babycef: {
    text: "Babycef",
    content: [
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2020-04/IMG_3222.jpg?itok=UtK2NMjP",
        description: "Ինչ կարող են անել ծնողները իրենց երեխաներին թվային աշխարհում պաշտպանելու համար",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/childcare-health/security-online-safety-tips-for-parents?term=13",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2019-08/UN040853.jpg?itok=lVYn72ef",
        description: "Երեխաները իրական մարդկանց, այլ ոչ էկրանային հերոսների հետ շփվելու կարիք ունեն",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/child-development/babies-toddlers-screen-time?term=13",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2020-04/UN040655_0.jpg?itok=FIkuGrg5",
        description: "Երեխաները ինչպե՞ս կարող են պաշտպանվել համացանցում",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/childcare-health/security-online-safety-tips-for-children?term=13",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2022-06/UN0572522.jpg?itok=8bf1b1Bj",
        description: "Երեխան և համացանցը",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/positive-parenting/upbringing-teaching-your-child-to-be-media-literate?term=13",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2024-02/BIA_20230322_0215.jpg?itok=dUgmRFNn",
        description: "Սոցիալական մեդիան և դեռահասների հոգեկան առողջությունը",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/positive-parenting/social-media-and-mental-health-of-teenagers?term=13",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2024-06/BIA_20230322_0416.webp?itok=zawLQEFb",
        description: "Տեսախաղերը և երեխաները. ուղեցույց ծնողների համար",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/positive-parenting/video-games-and-children-guideline-for-parents",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2024-06/NMP_5909.webp?itok=s3UMUK4N",
        description: "Ինչպես ապահովել ձեր երեխայի անվտանգությունը համացանցում",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/childcare-health/security-how-to-keep-your-child-safe-online",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2024-06/NMP_5929.webp?itok=wdFtcuu8",
        description: "Տանը առողջ թվային սովորություններ ձևավորելու 10 մեթոդ",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/positive-parenting/creating-healthy-digital-habits-at-home",
      },
      {
        img: "https://www.babycef.am/sites/default/files/styles/top_image/public/2024-06/BIA_20230322_0083.webp?itok=Ez5uvRG6",
        description: "Ինչ է անհրաժեշտ իմանալ նախքան սոցցանցերում մեր երեխաների մասին հրապարակումներ տարածելը",
        linkText: "Ավելին",
        link: "https://www.babycef.am/hy/positive-parenting/what-parents-need-to-know-before-sharing-photos-of-their-children-on-internet",
      },
    ],
  },
  cyberhub: {
    text: "CyberHUB",
    content: [
      {
        img: "https://cyberhub.am/wp-content/uploads/2021/02/mobile-phone-1087845_1920.jpg",
        description: "Սոցցանցերը Հայաստանում․ հիմնական խնդիրները օգտատերերի համար",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2021/02/22/social-media-main-issues-for-users-in-armenia/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/02/vlcsnap-2023-02-07-11h57m02s700.png",
        description: "Գաղտնաբառերի պաշտպանությունը և երկփուլային վավերացումը",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/02/07/password-security-meta-facebook-cyberhub-sahakats/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/02/vlcsnap-2023-02-13-00h02m51s495.png",
        description: "Ինչ անել, եթե ձեր հաշիվը կոտրել են",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/02/12/facebook-instagram-hacked/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/02/vlcsnap-2023-02-13-00h06m12s230.png",
        description: "WhatsApp-ի հաշվի պաշտպանությունը",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/02/12/how-to-protect-whatsapp/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/03/DiTORD_iphone_displaying_whatsapp_logo_and_a_hacker_in_the_back_fd9f4626-94c6-4a18-869b-e1d82de85ff6.png",
        description: "Ինչպե՞ս վերականգնել Whatsapp-ի գողացված հաշիվը",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/03/16/how-to-restore-hacked-whatsapp-accounts/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/11/2023.11.15_Facebook-Phishing_AI-Photo1.jpg",
        description: "Զգուշացե՛ք․ Հայաստանում տարածում է ստանում ֆեյսբուքյան ֆիշինգը",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/11/27/facebook-phishing-spreads-in-armenia/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2023/12/image003-1.png",
        description: "Արդյո՞ք ձեր անձնական տվյալները վտանգի են ենթարկվել որևէ թվային հարթակում․ ստուգե՛նք միասին",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2023/12/19/have_i_been_pwned_how_to/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2024/07/2024.07.21_GIF_2FA_Photo_AI.jpeg",
        description: "Ի՞նչ է երկգործոն վավերացման համակարգը և ինչո՞ւ է այն անհրաժեշտ",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2024/07/22/what-is-2fa-and-why-do-you-need-it/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2024/12/image.png",
        description: "Ինչպես մուտք գործել և վերականգնել կոտրված Viber հաշիվը",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2024/12/26/how-to-recover-hacked-viber-account/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2020/05/password-manager-relaunch_2018.jpg",
        description: "Գաղտնաբառերի պաշտպանության ծրագրեր, բիոմետրիկ անվտանգություն",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2020/05/27/password-security-podcast-cyberweek/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2019/12/Laptop-spying.jpg",
        description: "Ի՞նչ անել ֆեյսբուքյան օգտահաշվի անվտանգությունը բարձրացնելու համար",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2020/01/14/how-to-improve-facebook-account-security-arm/",
      },
      {
        img: "https://cyberhub.am/wp-content/uploads/2019/10/phishing-threat-100691616-large.jpg",
        description: "Ինչ է Ֆիշինգը և ինչպես պաշտպանվել դրանից",
        linkText: "Ավելին",
        link: "https://cyberhub.am/hy/blog/2019/10/25/what-is-phishing-and-how-to-protect-from-it-arm/",
      },
    ],
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
              <div className="flex-1 h-full border border-[#8E8E93] bg-white px-5 pt-5 xl:pb-5 gap-5 flex flex-wrap">
                {
                  tabs[activeTab].content.map((tabContent) =>
                    <div className="2xl:w-[calc(33.333%-14px)] xl:w-[calc(50%-10px)] w-full md:h-45 shadow-xs flex md:flex-row flex-col gap-3 rounded-sm" key={tabContent.img}>
                      <img src={tabContent.img} className="md:aspect-[5/4] h-60 object-cover md:h-45 rounded-sm" />
                      <div className="flex flex-col justify-between py-2 w-full max-md:px-4">
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
