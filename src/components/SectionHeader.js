import React, { useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => {
  const theme = useTheme();
  return (
    <motion.div
      className="section-header"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1 className={theme ? 'dark' : 'light'}>{title}</h1>
    </motion.div>
  );
};

export default SectionHeader;
