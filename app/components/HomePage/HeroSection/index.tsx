import { useState } from 'react';
import { Link } from 'react-router';
import type { Language } from '~/Types';

const texts = {
  hy: {
    title: "ԿիբեռՉատ",
    description: "Երեխաների և դեռահասների հարցերով աջակցության հարթակ",
    description2: "Իրականացվում է ՅՈՒՆԻՍԵՖ-ի, Բազմակողմանի տեղեկատվության ինստիտուտի և CyberHUB-ի կողմից՝ Միացյալ Թագավորության կառավարության ֆինանսավորմամբ և Հայաստանի կառավարության հետ համատեղ:",
    btn1: "Ունեմ խնդիր",
    btn2: "Օգտակար նյութեր",
  },
  en: {
    title: "CyberChat",
    description: "Support platform for children and adolescents",
    description2: "Implemented by UNICEF, Media Diversity Institute and CyberHUB, with funding from the UK government and in cooperation with the Government of Armenia.",
    btn1: "I have a problem",
    btn2: "Useful materials",
  }
}

export const HeroSection = ({ lang = "hy" }: { lang?: Language }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [iframeKey, setIframeKey] = useState(0);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  const handleIframeError = () => {
    setIframeKey(prevKey => prevKey + 1);
  };

  return (
    <section id="hero" className="lg:h-175 bg-[url('/assets/images/background_shape@2x.png')] bg-[100%_top] bg-contain bg-no-repeat">
      <div className="container h-full mx-auto flex gap-20 max-lg:py-20 max-lg:flex-col">
        <div className="flex flex-1 h-full items-center px-4">
          <div className="flex flex-col gap-12">
            <h1 className="text-5xl font-black">{texts[lang].title}</h1>
            <h2 className="text-3xl md:text-4xl font-light">{texts[lang].description}</h2>
            <h3 className="text-xl md:text-2xl font-light">{texts[lang].description2}</h3>
            <div className="flex gap-8 max-md:flex-col items-start">
              <Link
                to={`/${lang}/help/`}
                className="btn btn-blue"
              >
                {texts[lang].btn1}
              </Link>
              <Link 
                to={`/${lang}/resources/`}
                className="btn"
              >
                {texts[lang].btn2}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center px-4 relative">
          {isLoading && (
            <div className="w-full aspect-video bg-gray-200 z-10 animate-pulse" />
          )}
          <iframe
            className={`w-full aspect-video ${isLoading ? "hidden" : "block"}`}
            src="https://www.youtube.com/embed/FOD_DCYDYVY?feature=oembed&rel=0&modestbranding=1&iv_load_policy=3"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            onLoad={handleIframeLoad}
            onError={handleIframeError}
            style={{ opacity: isLoading ? 0 : 1 }}
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}