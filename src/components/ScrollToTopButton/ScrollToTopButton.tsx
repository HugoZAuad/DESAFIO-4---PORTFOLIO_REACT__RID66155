import React from 'react'
import './ScrollToTopButton.css'

const ScrollToTopButton: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
    >
      ↑
    </button>
  )
}

export default ScrollToTopButton
