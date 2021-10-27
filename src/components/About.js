import React from 'react';
import FadingComponent from '../hoc/FadingComponent';
import { useTheme } from '../context/ThemeContext';
import AccentedText from './AccentedText';
import useTranslation from '../hooks/UseTranslation';

const About = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <section id="about" className={theme ? 'about-dark' : 'about-light'}>
      <FadingComponent>
        <h2>
          {t('about1.value1')}
          <AccentedText>Filip</AccentedText>. {t('about1.value2')}
        </h2>
      </FadingComponent>

      <FadingComponent>
        <h2>
          {t('about2.value1')}
          <AccentedText>{t('about2.value2')} </AccentedText>.
        </h2>
      </FadingComponent>

      <FadingComponent>
        <h2>
          {t('about3.value1')}
          <AccentedText>Front End </AccentedText>
          {t('about3.value2')}
        </h2>
      </FadingComponent>

      <FadingComponent>
        <h2>{t('about4')}</h2>
      </FadingComponent>
    </section>
  );
};

export default About;
