import React from 'react'
import { render, screen } from '@testing-library/react'
import Tech from '../../../pages/tech/tech'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('Tech Page', () => {
  test('renders all tech cards', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Tech />
      </I18nextProvider>,
    )
    const techNames = [
      'React',
      'TypeScript',
      'Node.js',
      'CSS',
      'HTML',
    ]
    techNames.forEach((name) => {
      const elements = screen.getAllByText((content, element) => {
        return !!element?.textContent?.includes(name)
      })
      expect(elements.length).toBeGreaterThan(0)
    })
  })
})
