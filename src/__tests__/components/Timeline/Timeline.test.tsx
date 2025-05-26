import React from 'react'
import { render, screen } from '@testing-library/react'
import Timeline from '../../../components/Timeline/Timeline'

const events = [
  { date: '2020', title: 'Event 1', description: 'Description 1' },
  { date: '2021', title: 'Event 2', description: 'Description 2' },
]

describe('Timeline component', () => {
  test('renders timeline events', () => {
    render(<Timeline events={events} />)
    expect(screen.getByText('Event 1')).toBeInTheDocument()
    expect(screen.getByText('Description 1')).toBeInTheDocument()
    expect(screen.getByText('Event 2')).toBeInTheDocument()
    expect(screen.getByText('Description 2')).toBeInTheDocument()
  })
})
