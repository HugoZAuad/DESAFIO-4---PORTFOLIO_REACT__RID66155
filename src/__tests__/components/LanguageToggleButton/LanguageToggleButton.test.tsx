import React from 'react'
import { render, screen, fireEvent, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import LanguageToggleButton from '../../../components/LanguageToggleButton/LanguageToggleButton'
import { I18nextProvider } from 'react-i18next'
import i18n from '../../../i18n'

describe('LanguageToggleButton', () => {
  beforeEach(() => {
    render(
      <I18nextProvider i18n={i18n}>
        <LanguageToggleButton />
      </I18nextProvider>,
    )
  })

  test('renders language flags', () => {
    const brFlag = screen.getByAltText('Português Brasil')
    const usFlag = screen.getByAltText('English')
    expect(brFlag).toBeInTheDocument()
    expect(usFlag).toBeInTheDocument()
  })

  test('changes language to Portuguese when clicking Brazilian flag', async () => {
    const changeLanguageMock = jest
      .spyOn(i18n, 'changeLanguage')
      .mockImplementation((lng?: string, callback?: any) => {
        i18n.language = lng || 'pt'
        i18n.emit('languageChanged', lng)
        if (callback) callback(null, i18n.t)
        return Promise.resolve(i18n.t)
      })

    const brFlag = screen.getByAltText('Português Brasil')
    await act(async () => {
      fireEvent.click(brFlag)
    })
    expect(i18n.language).toBe('pt')

    changeLanguageMock.mockRestore()
  })

  test('changes language to English when clicking US flag', async () => {
    const changeLanguageMock = jest
      .spyOn(i18n, 'changeLanguage')
      .mockImplementation((lng?: string, callback?: any) => {
        i18n.language = lng || 'en'
        i18n.emit('languageChanged', lng)
        if (callback) callback(null, i18n.t)
        return Promise.resolve(i18n.t)
      })

    const usFlag = screen.getByAltText('English')
    await act(async () => {
      fireEvent.click(usFlag)
    })
    expect(i18n.language).toBe('en')

    changeLanguageMock.mockRestore()
  })
})
