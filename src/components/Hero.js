import React from 'react';
import PortfolioItem from './PortfolioItem';
import useWindowDimensions from '../hooks/UseWindowDimension';
import data from '../data/data';

const Hero = () => {
  const { height, width } = useWindowDimensions();

  return (
    <div id="portfolio" className="portfolio-container">
      {data.map((item) => {
        return (
          <PortfolioItem
            title={item.title}
            description={item.description}
            image={height > width ? item.imagePhone : item.image}
            summary={item.mobileSummary}
            key={item.id}
          />
        );
      })}
    </div>
  );
};

export default Hero;
