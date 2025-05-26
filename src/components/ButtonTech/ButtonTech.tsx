import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ButtonTech.css'
import { useTranslation } from 'react-i18next'

interface ButtonTechProps {
  name: string
  description: string
  level: string
  icon?: any
}

const ButtonTech: React.FC<ButtonTechProps> = ({
  name,
  description,
  level,
  icon,
}) => {
  const { t } = useTranslation()
  const [cardInfo, setCardInfo] = useState({
    name: '',
    description: '',
    level: '',
  })
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    setCardInfo({ name, description, level })
    setFadeIn(true)
    const timer = setTimeout(() => setFadeIn(false), 800)
    return () => clearTimeout(timer)
  }, [name, description, level])

  return (
    <div className={`button-tech-card ${fadeIn ? 'fade-in' : ''}`}>
      {icon && <FontAwesomeIcon icon={icon} size="2x" className="card-icon" />}
      <h3 className="card-name">{t(cardInfo.name)}</h3>
      <p className="card-description">
        <strong>{t('description')}:</strong> {t(cardInfo.description)}
      </p>
      <p className="card-level">
        <strong>{t('level')}:</strong> {t(cardInfo.level)}
      </p>
    </div>
  )
}

export default ButtonTech
