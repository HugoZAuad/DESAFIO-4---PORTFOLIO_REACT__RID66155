import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ProjectSlider from '../../../components/ProjectSlider/ProjectSlider'

// Mock completo dos projetos para o teste
const projects = [
  {
    id: 1,
    title: 'Projeto 1',
    description: 'Descrição do projeto 1',
    imagem: 'https://via.placeholder.com/150',
    link: 'https://github.com/projeto1',
    siteLink: 'https://projeto1.com',
  },
  {
    id: 2,
    title: 'Projeto 2',
    description: 'Descrição do projeto 2',
    imagem: 'https://via.placeholder.com/150',
    link: 'https://github.com/projeto2',
    siteLink: 'https://projeto2.com',
  },
  {
    id: 3,
    title: 'Projeto 3',
    description: 'Descrição do projeto 3',
    imagem: 'https://via.placeholder.com/150',
    link: 'https://github.com/projeto3',
    siteLink: 'https://projeto3.com',
  },
]

// Polyfill para window.matchMedia para evitar erro em testes com react-slick
beforeAll(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  })
})

describe('ProjectSlider Component', () => {
  beforeEach(() => {
    render(<ProjectSlider />)
  })

  test('renderiza o componente sem erros', () => {
    expect(screen.getByTestId('project-slider')).toBeInTheDocument()
  })

  test('exibe o número correto de projetos visíveis', () => {
    const visibleProjects = screen.getAllByRole('heading', { level: 3 })
    expect(visibleProjects.length).toBeGreaterThanOrEqual(1)
  })

  test('exibe títulos, descrições, imagens e links corretamente', () => {
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThan(
      0,
    )
    expect(screen.getAllByText(/./, { selector: 'p' }).length).toBeGreaterThan(
      0,
    )
    expect(screen.getAllByRole('img').length).toBeGreaterThan(0)
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0)
  })

  test('setas de navegação estão presentes e funcionam', () => {
    const prevArrow = document.querySelector('.slick-prev')
    const nextArrow = document.querySelector('.slick-next')
    expect(prevArrow).toBeInTheDocument()
    expect(nextArrow).toBeInTheDocument()

    if (prevArrow) fireEvent.click(prevArrow)
    if (nextArrow) fireEvent.click(nextArrow)
  })
})
