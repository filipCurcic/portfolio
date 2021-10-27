import React from 'react';
import { motion } from 'framer-motion';
import FadingComponent from './FadingComponent';

const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="intro-container"
    >
      front end
    </motion.div>
  );
};

export default Intro;
