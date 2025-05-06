import { Link } from "react-router";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Ծնողավարումը թվային դարում. առցանց դասընթաց բոլոր ծնողների համար",
    info1: {
      title: "Թեմա`",
      description: "Ծնողավարումը թվային դարում",
    },
    info2: {
      title: "Աղբյուր`",
      description: "ՅՈՒՆԻՍԵՖ, «Ծնողի դպրոց» ՀԿ",
    },
    button: "մանրամասն",
  },
  en: {
    title: "Parenting in the digital age: online course for all parents",
    info1: {
      title: "Topic:",
      description: "Parenting in the digital age",
    },
    info2: {
      title: "Source:",
      description: "UNICEF, \"Parent School\" NGO",
    },
    button: "more details",
  },
};

export const AdvertSection: React.FC<{ lang?: Language }> = ({ lang = "en" }) => {
  return (
    <section id="advert" className="py-20">
      <div className="container mx-auto px-4 relative">
        <div className="flex max-lg:flex-col 2xl:gap-x-20 lg:gap-x-10 gap-y-5">
          <img src="/assets/images/advert.webp" alt="Advert" className="grayscale aspect-video object-cover" />
          <div className="flex flex-col flex-1">
            <p className="text-2xl font-bold leading-relaxed text-gray-700">
              {texts[lang].title}  
            </p>
            <div className="flex-1">
              <p className="flex items-center gap-4 text-xl mt-5">
                <i className="icon icon-target text-[2rem]" />
                <span className="font-bold">{texts[lang].info1.title}</span>
                <span>{texts[lang].info1.description}</span>
              </p>
              <p className="flex items-center gap-4 text-xl mt-2">
                <i className="icon icon-help text-[2rem]" />
                <span className="font-bold">{texts[lang].info2.title}</span>
                <span>{texts[lang].info2.description}</span>
              </p>
            </div>
            <Link 
              to="https://learning.babycef.am/courses/public"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-small w-fit mt-5"
            >
              {texts[lang].button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
