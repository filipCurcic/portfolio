import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem';
import useWindowDimensions from '../hooks/UseWindowDimension';
import data from '../data/data';
import Modal from './Modal';
import useTranslation from '../hooks/UseTranslation';

const Hero = () => {
  const { height, width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const { t } = useTranslation();

  const toggleModal = (more) => {
    if (!isOpen) {
      setModalContent(t(more));
    }
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div id="portfolio" className="portfolio-container">
        {data.map((item) => {
          return (
            <PortfolioItem
              title={item.title}
              description={item.description}
              image={height > width ? item.imagePhone : item.image}
              summary={item.mobileSummary}
              key={item.id}
              click={toggleModal}
              liveUrl={item.liveUrl}
              sourceUrl={item.sourceUrl}
              more={item.more}
            />
          );
        })}
      </div>
      <Modal
        open={isOpen}
        click={toggleModal}
        closeModal={closeModal}
        content={modalContent}
      />
    </>
  );
};

export default Hero;
