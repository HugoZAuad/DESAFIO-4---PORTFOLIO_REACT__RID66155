import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

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
      <div style={{ display: 'flex', gap: '1rem', cursor: 'pointer' }}>
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
          role="alert"
          style={{
            position: 'fixed',
            top: '4rem',
            left: '92%',
            transform: 'translateX(-50%)',
            backgroundColor: '#333',
            color: '#fff',
            padding: '8px 12px',
            borderRadius: '4px',
            fontSize: '0.9rem',
            zIndex: 9999,
            whiteSpace: 'nowrap',
            textAlign: 'center',
            boxShadow: '0 2px 6px rgba(0,0,0,0.3)',
          }}
        >
          {t('languageChanging')}
        </div>
      )}
    </>
  )
}

export default LanguageToggleButton
