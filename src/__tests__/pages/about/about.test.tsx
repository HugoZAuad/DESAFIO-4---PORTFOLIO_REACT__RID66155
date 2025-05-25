import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../../../pages/about/about'

describe('About page', () => {
  test('renders About page title and timeline', () => {
    render(<About />)
    expect(screen.getByText(/Sobre Mim/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Sobre Mim/i }),
    ).toBeInTheDocument()
  })
})
