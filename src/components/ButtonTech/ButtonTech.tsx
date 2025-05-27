import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonTech.css'
import { useTranslation } from 'react-i18next'

interface ButtonTechProps {
  name: string
  level: string
  icon?: any
}

const ButtonTech: React.FC<ButtonTechProps> = ({ name, level, icon }) => {
  const { t } = useTranslation()
  const [cardInfo, setCardInfo] = useState({
    name: '',
    level: '',
  })
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setCardInfo({ name, level })
    setFadeIn(true)
    const timer = setTimeout(() => setFadeIn(false), 800)
    return () => clearTimeout(timer)
  }, [name, level])

  return (
    <div className={`button-tech-card ${fadeIn ? 'fade-in' : ''}`}>
      {icon && <FontAwesomeIcon icon={icon} className="card-icon" />}
      <h3 className="card-name">{t(cardInfo.name)}</h3>
      <p className="card-level">
        <strong>{t('level')}:</strong> {t(cardInfo.level)}
      </p>
    </div>
  )
}

export default ButtonTech
