import React from 'react'
import Button from '@mui/material/Button'
import './projects.css'

//Components
import Navbar from '../../components/navbar/navbar'
import ProjectSlider from '../../components/ProjectSlider/ProjectSlider'
import { useTranslation } from 'react-i18next'

const Projects: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section>
      <Navbar />
      <section className="section-intro">
        <h1 className="intro">
          {t('projects_intro_greeting')} <span>Hugo Zeymer Auad</span>
        </h1>
        <p className="text-intro">
          {t('projects_intro_part1')}
          <span> {t('projects_intro_highlight')}</span>
          {t('projects_intro_part2')}
        </p>
        <Button style={{ fontSize: 15, fontWeight: 'bold' }}>
          <a
            href="https://www.linkedin.com/in/hugozauad/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('learn_more')}
          </a>
        </Button>
      </section>
      <h1 id="project" className="text">
        {t('projects_in_highlight')}
      </h1>
      <ProjectSlider />
    </section>
  )
}

export default Projects
