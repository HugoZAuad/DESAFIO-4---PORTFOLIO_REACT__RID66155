import React from 'react'
import { render, screen } from '@testing-library/react'
import Projects from '../../../pages/project/projects'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('Projects Page', () => {
  test('renderiza a página de projetos com elementos principais', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Projects />
      </I18nextProvider>,
    )
    expect(screen.getByText(/Oi, meu nome é/i)).toBeInTheDocument()
    expect(screen.getByText(/Desenvolvedor Full Stack/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Saiba mais/i }),
    ).toBeInTheDocument()
  })
})
