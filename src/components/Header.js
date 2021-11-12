import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import useEventListener from '../hooks/UseEventListener';

const Header = () => {
  const theme = useTheme();

  const [navbarActive, setnavbarActive] = useState(false);

  useEventListener('scroll', () => {
    if (window.scrollY >= 160) {
      setnavbarActive(true);
    } else {
      setnavbarActive(false);
    }
  });

  return (
    <nav
      className={`flex-row center 
        ${navbarActive ? `nav-active ${theme ? 'nav-dark' : 'nav-light'}` : ''}
        `}
    >
      <ul>
        <li>
          <a className={theme ? 'dark' : 'light'} href="/#home">
            {' '}
            Home{' '}
          </a>
        </li>
        <li>
          <a className={theme ? 'dark' : 'light'} href="/#about">
            {' '}
            About{' '}
          </a>
        </li>
        <li>
          <a className={theme ? 'dark' : 'light'} href="/#portfolio">
            {' '}
            Portfolio{' '}
          </a>
        </li>
        <li>
          <a className={theme ? 'dark' : 'light'} href="/#contact">
            {' '}
            Contact{' '}
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
