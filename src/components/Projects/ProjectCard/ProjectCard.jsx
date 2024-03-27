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
      <div className='github-button'>
        {details.Github && (
          <a href={details.Github} target="_blank" rel="noreferrer">
            <button className="btn">Github Link</button>
          </a>
        )}
        <br />
        {details.App&& (
          <a href={details.App} target="_blank" rel="noreferrer">
            <button className="btn">App</button>
          </a>
        )}
      </div>
    </div>
  )
}

export default ProjecCard
