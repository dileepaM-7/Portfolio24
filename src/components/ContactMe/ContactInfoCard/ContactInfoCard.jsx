import React from 'react'
import './ContactInfoCard.css'
const ContactInfoCard = ({ iconUrl, text, link}) => {
  return (
    <div className='contact-details-card'>
        <div className="icon">
            <a href={link}><img src={iconUrl} alt={text} /></a>
        </div>
        <p>{text}</p>
    </div>
  )
}

export default ContactInfoCard
