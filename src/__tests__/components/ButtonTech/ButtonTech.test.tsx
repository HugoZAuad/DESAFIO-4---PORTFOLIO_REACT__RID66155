import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonTech from '../../../components/ButtonTech/ButtonTech'
import { faReact } from '@fortawesome/free-brands-svg-icons'

describe('ButtonTech Component', () => {
  const props = {
    name: 'React',
    description: 'Biblioteca JavaScript para construir interfaces de usuário',
    level: 'Intermediário',
    icon: faReact,
  }

  test('renders name, description and level', () => {
    render(<ButtonTech {...props} />)
    expect(screen.getByText(props.name)).toBeInTheDocument()
    expect(screen.getByText(/Descrição:/)).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(/Nível:/)).toBeInTheDocument()
    expect(screen.getByText(props.level)).toBeInTheDocument()
  })

  test('renders icon if provided', () => {
    render(<ButtonTech {...props} />)
    const iconElement = screen.getByRole('img', { hidden: true })
    expect(iconElement).toBeInTheDocument()
  })
})
