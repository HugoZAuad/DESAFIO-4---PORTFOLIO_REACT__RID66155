import React from 'react'
import ButtonTheme from './components/ButtonTheme/ButtonTheme'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjectSlider from './components/ProjectSlider/ProjectSlider'


function App() {
  return (
    <div>
      <h1 className='fade-in'>Olá, Material-UI no React 19!</h1>
      <ButtonTheme />
      <ProjectSlider />
    </div>
  )
}

export default App
