import '@testing-library/jest-dom'
import React from 'react'
import { render, screen } from '@testing-library/react'
import Navbar from '../../../components/navbar/navbar'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

/* global describe, beforeEach, test, expect */

describe('Navbar component', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <Navbar />
      </I18nextProvider>,
    )
  })

  test('renders navigation links', () => {
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Projetos/i })).toBeInTheDocument()
    expect(
      screen.getByRole('link', { name: /Tecnologias/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sobre Mim/i })).toBeInTheDocument()
  })

  test('renders social media buttons with links', () => {
    const githubLink = screen.getByRole('link', { name: /GitHub/i })
    expect(githubLink).toBeInTheDocument()
    expect(githubLink).toHaveAttribute('href', 'https://github.com/HugoZAuad')
    expect(githubLink).toHaveAttribute('target', '_blank')
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')

    const linkedinLink = screen.getByRole('link', { name: /LinkedIn/i })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/hugozauad/',
    )
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('renders theme toggle button', () => {
    expect(
      screen.getByRole('region', { name: /Redes sociais e tema/i }),
    ).toBeInTheDocument()
  })
})
