import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const ButtonTheme = () => {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <Button onClick={toggleTheme}>
      {theme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  );
};

export default ButtonTheme;
