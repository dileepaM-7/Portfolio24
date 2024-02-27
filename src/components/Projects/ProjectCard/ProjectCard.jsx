import React from 'react'
import './ProjectCard.css'


const ProjecCard = ({ details }) => {
  return (
    <div className="work-experience-card">
      <h6>{details.title}</h6>
      <div className="work-duration">
        {details.keycomponents}
      </div>
      <ul>
        {details.description.map((item) => (
          <li key={item}>{item}</li>
          
        ))}
      </ul>
    </div>
  )
}

export default ProjecCard
