import { useEffect } from 'react';
import { Link } from 'react-router';
import { useUserStore, type UserType } from '~/store';

export const UserTypePopup = ({ link = "/hy/" }) => {
  const { setUserType, userType } = useUserStore();

  const handleSubmit = (selectedType: UserType) => {
    if (selectedType) {
      document.body.classList.remove('overflow-hidden');
      setUserType(selectedType);
    }
  };

  useEffect(() => {
    if (!userType) {
      document.body.classList.add('overflow-hidden');
    }
    return () => {
      if (userType) {
        document.body.classList.remove('overflow-hidden');
      }
    };
  }, [userType]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B2B30]/60">
      <div className="bg-white rounded-sm shadow-lg p-6 sm:w-auto w-full max-sm:h-full flex flex-col justify-center max-sm:px-4">
        <div className="mb-4 text-center">
          <h2 className="text-xl font-bold">Ումի՞ց է հարցը</h2>
        </div>

        <p className="text-lg mb-6 text-center">Նշիր ճիշտ տարբերակը։<br />Քո պատասխանը կօգնի մեզ աջակցել ճիշտ ձևով։</p>

        <div className="flex justify-between max-sm:flex-col gap-4">
          <Link
            to={link}
            onClick={() => handleSubmit('child')}
            className="px-4 py-2 text-center text-lg font-medium rounded-sm text-[#5188D7] bg-[#EFF1F3] hover:text-white hover:bg-[#5188D7] transition-colors duration-300 whitespace-nowrap"
          >
            երեխա / դեռահաս
          </Link>

          <Link
            to={link}
            onClick={() => handleSubmit('parent')}
            className="px-4 py-2 text-center text-lg font-medium rounded-sm text-[#5188D7] bg-[#EFF1F3] hover:text-white hover:bg-[#5188D7] transition-colors duration-300 whitespace-nowrap"
          >
            ծնող / խնամակալ
          </Link>
        </div>
      </div>
    </div>
  );
};
