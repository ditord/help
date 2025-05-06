import { Link } from "react-router";

export const AboutUsSection: React.FC = () => {
  return (
    <section id="about-us" className="py-20">
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
            <p className="text-3xl md:text-4xl font-bold leading-tight">Մեր մասին</p>
          </div>
          <div className="w-full lg:w-2/3">
            <p className="text-2xl font-light leading-relaxed text-gray-700 mb-8">
            Այս հարթակը ստեղծվել է քեզ համար, որպեսզի դու կարողանաս ավելի վստահ ու պաշտպանված լինել համացանցում։ Այս հարթակը համատեղում է կանխարգելման և աջակցման գործիքներ՝ օգնելու քեզ ավելի լավ հասկանալ կիբեռվտանգները, խուսափել ռիսկերից և ճիշտ արձագանքել արդեն առաջացած խնդիրներին։ Հարթակում կգտնես ուսուցողական նյութեր, իրական դեպքեր և հնարավորություն՝ անանուն օգնություն ստանալու chatbot-ի կամ թեժ գծի միջոցով։ Մեր նպատակը անհրաժեշտ գիտելիքներն ու աջակցությունը տալն է, որ թվային աշխարհում քեզ ապահով զգաս։
            </p>
            <Link 
              to="/about-us/" 
              className="btn btn-small"
            >
              մանրամասն
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
