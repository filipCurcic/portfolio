import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FadingComponent = ({ children, duration = 1 }) => {
  const { ref, inView } = useInView();

  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          duration: duration,
        },
      });
    }
    if (!inView) {
      animation.start({
        opacity: 0,
        transition: {
          duration: 1,
        },
      });
    }
  }, [inView, animation, duration]);

  return (
    <motion.div ref={ref} animate={animation}>
      {children}
    </motion.div>
  );
};

export default FadingComponent;
