import { Link } from "react-router";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Բլոգ",
    blogCommonTitle: "Վերնագիր",
    button: "Դիտել ավելին",
  },
  en: {
    title: "Blog",
    blogCommonTitle: "Title",
    button: "See more",
  },
};

export const BlogsSection: React.FC<{ lang?: Language }> = ({ lang = "hy" }) => {
  return (
    <section id="blogs" className="py-20 bg-[#fafafa]">
      <div className="container mx-auto px-4 relative">
        <p className="text-3xl md:text-4xl font-bold leading-tight mb-12">{texts[lang].title}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {
            Array.from(Array(4)).map((_, index) => (
              <div key={index}>
                <div className="shadow-[0_4px_10px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)] rounded-sm bg-white mb-6 p-6 cursor-pointer">
                  <div className="w-full aspect-video bg-[#D9D9D9]" />
                  <div className="pt-6">
                    <p className="text-xl font-bold">{texts[lang].blogCommonTitle}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="text-center mt-6">
          <Link to={`/${lang}/`} className="btn btn-small">
            {texts[lang].button}
          </Link>
        </div>
      </div>
    </section>
  );
};