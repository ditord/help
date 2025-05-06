import { Link } from "react-router";
import type { Language } from "~/Types";

const texts = {
  hy: {
    title: "Բլոգ",
    blogCommonTitle: "Վերնագիր",
    blogCommonDescription: "Կարճ նկարագրություն",
    button: "Դիտել ավելին",
  },
  en: {
    title: "Blog",
    blogCommonTitle: "Title",
    blogCommonDescription: "Short description",
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
                <div className="shadow-[0_20px_13px_0_#00000005] bg-white mb-6 p-6">
                  <div className="w-full aspect-video bg-[#D9D9D9]" />
                  <div className="pt-6">
                    <p className="text-xl font-bold">{texts[lang].blogCommonTitle}</p>
                    <p className="pt-6">{texts[lang].blogCommonDescription}</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>

        <div className="text-center mt-6">
          <Link to={`/${lang}/blogs/`} className="btn btn-small">
            {texts[lang].button}
          </Link>
        </div>
      </div>
    </section>
  );
};