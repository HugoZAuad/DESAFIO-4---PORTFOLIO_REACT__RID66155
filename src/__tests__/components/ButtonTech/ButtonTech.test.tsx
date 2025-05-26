import React from 'react'
import { render, screen } from '@testing-library/react'
import ButtonTech from '../../../components/ButtonTech/ButtonTech'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('ButtonTech Component', () => {
  const props = {
    name: 'React',
    description: 'Biblioteca JavaScript para construir interfaces de usuário',
    level: 'Intermediário',
    icon: faReact,
  }

  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <ButtonTech {...props} />
      </I18nextProvider>,
    )
  })

  test('renders name, description and level', () => {
    expect(screen.getByText(i18n.t(props.name))).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(i18n.t('description') + ':')),
    ).toBeInTheDocument()
    expect(screen.getByText(i18n.t(props.description))).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(i18n.t('level') + ':')),
    ).toBeInTheDocument()
    expect(screen.getByText(i18n.t(props.level))).toBeInTheDocument()
  })

  test('renders icon if provided', () => {
    const iconElement = screen.getByRole('img', { hidden: true })
    expect(iconElement).toBeInTheDocument()
  })
})
