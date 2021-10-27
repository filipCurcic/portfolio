import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SlidingComponent = ({ children, direction }) => {
  const { ref, inView } = useInView();

  const animation = useAnimation();
  useEffect(() => {
    if (inView) {
      animation.start({
        x: 0,
        transition: {
          duration: 0.5,
        },
      });
    }
    if (!inView) {
      animation.start({
        x: direction ? -200 : 200,
        transition: {
          duration: 0.5,
        },
      });
    }
  }, [inView, animation, direction]);
  return (
    <motion.div ref={ref} animate={animation}>
      {children}
    </motion.div>
  );
};

export default SlidingComponent;
