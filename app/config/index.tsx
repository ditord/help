import type { Language } from "~/Types";

export const headerNavigation = {
  hy: [
    {
      text: "Գլխավոր",
      href: ["/hy"],
    },
    {
      text: "Մեր մասին",
      href: "/hy/about-us/",
    },
    {
      text: "Ի՞նչ անել, եթե…",
      href: "/hy/help/",
    },
    {
      text: "Բլոգ",
      href: "/hy/blogs/",
    },
    {
      text: "Հետադարձ կապ",
      href: "/hy/contact-us/",
    }
   ],
   en: [
    {
      text: "Home",
      href: "/en",
    },
    {
      text: "About us",
      href: "/en/about-us/",
    },
    {
      text: "What to do if...",
      href: "/en/help/",
    },
    {
      text: "Blog",
      href: "/en/blogs/",
    },
    {
      text: "Contact us",
      href: "/en/contact-us/",
    },
  ],
};

export const mainContacts = {
  location: {
    link: "https://maps.app.goo.gl/hPwATTW1mxc3jXFK7",
    text: {
      hy: "Ղ․ Փարպեցու 9բ",
      en: "Gh. Parpetsi 9b",
    },
  },
  mail: {
    link: "mailto:support@cyberhub.am",
    text: {
      hy: "support@cyberhub.am",
      en: "support@cyberhub.am",
    },
  },
  phone: {
    link: "tel:+37495938363",
    text: {
      hy: "+374 94 93 83 63",
      en: "+374 94 93 83 63",
    },
  },
};

export const helpContacts = {
  phone: {
    link: "tel:+37455555555",
    text: {
      hy: "055 555 555",
      en: "055 555 555",
    },
  },
  whatsappPhone: {
    link: "tel:+37455555555",
    text: {
      hy: "055 555 555",
      en: "055 555 555",
    },
  },
  whatsappAnonChat: {
    link: "tel:+37455555555",
    text: {
      hy: "WhatsApp չատ",
      en: "WhatsApp chat",
    },
  },
  anonChat: {
    link: "tel:+37455555555",
    text: {
      hy: "Անանուն չատ",
      en: "Anonymous chat",
    }
  },
};

export const helpItems = [
  {
    id: 1,
    icon: <img src="/assets/images/help-icons/help-icon-1.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Կոտրել են օգտահաշիվս",
      en: "My account has been hacked",
    },
    description: {
      hy: "Ինստագրամ / ֆեյսբուք / Սնապչատ / Տիկտոկ / Վոթսափ / Վայբեր / Տելեգրամ / մեյլ / գուգլ դրայվ։",
      en: "Instagram / Facebook / Snapchat / TikTok / WhatsApp / Viber / Telegram / email / Google Drive."
    },
    options: [
      {
        text: "Կոտրել են օգտահաշիվս",
        id: "Կոտրել_են_օգտահաշիվս",
      },
    ],
  },
  {
    id: 2,
    icon: <img src="/assets/images/help-icons/help-icon-2.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Կոտրել են օգտահաշիվս ու շանտաժի են ենթարկում",
      en: "My account has been hacked and I'm being blackmailed",
    },
    description: {
      hy: "Ինստագրամ / ֆեյսբուք / Սնապչատ / Տիկտոկ / Վոթսափ / Վայբեր / Տելեգրամ / մեյլ / գուգլ դրայվ։",
      en: "Instagram / Facebook / Snapchat / TikTok / WhatsApp / Viber / Telegram / email / Google Drive."
    },
    options: [
      {
        text: "Ինձ համար շատ թանկ է հաշիվը",
        id: "Ինձ_համար_շատ_թանկ_է_հաշիվը",
      },
      {
        text: "Զգայուն տեղեկության հասանելիություն կա",
        id: "Զգայուն_տեղեկության_հասանելիություն_կա",
      },
    ],
  },
  {
    id: 3,
    icon: <img src="/assets/images/help-icons/help-icon-7.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Իմ նկարները տարածել են առանց թույլտվության",
      en: "My photos have been shared without permission",
    },
    description: {
      hy: "Իմ լուսանկարները օգտագործում են կամ տարածում են առանց իմ իմացության։",
      en: "My photos are being used or distributed without my knowledge or consent."
    },
    options: [
      {
        text: "Օգտագործում են կեղծ օգտահաշիվներում",
        id: "Օգտագործում_են_կեղծ_օգտահաշիվներում",
      },
      {
        text: "Կլոնավորել են իմ հաշիվը և գրում են իմ անունից",
        id: "Կլոնավորել_են_իմ_հաշիվը_և_գրում_են_իմ_անունից",
      },
      {
        text: "Օգտագործում են ինձ վարկաբեկելու կամ անհանգստացնելու համար",
        id: "Օգտագործում_են_ինձ_վարկաբեկելու_կամ_անհանգստացնելու_համար",
      },
      {
        text: "Տեղադրել են ատելության հրահրման խմբերում, որի անդամներն ինձ ճնշում են",
        id: "Տեղադրել_են_ատելության_հրահրման_խմբերում_որի_անդամներն_ինձ_ճնշում_են",
      },
    ],
  },
  {
    id: 4,
    icon: <img src="/assets/images/help-icons/help-icon-6.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Ինձ վարկաբեկել են նկարներով, խմբագրված վիզուալներով",
      en: "I've been defamed with photos or manipulated images",
    },
    description: {
      hy: "Իմ նկարները կամ խմբագրված վիզուալները տարածել են՝ ինձ վատ ներկայացնելու համար։",
      en: "My photos or edited visuals have been shared to damage my reputation."
    },
    options: [
      {
        text: "Տարածել են վարկաբեկման նպատակով",
        id: "Տարածել_են_վարկաբեկման_նպատակով",
      },
      {
        text: "Սպառնում կամ գումար են պահանջում՝ հրապարակման շանտաժով",
        id: "Սպառնում_կամ_գումար_են_պահանջում_հրապարակման_շանտաժով",
      },
      {
        text: "Ստեղծել են արհեստական պոռնոգրաֆիա (AI-ով)",
        id: "Ստեղծել_են_արհեստական_պոռնոգրաֆիա",
      },
    ],
  },
  {
    id: 5,
    icon: <img src="/assets/images/help-icons/help-icon-5.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Անհանգստանում եմ երեխայի առցանց անվտանգության համար",
      en: "I'm concerned about a child's online safety",
    },
    description: {
      hy: "Ուզում եմ համոզվել, որ նա պաշտպանված է համացանցում։ Կա մտահոգություն, կամ պարզապես ուզում եմ ավելի ուշադիր լինել նրա օնլայն վարքին։",
      en: "I want to ensure they're protected online. I have specific concerns or simply want to monitor their online activities more carefully."
    },
    options: [
      {
        text: "Երեխան շփվում է վտանգավոր մարդկանց հետ կամ խաղում է կասկածելի խաղեր",
        id: "Երեխան_շփվում_է_վտանգավոր_մարդկանց_հետ_կամ_խաղում_է_կասկածելի_խաղեր",
      },
      {
        text: "Ուզում եմ վստահ լինել, որ երեխայի առցանց միջավայրը ապահով է",
        id: "Ուզում_եմ_վստահ_լինել_որ_երեխայի_առցանց_միջավայրը_ապահով_է",
      },
    ],
  },
  {
    id: 6,
    icon: <img src="/assets/images/help-icons/help-icon-3.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Կիբեռբուլինգի եմ ենթարկվում",
      en: "I am experiencing cyberbullying",
    },
    description: {
      hy: "Շրջապատս կամ այլոք ինձ ծաղրում են համացանցում։",
      en: "People are harassing or mocking me online."
    },
    options: [
      {
        text: "Շրջապատս և այլոք ծաղրում են ինձ",
        id: "Շրջապատս_և_այլոք_ծաղրում_են_ինձ",
      },
    ],
  },
  {
    id: 7,
    icon: <img src="/assets/images/help-icons/help-icon-4.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Սեռական հետապնդման եմ ենթարկվում",
      en: "I am being sexually harassed",
    },
    description: {
      hy: "Մեկը, ով դեռահաս է ձևացնում, փորձում է ընկերանալ, ստանալ վստահություն և հետո պահանջում է անձնական տվյալներ։",
      en: "Someone is pretending to be a teenager to befriend me, gain my trust, and then demand personal information or inappropriate content."
    },
    options: [
      {
        text: "Վստահությունս շահել են, ընկերացել ու տվյալներս օգտագործել են իմ դեմ",
        id: "Վստահությունս_շահել_են_ընկերացել_ու_տվյալներս_օգտագործել_են_իմ_դեմ",
      },
    ],
  },
  {
    id: 8,
    icon: <img src="/assets/images/help-icons/help-icon-8.png" alt="help-icon" className="scale-[0.7]" />,
    title: {
      hy: "Այլ իրավիճակ",
      en: "Other situation",
    },
    description: {
      hy: "Ունեմ մի այլ խնդիր կամ դեպք, որը այստեղ նշված չէ։",
      en: "I have another problem or situation that isn't listed here."
    },
    options: [
      {
        text: "Այլ իրավիճակ",
        id: "Այլ_իրավիճակ",
      },
    ],
  },
];


export type HelpItemOptionType = {
  text: string;
  id: string;
}

export type HelpItemType = {
  id: number;
  icon: React.ReactNode;
  title: {
    [key in Language]: string;
  };
  description: {
    [key in Language]: string;
  };
  options: HelpItemOptionType[];
};
