import React from 'react'
import Slider from 'react-slick'

function ProjectSlider() {
  const settings = {
    dots: true, // Exibe navegação com pontos
    infinite: true, // Permite loop no carrossel
    speed: 500, // Velocidade da transição
    slidesToShow: 1, // Quantidade de itens visíveis por vez
    slidesToScroll: 1, // Número de itens que avançam a cada clique
    autoplay: true, // Ativa rotação automática
    autoplaySpeed: 5000, // Tempo entre cada slide
  }

  const projects = [
    { id: 1, title: 'Projeto 1', description: 'Descrição do Projeto 1' },
    { id: 2, title: 'Projeto 2', description: 'Descrição do Projeto 2' },
    { id: 3, title: 'Projeto 3', description: 'Descrição do Projeto 3' },
  ]

  return (
    <Slider {...settings}>
      {projects.map((project) => (
        <div key={project.id} style={{ textAlign: 'center', padding: '20px' }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </Slider>
  )
}

export default ProjectSlider
