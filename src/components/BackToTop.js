import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useEventListener from '../hooks/UseEventListener';

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const theme = useTheme();

  useEventListener('scroll', () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="scrollTop"
      style={{
        height: 40,
        display: showScroll ? 'flex' : 'none',
        zIndex: 1000000,
      }}
    >
      <span
        className={theme ? 'back-to-top-dark' : 'back-to-top-light'}
        onClick={scrollTop}
      >
        &#8593;
      </span>
    </div>
  );
};

export default BackToTop;
