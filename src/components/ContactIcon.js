import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import React from 'react';
import SlidingComponent from '../hoc/SlidingComponent';
import useWindowDimensions from '../hooks/UseWindowDimension';
import { useTheme } from './../context/ThemeContext';

const ContactIcon = ({ direction, icon, link, iconSize, origin }) => {
  const theme = useTheme();
  const windowDimensions = useWindowDimensions();
  return windowDimensions.width > 480 ? (
    <SlidingComponent direction={direction} origin={origin}>
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.35,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon
            icon={icon}
            inverse={theme ? true : false}
            size={iconSize}
          />
        </a>
      </motion.div>
    </SlidingComponent>
  ) : (
    <motion.div
      whileHover={{
        rotate: 360,
        scale: 1.35,
        transition: {
          duration: 0.5,
        },
      }}
    >
      <a href={link} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon
          icon={icon}
          inverse={theme ? true : false}
          size={iconSize}
        />
      </a>
    </motion.div>
  );
};

export default ContactIcon;
