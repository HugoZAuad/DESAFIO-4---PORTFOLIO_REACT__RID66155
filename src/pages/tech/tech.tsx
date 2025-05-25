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

const techs = [
  {
    name: 'HTML',
    description: 'Linguagem de marcação para estruturar conteúdo na web',
    level: 'Avançado',
    icon: faHtml5,
  },
  {
    name: 'CSS',
    description: 'Folhas de estilo para estilização de páginas web',
    level: 'Avançado',
    icon: faCss3Alt,
  },
  {
    name: 'JavaScript/TypeScript',
    description: 'Superset do JavaScript que adiciona tipagem estática',
    level: 'Intermediário',
    icon: faJs,
  },
  {
    name: 'React',
    description: 'Biblioteca JavaScript para construir interfaces',
    level: 'Intermediário',
    icon: faReact,
  },
  {
    name: 'Node.js',
    description: 'Ambiente de execução JavaScript no servidor',
    level: 'Basico',
    icon: faNodeJs,
  },
]

const Tech: React.FC = () => {
  return (
    <section className="tech-section">
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
  )
}

export default Tech
