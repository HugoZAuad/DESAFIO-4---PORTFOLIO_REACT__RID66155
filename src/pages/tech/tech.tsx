import React from 'react'
import ButtonTech from '../../components/ButtonTech/ButtonTech'
import {
  faReact,
  faJs,
  faNodeJs,
  faCss3Alt,
  faHtml5,
  faGitAlt,
  faFigma,
  faBootstrap,
  faNeos,
} from '@fortawesome/free-brands-svg-icons'
import {
  faFireFlameCurved,
  faDatabase,
  faWind,
} from '@fortawesome/free-solid-svg-icons'
import './tech.css'
import { useTranslation } from 'react-i18next'

const techs = [
  {
    name: 'tech.html.name',
    level: 'tech.html.level',
    icon: faHtml5,
  },
  {
    name: 'tech.css.name',
    level: 'tech.css.level',
    icon: faCss3Alt,
  },
  {
    name: 'tech.javascript_typescript.name',
    level: 'tech.javascript_typescript.level',
    icon: faJs,
  },
  {
    name: 'tech.react.name',
    level: 'tech.react.level',
    icon: faReact,
  },
  {
    name: 'tech.nodejs.name',
    level: 'tech.nodejs.level',
    icon: faNodeJs,
  },
  {
    name: 'tech.firebase.name',
    level: 'tech.firebase.level',
    icon: faFireFlameCurved,
  },
  {
    name: 'tech.git.name',
    level: 'tech.git.level',
    icon: faGitAlt,
  },
  {
    name: 'tech.mongodb.name',
    level: 'tech.mongodb.level',
    icon: faDatabase,
  },
  {
    name: 'tech.figma.name',
    level: 'tech.figma.level',
    icon: faFigma,
  },
  {
    name: 'tech.next.name',
    level: 'tech.next.level',
    icon: faNeos,
  },
  {
    name: 'tech.bootstrap.name',
    level: 'tech.bootstrap.level',
    icon: faBootstrap,
  },
  {
    name: 'tech.tailwindcss.name',
    level: 'tech.tailwindcss.level',
    icon: faWind,
  },
]

const Tech: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className="text-tech">{t('technologies')}</h1>
      <section id="tech" className="tech-section">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            <span className="tech-icon">
              <ButtonTech
                name={tech.name}
                level={tech.level}
                icon={tech.icon}
              />
            </span>
          </div>
        ))}
      </section>
    </>
  )
}

export default Tech
