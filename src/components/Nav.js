import React, { useContext } from 'react';
import cart from '../assets/icons8-warenkorb-50.png';
import lang from '../assets/icons8-sprache-50.png';
import { useTranslation } from 'react-i18next';
import LanguageContext from './LanguageContext';

import './Nav.css';

export default function Nav({ count }) {
  const { language, setLanguage } = useContext(LanguageContext);
  const { t, i18n } = useTranslation();
  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    const newLanguage = currentLanguage === 'en' ? 'de' : 'en';
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };
  return (
    <div className='nav-container'>
      <div className='nav-cart'>
        <img src={cart}></img>
        {count > 0 ? <div className='count-circle'>{count}</div> : ''}
      </div>
      <div onClick={() => toggleLanguage()} className='nav-lang'>
        <img src={lang}></img>
      </div>
    </div>
  );
}
