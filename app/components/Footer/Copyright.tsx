import type { Language } from "~/Types";

const texts = {
  hy: {
    copyright: "©2025 — CyberHUB-AM | Բոլոր իրավունքները պաշտպանված են։",
  },
  en: {
    copyright: "©2025 — CyberHUB-AM | All rights reserved.",
  },
};

export const Copyright = ({ lang = "hy" }: { lang?: Language }) => {
  return (
    <div className="container mx-auto px-4">
      <div className="border-t border-gray-300 pt-10 pb-9 text-center">
        <p className="text-sm tracking-[1px] leading-5 text-center text-gray-600">
          {texts[lang].copyright}
        </p>
      </div>
    </div>
  )
};
