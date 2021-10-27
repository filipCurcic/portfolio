import React, { useState } from 'react';
import Switch from 'react-switch';
import { useThemeUpdate } from '../context/ThemeContext';

const ThemeSwitch = () => {
  const toggleTheme = useThemeUpdate();
  const [checked, setChecked] = useState(false);
  const [textVisible, setTextVisible] = useState(true);

  const handleChange = () => {
    setChecked(!checked);
    setTextVisible(false);
    toggleTheme();
  };
  return (
    <>
      <label className="theme-switch">
        <Switch
          onChange={handleChange}
          checked={checked}
          onColor="#222733"
          offColor="#dbe8d4"
          onHandleColor="#dbe8d4"
          handleDiameter={30}
          uncheckedIcon={false}
          checkedIcon={false}
          boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
          activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
          height={20}
          width={48}
        />
      </label>
      {textVisible && (
        <div className="toggle-me">
          <div id="wrapper">
            <div id="wrapper-inner">
              <div id="scroll-down">
                <span className="arrow-down"></span>
              </div>
            </div>
          </div>
          <div className="toggle-text">toggle me!</div>
        </div>
      )}
    </>
  );
};

export default ThemeSwitch;
