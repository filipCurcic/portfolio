import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import useTranslation from '../hooks/UseTranslation';

import FadingComponent from '../hoc/FadingComponent';
import AnimatedButton from './AnimatedButton';
import SlidingComponent from '../hoc/SlidingComponent';

const PortfolioItem = ({
  image,
  title,
  description,
  summary,
  click,
  sourceUrl,
  liveUrl,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <>
      <FadingComponent>
        <motion.div
          className={
            theme
              ? 'portfolio-item portfolio-item-dark'
              : 'portfolio-item portfolio-item-light'
          }
        >
          <div className="grid-rows">
            <div>
              <h1>{t(title)}</h1>
              <h4>{t(summary)}</h4>
            </div>
            <div className="grid-columns">
              <SlidingComponent direction={true} origin="x">
                <div>
                  <p>{t(description)}</p>
                  <button onClick={click}>open modal</button>
                </div>
              </SlidingComponent>
              <SlidingComponent direction={false} origin="x">
                <div className="buttons">
                  <AnimatedButton href={liveUrl} theme={theme}>
                    Live Version
                  </AnimatedButton>
                  <AnimatedButton href={sourceUrl} theme={theme}>
                    Source Code
                  </AnimatedButton>
                </div>
                <img src={image} alt="" />
              </SlidingComponent>
            </div>
          </div>
        </motion.div>
      </FadingComponent>
    </>
  );
};

export default PortfolioItem;
