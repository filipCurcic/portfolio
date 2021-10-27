import React from 'react';
import { useTheme } from '../context/ThemeContext';

const AccentedText = ({ children }) => {
  const theme = useTheme();

  return (
    <span style={{ color: theme ? '#FCBA1C' : '#3C3D3B', fontWeight: '400' }}>
      {children}
    </span>
  );
};

export default AccentedText;
