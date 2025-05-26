import React from 'react'
import ButtonTech from '../../components/ButtonTech/ButtonTech'
import {
  faReact,
  faJs,
  faNodeJs,
  faCss3Alt,
  faHtml5,
} from '@fortawesome/free-brands-svg-icons'
import './tech.css'
import { useTranslation } from 'react-i18next'

const techs = [
  {
    name: 'tech.html.name',
    description: 'tech.html.description',
    level: 'tech.html.level',
    icon: faHtml5,
  },
  {
    name: 'tech.css.name',
    description: 'tech.css.description',
    level: 'tech.css.level',
    icon: faCss3Alt,
  },
  {
    name: 'tech.javascript_typescript.name',
    description: 'tech.javascript_typescript.description',
    level: 'tech.javascript_typescript.level',
    icon: faJs,
  },
  {
    name: 'tech.react.name',
    description: 'tech.react.description',
    level: 'tech.react.level',
    icon: faReact,
  },
  {
    name: 'tech.nodejs.name',
    description: 'tech.nodejs.description',
    level: 'tech.nodejs.level',
    icon: faNodeJs,
  },
]

const Tech: React.FC = () => {
  const { t } = useTranslation()

  return (
    <>
      <h1 className='text-tech'>{t('technologies')}</h1>
      <section id="tech" className="tech-section">
        {techs.map((tech) => (
          <div key={tech.name} className="tech-item">
            <span className="tech-icon">
              <ButtonTech
                name={tech.name}
                description={tech.description}
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
