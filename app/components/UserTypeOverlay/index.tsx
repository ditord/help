import { useEffect, useState } from 'react';
import { useUserStore } from '~/store';
import { HeaderTop } from '~/components/Header/HeaderTop';
import type { Language } from '~/Types';

type Choice = 'child' | 'parent';

const texts = {
  hy: {
    title: 'ԿիբեռՉատ',
    tagline: 'Աջակցություն կիբեռանվտանգության հարցերով',
    features: [['Անվտանգ', 'և ապահով'], ['Անվճար'], ['Անանուն'], ['Մասնագիտական', 'և պրակտիկ']],
    heading: 'Ումի՞ց է հարցը',
    subheading: ['Նշիր ճիշտ տարբերակը՝ քեզ համապատասխան', 'բովանդակությունը տեսնելու համար'],
    child: {
      title: 'Երեխա / Դեռահաս',
      badge: 'մինչև 18 տարեկան',
      description: 'Եթե բախվել ես բուլինգի, շանտաժի, հաշիվների կոտրման կամ այլ առցանց սպառնալիքների, մենք կօգնենք։',
    },
    parent: {
      title: 'Ծնող / Խնամակալ',
      badge: 'մեծահասակ',
      description: 'Եթե ցանկանում եք պաշտպանել երեխային առցանց վտանգներից, կտրամադրենք ուղեցույց, ռեսուրսներ և մասնագիտական աջակցություն։',
    },
    continue: 'ՇԱՐՈՒՆԱԿԵԼ',
    note: '*Ընտրությունը կարելի է փոխել ցանկացած պահի',
  },
  en: {
    title: 'CyberChat',
    tagline: 'Support on cybersecurity matters',
    features: [['Safe &', 'protected'], ['Free'], ['Anonymous'], ['Professional', '& practical']],
    heading: 'Who is the question about?',
    subheading: ['Choose the right option to see', 'the content that fits you'],
    child: {
      title: 'Child / Teen',
      badge: 'under 18',
      description: 'If you have faced bullying, blackmail, account hacking, or other online threats, we can help.',
    },
    parent: {
      title: 'Parent / Guardian',
      badge: 'adult',
      description: 'If you want to protect a child from online dangers, we provide guidance, resources, and professional support.',
    },
    continue: 'CONTINUE',
    note: '*You can change your choice at any time',
  },
};


const ShieldIcon = ({ className = 'w-[26px] h-[26px]' }) => (
  <img src="/assets/images/user-type/shield.svg" alt="" aria-hidden="true" className={className} />
);

const HeartIcon = ({ className = 'w-[26px] h-[26px]' }) => (
  <img src="/assets/images/user-type/heart.svg" alt="" aria-hidden="true" className={className} />
);

const IncognitoIcon = ({ className = 'w-[26px] h-[26px]' }) => (
  <img src="/assets/images/user-type/anonymous.svg" alt="" aria-hidden="true" className={className} />
);

const ChatCheckIcon = ({ className = 'w-[26px] h-[26px]' }) => (
  <img src="/assets/images/user-type/message.svg" alt="" aria-hidden="true" className={className} />
);

const PersonIcon = ({ className = 'w-[70px] h-[70px]' }) => (
  <img src="/assets/images/user-type/child.svg" alt="" aria-hidden="true" className={className} />
);

const ParentIcon = ({ className = 'w-[70px] h-[70px]' }) => (
  <img src="/assets/images/user-type/parent.svg" alt="" aria-hidden="true" className={className} />
);

const featureIcons = [ShieldIcon, HeartIcon, IncognitoIcon, ChatCheckIcon];

interface CardProps {
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  isSelected: boolean;
  onSelect: () => void;
}

const Card = ({ icon, title, badge, description, isSelected, onSelect }: CardProps) => (
  <button
    type="button"
    onClick={onSelect}
    aria-pressed={isSelected}
    className={`group flex-1 flex flex-col items-center text-center rounded-3xl bg-white px-6 pt-4 pb-8 transition-all duration-300 cursor-pointer ${
      isSelected
        ? 'outline outline-[#5188D7] shadow-[0_30px_60px_-24px_rgba(63,105,150,0.45)] -translate-y-1'
        : 'shadow-[0_30px_60px_-30px_rgba(63,105,150,0.35)] hover:-translate-y-1'
    }`}
  >
    <span className="flex items-center justify-center">{icon}</span>
    <h3 className="mt-4 text-lg leading-tight font-bold text-[#2B2B30]">{title}</h3>
    <span
      className={`mt-3 px-6 py-2 rounded-full text-base font-400 transition-colors duration-300 ${
        isSelected ? 'bg-[linear-gradient(225deg,_#83ceec,_#598ddc)] text-white' : 'bg-[#F0F0F0] text-[#5188D7]'
      }`}
    >
      {badge}
    </span>
    <p className="mt-4 text-[#6D6D6D] text-base leading-[1.55] max-w-[300px]">{description}</p>
  </button>
);

export const UserTypeOverlay = ({ lang = 'hy' }: { lang?: Language }) => {
  const setUserType = useUserStore((s) => s.setUserType);
  const [selected, setSelected] = useState<Choice | null>(null);
  const t = texts[lang];

  useEffect(() => {
    document.body.classList.add('overflow-hidden');
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  const handleContinue = () => {
    if (selected) {
      setUserType(selected);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-white">
      {/* Decorative corner shapes */}
      <img
        src="/assets/images/shape_1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-20 right-0 w-40 md:w-64 rotate-180 z-0"
      />
      <img
        src="/assets/images/shape_1.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute bottom-10 left-0 w-40 md:w-64 z-0"
      />

      {/* Contact bar — same as the site header top */}
      <HeaderTop lang={lang} />

      <div className="relative z-10 flex min-h-[calc(100%-62px)] flex-col items-center justify-center px-4 pt-8 pb-24">
        {/* Brand */}
        <img
          src="/assets/images/logo.svg"
          alt={t.title}
          className="h-16 w-auto"
        />
        <p className="mt-6 text-[#2B2B30] font-bold text-center text-sm sm:text-base">{t.tagline}</p>

        {/* Feature row — fixed grid: 2 cols on mobile (2x2), 4 cols on desktop (single row).
            Left divider on every cell EXCEPT the first of each row (nth-child by column count). */}
        <div className="mt-12 w-full max-w-4xl px-6 sm:px-0">
          <div className="grid grid-cols-2 justify-center gap-x-4 gap-y-5 md:grid-cols-4 md:gap-x-0 [&>*:nth-child(2n+1)]:border-l-0 md:[&>*:nth-child(2n+1)]:border-l md:[&>*:nth-child(4n+1)]:border-l-0">
            {featureIcons.map((Icon, i) => (
              <div
                key={i}
                className="flex items-center gap-2.5 sm:gap-3 md:px-6 md:border-l md:border-[#D8E1EE] border-[#D8E1EE]"
              >
                <Icon className="w-10 h-10 md:w-12 md:h-12 shrink-0" />
                <span className="text-[#2B2B30] text-sm md:text-base font-bold leading-tight text-left">
                  {t.features[i].map((line, j) => (
                    <span key={j} className="block">{line}</span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-18 text-2xl sm:text-3xl font-bold text-center text-[#2B2B30]">{t.heading}</h2>
        <p className="mt-6 text-center text-[#2B2B30] font-bold text-sm sm:text-base max-w-2xl">
          {t.subheading[0]}
          <br />
          {t.subheading[1]}
        </p>

        {/* Cards */}
        <div className="mt-12 w-full max-w-3xl flex flex-col sm:flex-row gap-4 sm:gap-6">
          <Card
            icon={<PersonIcon />}
            title={t.child.title}
            badge={t.child.badge}
            description={t.child.description}
            isSelected={selected === 'child'}
            onSelect={() => setSelected('child')}
          />
          <Card
            icon={<ParentIcon />}
            title={t.parent.title}
            badge={t.parent.badge}
            description={t.parent.description}
            isSelected={selected === 'parent'}
            onSelect={() => setSelected('parent')}
          />
        </div>

        {/* Continue — same style as the "Դիտել մանրամասները" button (.btn.btn-blue.btn-small) */}
        <button
          type="button"
          onClick={handleContinue}
          disabled={!selected}
          className={`btn btn-small group mt-12 inline-flex items-center justify-center gap-2 !min-w-[270px] hover:!opacity-100 ${
            selected
              ? 'btn-blue cursor-pointer'
              : 'cursor-not-allowed pointer-events-none !text-[#808080] bg-[#EFEFEF] [&:after]:bg-[#EFEFEF]'
          }`}
        >
          {t.continue}
          <img
            src="/assets/images/arrow-right.svg"
            alt=""
            aria-hidden="true"
            className={`w-9 ${
              selected ? 'brightness-0 invert' : 'brightness-0 opacity-50'
            }`}
          />
        </button>

        <p className="mt-7 text-center text-[#9A9A9A] font-light text-base">{t.note}</p>
      </div>
    </div>
  );
};
