import React from 'react';
import ReactDom from 'react-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, click, closeModal, children }) => {
  console.log(open ? 'otvoren' : 'Zatvoren');
  const theme = useTheme();
  const backdrop = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.01 } },
  };
  const modal = {
    hidden: { y: '100vw' },
    visible: { y: '-40%', x: '-33%' },
  };
  return ReactDom.createPortal(
    <AnimatePresence exitBeforeEnter>
      {open && (
        <motion.div
          variants={backdrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="modal-backdrop"
          onClick={click}
        >
          <motion.div
            className={theme ? 'modal modal-dark' : 'modal modal-light'}
            variants={modal}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            MODAL
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal')
  );
};

export default Modal;
