import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from '../../../pages/project/projects'

describe('Projects Page', () => {
  test('renderiza a página de projetos com elementos principais', () => {
    render(<Projects />)
    expect(screen.getByText(/Oi, meu nome é/i)).toBeInTheDocument()
    expect(screen.getByText(/Desenvolvedor Full Stack/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Saiba mais/i }),
    ).toBeInTheDocument()
  })
})
