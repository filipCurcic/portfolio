import React from 'react';
import { motion } from 'framer-motion';
import useTranslation from './../hooks/UseTranslation';
import { useTheme } from '../context/ThemeContext';

const LanguageSwitch = () => {
  const { setLanguage, language } = useTranslation();
  const theme = useTheme();
  const switchLanguage = (language) => {
    setLanguage(language);
    window.location.reload();
  };
  return (
    <div className={theme ? 'language-switch dark' : 'language-switch light'}>
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        className={`${language === 'srb' ? 'active' : ''} ${
          theme ? 'dark' : 'light'
        }`}
        onClick={() => switchLanguage('srb')}
      >
        SRB
      </motion.button>
      |
      <motion.button
        whileHover={{
          scale: 1.1,
        }}
        className={`${language === 'en' ? 'active' : ''} ${
          theme ? 'dark' : 'light'
        }`}
        onClick={() => switchLanguage('en')}
      >
        EN
      </motion.button>
    </div>
  );
};

export default LanguageSwitch;
