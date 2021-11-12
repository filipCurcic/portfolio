import React from 'react';

const AnimatedButton = ({ theme, children, href }) => {
  if (href === null) {
    return (
      <ul className="animated-button">
        <li>
          <p className={theme ? 'dark' : 'light'}>{children}</p>
        </li>
      </ul>
    );
  }
  return (
    <ul className="animated-button">
      <li>
        <a
          className={theme ? 'dark' : 'light'}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      </li>
    </ul>
  );
};

export default AnimatedButton;
