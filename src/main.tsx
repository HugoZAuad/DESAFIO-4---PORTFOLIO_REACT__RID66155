import React from 'react'
import ReactDOM from 'react-dom/client'
import './global.css'
import App from './App'
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'

const theme = createTheme()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
      <ScrollToTopButton />
    </ThemeProvider>
  </React.StrictMode>,
)
