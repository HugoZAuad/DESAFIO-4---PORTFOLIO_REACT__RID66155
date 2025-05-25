import '@testing-library/jest-dom';
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import ButtonTheme from '../../components/ButtonTheme/ButtonTheme'

/* global describe, beforeEach, test, expect */

describe('ButtonTheme component', () => {
  beforeEach(() => {
    render(<ButtonTheme />)
  })

  test('renders the button', () => {
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })

  test('toggles theme on click', () => {
    const button = screen.getByRole('button')
    const initialTheme = document.documentElement.getAttribute('data-theme')

    fireEvent.click(button)
    const toggledTheme = document.documentElement.getAttribute('data-theme')

    expect(toggledTheme).not.toBe(initialTheme)

    fireEvent.click(button)
    const toggledBackTheme = document.documentElement.getAttribute('data-theme')

    expect(toggledBackTheme).toBe(initialTheme)
  })
})
