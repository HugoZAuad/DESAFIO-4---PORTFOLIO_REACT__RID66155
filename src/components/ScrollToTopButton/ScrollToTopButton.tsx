import React from 'react'
import './ScrollToTopButton.css'
import { useTranslation } from 'react-i18next'

const ScrollToTopButton: React.FC = () => {
  const { t } = useTranslation()
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label={t('scroll_to_top')}
    >
      ↑
    </button>
  )
}

export default ScrollToTopButton
