//Imports
import React, { useState, useEffect } from 'react'
import { Button } from '@mui/material'

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'

const ButtonTheme: React.FC = () => {
  const [theme, setTheme] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'dark'
      : 'light'
  })

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <Button onClick={toggleTheme} aria-label="Toggle dark mode">
      <FontAwesomeIcon
        icon={theme === 'dark' ? faSun : faMoon}
        style={{ padding: 8, background: 'transparent', minHeight: 20 }}
      />
    </Button>
  )
}

export default ButtonTheme
