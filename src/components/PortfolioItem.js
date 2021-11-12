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
  more,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  console.log(more);

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
              <div className="buttons">
                <AnimatedButton theme={theme} href={liveUrl}>
                  Live Version
                </AnimatedButton>
                <AnimatedButton theme={theme} href={sourceUrl}>
                  Source Code
                </AnimatedButton>
              </div>
            </div>
            <div className="grid-columns">
              <SlidingComponent direction={true} origin="x">
                <div>
                  <p>{t(description)}</p>
                  {more && (
                    <button
                      className={theme ? 'button-dark' : 'button-light'}
                      onClick={() => click(more)}
                    >
                      More..
                    </button>
                  )}
                </div>
              </SlidingComponent>
              <SlidingComponent
                direction={false}
                origin="x"
                style={{ overflow: 'hidden' }}
              >
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
