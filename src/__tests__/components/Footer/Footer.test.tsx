import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from '../../../components/Footer/Footer'

describe('Footer component', () => {
  test('renders contact email and social links', () => {
    render(<Footer />)
    // Adjusted to check for email text instead of "Contato:"
    expect(screen.getByText(/hugozeymer@gmail.com/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/GitHub/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/LinkedIn/i)).toBeInTheDocument()
  })
})
