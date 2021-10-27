import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faGit } from '@fortawesome/free-brands-svg-icons';
import { useTheme } from './../context/ThemeContext';
import { motion } from 'framer-motion';

const Contact = () => {
  const theme = useTheme();
  return (
    <section id="contact">
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.35,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <a
          href="https://github.com/filipCurcic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faGit}
            inverse={theme ? true : false}
            size="5x"
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.35,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <a
          href="https://www.linkedin.com/in/filip-curcic-025392162/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            inverse={theme ? true : false}
            size="4x"
          />
        </a>
      </motion.div>

      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.35,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <a
          href="https://www.instagram.com/filip_crc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            size="4x"
            inverse={theme ? true : false}
          />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          rotate: 360,
          scale: 1.35,
          transition: {
            duration: 0.5,
          },
        }}
      >
        <a
          href="https://www.facebook.com/filip.curcic.7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon
            icon={faFacebookF}
            inverse={theme ? true : false}
            size="4x"
          />
        </a>
      </motion.div>
    </section>
  );
};

export default Contact;
