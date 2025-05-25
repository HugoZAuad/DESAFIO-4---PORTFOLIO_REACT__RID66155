import React from 'react'
import Button from '@mui/material/Button'
import './navbar.css'
import ButtonTheme from '../ButtonTheme/ButtonTheme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Navbar: React.FC = () => {
  return (
    <nav className="nav-all" role="navigation" aria-label="Main navigation">
      <ul className="navbar">
        <li>
          <a aria-label="Projetos" href="/src/pages/project">
            Projetos
          </a>
        </li>
        <li>
          <a aria-label="Tecnologias" href="/src/pages/tech">
            Tecnologias
          </a>
        </li>
        <li>
          <a aria-label="Sobre mim" href="/src/pages/about">
            Sobre Mim
          </a>
        </li>
      </ul>

      <div className="buttons" role="region" aria-label="Redes sociais e tema">
        <ButtonTheme />
        <a
          href="https://github.com/HugoZAuad"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Button color="primary" aria-label="GitHub">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ padding: 8, color: 'gray', minHeight: 20 }}
            />
          </Button>
        </a>
        <a
          href="https://www.linkedin.com/in/hugozauad/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Button color="primary" aria-label="LinkedIn">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ padding: 8, minHeight: 20 }}
            />
          </Button>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
