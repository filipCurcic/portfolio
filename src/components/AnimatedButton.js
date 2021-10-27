import React from 'react';

const AnimatedButton = ({ theme, children, href }) => {
  return (
    <ul className="animated-button">
      <li>
        <a className={theme ? 'dark' : 'light'} href={href}>
          {children}
        </a>
      </li>
    </ul>
  );
};

export default AnimatedButton;
