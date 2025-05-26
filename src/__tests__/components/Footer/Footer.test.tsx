import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Footer from '../../../components/Footer/Footer'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('Footer component', () => {
  test('renders contact email and social links', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Footer />
      </I18nextProvider>,
    )
    expect(
      screen.getByText(/Contato: hugozeymer@gmail.com/i),
    ).toBeInTheDocument()
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument()
  })
})
