import React from 'react'
import ButtonTheme from '../ButtonTheme/ButtonTheme'
import './navbar.css'
import LanguageToggleButton from '../LanguageToggleButton/LanguageToggleButton'
import { useTranslation } from 'react-i18next'

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar: React.FC = () => {
  const { t } = useTranslation()

  return (
    <nav className="nav-all" role="navigation" aria-label="Main navigation">
      <ul className="navbar">
        <li>
          <a
            aria-label={t('projects')}
            href="#project"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('project')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t('projects')}
          </a>
        </li>
        <li>
          <a
            aria-label={t('technologies')}
            href="#tech"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('tech')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t('technologies')}
          </a>
        </li>
        <li>
          <a
            aria-label={t('about')}
            href="#about"
            onClick={(e) => {
              e.preventDefault()
              const el = document.getElementById('about')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t('about')}
          </a>
        </li>
      </ul>

      <div className="buttons" role="region" aria-label="Redes sociais e tema">
        <a
          href="https://github.com/HugoZAuad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <button aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/in/hugozauad/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <button aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </button>
        </a>
      </div>
      
      <div className="buttons-utils">
        <ButtonTheme />
        <LanguageToggleButton />
      </div>
    </nav>
  )
}

export default Navbar
