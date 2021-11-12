import React from 'react';
import ReactDom from 'react-dom';
import { useTheme } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';
import useTranslation from '../hooks/UseTranslation';

const Modal = ({ open, click, closeModal, content }) => {
  const theme = useTheme();
  const { t } = useTranslation();
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
            <div className="modal-heading">
              {t('modal_more_info')}
              <button className="close-button" onClick={click}>
                x
              </button>
            </div>
            {content}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById('portal')
  );
};

export default Modal;
