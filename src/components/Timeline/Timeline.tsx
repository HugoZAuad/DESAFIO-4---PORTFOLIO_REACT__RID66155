import React from 'react'
import './Timeline.css'

interface TimelineEvent {
  date: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div key={index} className="timeline-event">
          <div className="timeline-date">{event.date}</div>
          <div className="timeline-content">
            <h3 className="timeline-title">{event.title}</h3>
            <p className="timeline-description">{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
