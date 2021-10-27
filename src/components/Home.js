import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import Parallax from 'react-rellax';
import useTranslation from '../hooks/UseTranslation';

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: 'beforeChildren',
        staggerChildren: 0.6,
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
    transiton: {
      duration: 2,
    },
  };

  return (
    <header id="home">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={
          theme
            ? 'home-container flex-column center dark'
            : 'home-container flex-column center light'
        }
      >
        <Parallax speed={9}>
          <div className="title">
            <motion.h1 variants={childVariants}>
              {' '}
              <span>filip</span> <span> ćurčić </span>{' '}
            </motion.h1>
            <motion.h2 variants={childVariants}>front end developer</motion.h2>
          </div>
        </Parallax>
        <motion.div
          variants={childVariants}
          className="avatar-container center"
        >
          <Parallax speed={7}>
            <div id={theme ? 'avatar-dark' : 'avatar-light'}></div>
          </Parallax>
        </motion.div>
        <div className={theme ? 'intro dark' : 'intro light'}>
          <Parallax speed={6}>
            <motion.p variants={childVariants}>{t('home_greeting')}</motion.p>
          </Parallax>
          <Parallax speed={5}>
            <motion.p variants={childVariants}>{t('home_intro1')}</motion.p>
          </Parallax>
          <Parallax speed={4}>
            <motion.p variants={childVariants}>{t('home_intro2')}</motion.p>
          </Parallax>
        </div>
      </motion.div>
    </header>
  );
};

export default Home;
