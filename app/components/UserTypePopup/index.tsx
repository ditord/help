import React, { useState } from 'react';
import { useUserStore, type UserType } from '~/store';

interface UserTypePopupProps {
  lang?: 'en' | 'hy';
}

const texts = {
  hy: {
    title: 'Օգնության բաժնում ավելին ստանալու համար',
    question: 'Ո՞վ եք դուք',
    parent: 'Ես ծնող/խնամակալ եմ',
    child: 'Ես երեխա/դեռահաս եմ',
    submit: 'Հաստատել',
    close: 'Փակել'
  },
  en: {
    title: 'To get more in help section',
    question: 'Who are you?',
    parent: 'I am a parent/guardian',
    child: 'I am a child/teenager',
    submit: 'Confirm',
    close: 'Close'
  }
};

export const UserTypePopup: React.FC<UserTypePopupProps> = ({ lang = 'hy' }) => {
  const { setUserType } = useUserStore();
  const [selectedType, setSelectedType] = useState<UserType>(null);
  const [isOpen, setIsOpen] = useState(true);

  const handleSubmit = () => {
    if (selectedType) {
      setUserType(selectedType);
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-sm shadow-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{texts[lang].title}</h2>
          <button 
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-6">
          <p className="text-lg mb-4">{texts[lang].question}</p>
          
          <div className="space-y-3">
            <div 
              className={`flex items-center p-3 border rounded-sm cursor-pointer transition-colors ${
                selectedType === 'parent' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedType('parent')}
            >
              <input
                type="radio"
                id="popupParent"
                checked={selectedType === 'parent'}
                onChange={() => setSelectedType('parent')}
                className="mr-3 h-5 w-5"
              />
              <label htmlFor="popupParent" className="text-lg cursor-pointer">{texts[lang].parent}</label>
            </div>
            
            <div 
              className={`flex items-center p-3 border rounded-sm cursor-pointer transition-colors ${
                selectedType === 'child' 
                  ? 'border-blue-500 bg-blue-50' 
                  : 'border-gray-300 hover:bg-gray-50'
              }`}
              onClick={() => setSelectedType('child')}
            >
              <input
                type="radio"
                id="popupChild"
                checked={selectedType === 'child'}
                onChange={() => setSelectedType('child')}
                className="mr-3 h-5 w-5"
              />
              <label htmlFor="popupChild" className="text-lg cursor-pointer">{texts[lang].child}</label>
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button 
            onClick={handleClose}
            className="px-4 py-2 border border-gray-300 rounded-sm hover:bg-gray-100 transition-colors"
          >
            {texts[lang].close}
          </button>
          
          <button 
            onClick={handleSubmit}
            disabled={!selectedType}
            className={`px-6 py-2 rounded-sm transition-colors ${
              selectedType 
                ? 'bg-[#5a8fdc] hover:bg-[#4a7fcb] text-white' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            {texts[lang].submit}
          </button>
        </div>
      </div>
    </div>
  );
};
