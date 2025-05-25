import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Projects from './pages/project/projects'
import Tech from './pages/tech/tech'
import About from './pages/about/about'

function App() {
  return (
    <div>
      <Projects />
      <Tech />
      <About />
    </div>
  )
}

export default App
