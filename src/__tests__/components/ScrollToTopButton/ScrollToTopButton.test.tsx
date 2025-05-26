import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ScrollToTopButton from '../../../components/ScrollToTopButton/ScrollToTopButton'

describe('ScrollToTopButton component', () => {
  test('renders button and scrolls to top on click', () => {
    render(<ScrollToTopButton />)
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()

    // Mock window.scrollTo
    window.scrollTo = jest.fn()

    fireEvent.click(button)
    expect(window.scrollTo).toHaveBeenCalledWith({ top: 0, behavior: 'smooth' })
  })
})
