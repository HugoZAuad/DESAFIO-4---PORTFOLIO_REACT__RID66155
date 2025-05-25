//Imports
import React from 'react'
import Button from '@mui/material/Button'
import './projects.css'

//Components
import Navbar from '../../components/navbar/navbar'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider'

const Projects: React.FC = () => {
  return (
    <section>
      <Navbar />
      <section className="section-intro">
        <h1 className="intro">
          Oi, meu nome é <span>Hugo Zeymer Auad</span>
        </h1>
        <p className="text-intro">
          Eu poderia começar dizendo "Sou um {' '}
          <span>  Desenvolvedor Full Stack</span> com
          experiência em React, Next.js, TypeScript e Node.js", mas vamos ser
          sinceros: isso já virou clichê. Deixe-me contar o que realmente
          importa. Desenvolver é criar experiências únicas. Não se trata apenas
          de fazer o código rodar, mas de integrar, com maestria, o lado visual
          com uma lógica robusta, flexible e escalável. Cada detalhe — da
          performance à acessibilidade e à fluidez das interações — é essencial
          para que a experiência do usuário seja marcante e transformadora.
        </p>
        <Button style={{ fontSize: 15, fontWeight:'bold' }}>
          <a href="https://www.linkedin.com/in/hugozauad/" target="_blank">
            Saiba mais
          </a>
        </Button>
      </section>
      <ProjectSlider />
    </section>
  )
}

export default Projects
