import React, { useRef, FocusEvent } from 'react'
import Slider from 'react-slick'
import projects from './projectsMock'
import './ProjectSlider.css'
import { useTranslation } from 'react-i18next'

function ProjectSlider() {
  const { t } = useTranslation()
  const sliderRef = useRef(null)

  const handleFocus = (e: FocusEvent<HTMLElement>) => {
    const slide = e.currentTarget.closest('.slick-slide')
    if (slide) {
      slide.setAttribute('aria-hidden', 'false')
    }
  }

  const handleBlur = (e: FocusEvent<HTMLElement>) => {
    const slide = e.currentTarget.closest('.slick-slide')
    if (slide) {
      slide.setAttribute('aria-hidden', 'true')
    }
  }

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 10000,
    focusOnSelect: true,
    pauseOnFocus: true,
    accessibility: true,
    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        },
      },
    ],
  }

  return (
    <div className="project-slider-container" data-testid="project-slider">
      <Slider ref={sliderRef} {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="project-card">
            <h3 tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
              {t(project.title)}
            </h3>
            <p tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
              {t(project.description)}
            </p>
            {project.imagem && (
              <img
                src={project.imagem}
                alt={t(project.title)}
                style={{
                  maxWidth: '100%',
                  height: 'auto',
                  marginBottom: '15px',
                  borderRadius: '8px',
                }}
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              />
            )}
            <div className="project-links">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {t('repository')}
              </a>
              <a
                href={project.siteLink}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
              >
                {t('deploy')}
              </a>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default ProjectSlider
