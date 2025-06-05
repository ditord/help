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
      text: "Ռեսուրսներ",
      href: "/hy/resources/",
    },
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
      text: "Resources",
      href: "/en/resources/",
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
      hy: "+374 95 93 83 63",
      en: "+374 95 93 83 63",
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

export const helpItems: HelpItemType[] = [
  {
    id: 1,
    icon: <img src="/assets/images/help-icons/help-icon-1.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-1.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-1.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
    ],
  },
  {
    id: 2,
    icon: <img src="/assets/images/help-icons/help-icon-2.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-2.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-2.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
      {
        text: "Զգայուն տեղեկության հասանելիություն կա",
        id: 2,
      },
    ],
  },
  {
    id: 3,
    icon: <img src="/assets/images/help-icons/help-icon-7.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-7.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-7.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
      {
        text: "Կլոնավորել են իմ հաշիվը և գրում են իմ անունից",
        id: 2,
      },
      {
        text: "Օգտագործում են ինձ վարկաբեկելու կամ անհանգստացնելու համար",
        id: 3,
      },
      {
        text: "Տեղադրել են ատելության հրահրման խմբերում, որի անդամներն ինձ ճնշում են",
        id: 4,
      },
    ],
  },
  {
    id: 4,
    icon: <img src="/assets/images/help-icons/help-icon-6.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-6.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-6.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
      {
        text: "Սպառնում կամ գումար են պահանջում՝ հրապարակման շանտաժով",
        id: 2,
      },
      {
        text: "Ստեղծել են արհեստական պոռնոգրաֆիա (AI-ով)",
        id: 3,
      },
    ],
  },
  {
    id: 5,
    icon: <img src="/assets/images/help-icons/help-icon-5.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-5.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-5.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
      {
        text: "Ուզում եմ վստահ լինել, որ երեխայի առցանց միջավայրը ապահով է",
        id: 2,
      },
    ],
  },
  {
    id: 6,
    icon: <img src="/assets/images/help-icons/help-icon-3.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-3.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-3.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
    ],
  },
  {
    id: 7,
    icon: <img src="/assets/images/help-icons/help-icon-4.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-4.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-4.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
    ],
  },
  {
    id: 8,
    icon: <img src="/assets/images/help-icons/help-icon-8.svg" alt="help-icon" className="scale-[0.7]" />,
    iconInactive: <img src="/assets/images/help-icons/help-inactive-8.svg" alt="help-icon-inactive" className="w-full" />,
    iconActive: <img src="/assets/images/help-icons/help-active-8.svg" alt="help-icon-active" className="w-full" />,
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
        id: 1,
      },
    ],
  },
];


export type HelpItemOptionType = {
  text: string;
  id: number;
}

export type HelpItemType = {
  id: number;
  icon: React.ReactNode;
  iconInactive: React.ReactNode;
  iconActive: React.ReactNode;
  title: {
    [key in Language]: string;
  };
  description: {
    [key in Language]: string;
  };
  options: HelpItemOptionType[];
};
