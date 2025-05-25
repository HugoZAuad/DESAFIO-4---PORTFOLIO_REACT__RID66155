import React from 'react'
import { render, screen } from '@testing-library/react'
import Tech from '../../../pages/tech/tech'

describe('Tech Page', () => {
  test('renders all tech cards', () => {
    render(<Tech />)
    const techNames = ['React', 'JavaScript/TypeScript', 'Node.js', 'CSS', 'HTML']
    techNames.forEach(name => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })
})
