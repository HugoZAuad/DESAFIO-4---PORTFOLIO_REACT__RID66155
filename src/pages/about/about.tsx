import React from 'react'
import './about.css'
import Footer from '../../components/Footer/Footer'

//Components
import Timeline from '../../components/Timeline/Timeline'

const timelineEvents = [
  {
    date: '2019',
    title: 'Trabalho Presencial',
    description: 'Iniciado nova jornada na área administrativa.',
  },
  {
    date: '2021',
    title: 'Mudança de empresa',
    description: 'Iniciado uma nova fase em busca de desafios,',
  },
  {
    date: '2022',
    title: 'Novo trabalho',
    description: 'Fui contratado como auxiliar de logistica.',
  },
  {
    date: '2023',
    title: 'Especialização',
    description:
      'Realizei cursos profissionalizantes para Desenvolvimento Web - Full Stack.',
  },
  {
    date: '2024',
    title: 'Novo Desafio',
    description:
      'Iniciado novo desafio na área tecnologica voltada a saúde publica.',
  },
  {
    date: '2025',
    title: 'Iniciado Nova Formação Academica',
    description: 'Iniciado nova formação academica em Ciências da Computação.',
  },
  {
    date: '08/2025',
    title: 'Finalizado Curso Profissionalizante',
    description: 'Previsão para finalizar o curso profissionalizante',
  },
]

const About = () => {
  return (
    <>
      <section id="about" className="title">
        <h1 className="about">Sobre Mim</h1>
        <div className="flex-row">
          <Timeline events={timelineEvents} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
