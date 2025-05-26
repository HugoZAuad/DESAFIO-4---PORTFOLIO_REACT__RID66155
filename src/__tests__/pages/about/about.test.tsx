import React from 'react'
import { render, screen } from '@testing-library/react'
import About from '../../../pages/about/about'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('About page', () => {
  test('renders About page title and timeline', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <About />
      </I18nextProvider>
    )
    expect(screen.getByText(/Sobre Mim/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Sobre Mim/i })).toBeInTheDocument()
  })
})
