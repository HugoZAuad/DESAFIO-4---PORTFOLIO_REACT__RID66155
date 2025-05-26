import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import './LanguageToggleButton.css'

const LanguageToggleButton: React.FC = () => {
  const { i18n, t } = useTranslation()
  const [language, setLanguage] = useState(i18n.language)
  const [alertVisible, setAlertVisible] = useState(false)

  useEffect(() => {
    const onLanguageChanged = (lng: string) => {
      setLanguage(lng)
      setAlertVisible(true)
    }
    i18n.on('languageChanged', onLanguageChanged)
    return () => {
      i18n.off('languageChanged', onLanguageChanged)
    }
  }, [i18n])

  useEffect(() => {
    if (alertVisible) {
      const timer = setTimeout(() => {
        setAlertVisible(false)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [alertVisible])

  const changeLanguage = (lng: string) => {
    if (lng !== language) {
      i18n.changeLanguage(lng)
    }
  }

  const languageName = language === 'pt' ? 'Português' : 'English'

  return (
    <>
      <div className='lang' style={{ display: 'flex', gap: '1rem', cursor: 'pointer' }}>
        <img
          src="https://flagcdn.com/w20/br.png"
          alt="Português Brasil"
          onClick={() => changeLanguage('pt')}
          style={{
            marginLeft: '1rem',
            border: language === 'pt' ? '2px solid #ccc' : 'none',
          }}
        />
        <img
          src="https://flagcdn.com/w20/us.png"
          alt="English"
          onClick={() => changeLanguage('en')}
          style={{ border: language === 'en' ? '2px solid #ccc' : 'none' }}
        />
      </div>
      {alertVisible && (
        <div
          className='alert'
          role="alert"
        >
          {t('languageChanging')}
        </div>
      )}
    </>
  )
}

export default LanguageToggleButton
