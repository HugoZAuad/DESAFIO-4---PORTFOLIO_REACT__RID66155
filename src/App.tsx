import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import Projects from './pages/project/projects'
import Tech from './pages/tech/tech'
import About from './pages/about/about'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <div>
        <Projects />
        <Tech />
        <About />
      </div>
    </I18nextProvider>
  )
}

export default App
