import React from 'react'
import './about.css'
import Footer from '../../components/Footer/Footer'

//Components
import Timeline from '../../components/Timeline/Timeline'

const timelineEvents = [
  {
    date: '2019',
    title: 'timeline.event1.title',
    description: 'timeline.event1.description',
  },
  {
    date: '2021',
    title: 'timeline.event2.title',
    description: 'timeline.event2.description',
  },
  {
    date: '2022',
    title: 'timeline.event3.title',
    description: 'timeline.event3.description',
  },
  {
    date: '2023',
    title: 'timeline.event4.title',
    description: 'timeline.event4.description',
  },
  {
    date: '2024',
    title: 'timeline.event5.title',
    description: 'timeline.event5.description',
  },
  {
    date: '2025',
    title: 'timeline.event6.title',
    description: 'timeline.event6.description',
  },
  {
    date: '08/2025',
    title: 'timeline.event7.title',
    description: 'timeline.event7.description',
  },
]

import { useTranslation } from 'react-i18next'

const About = () => {
  const { t } = useTranslation()

  return (
    <>
      <section id="about" className="title">
        <h1 className="about">{t('about')}</h1>
        <div className="flex-row">
          <Timeline events={timelineEvents} />
        </div>
      </section>
      <Footer />
    </>
  )
}

export default About
