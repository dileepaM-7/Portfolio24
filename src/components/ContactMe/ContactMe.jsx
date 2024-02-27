import React from 'react'
import './ContactMe.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import email from "../../assets/mail.png";
import ContactForm from './ContactForm/ContactForm';


const ContactMe = () => {
  return (
    <section className='contact-container' id='contact'>
        <h5>Contact Me</h5>
        <div className="contact-content">
            <div style={{ flex:1 }}>
                <ContactInfoCard
                iconUrl={email}
                text={"dlpmalshan@gmail.com"}
                />
                <ContactInfoCard
                iconUrl={github}
                text={"DileepaM-7"}
                link={"https://github.com/dileepaM-7"}
                />
                <ContactInfoCard
                iconUrl={linkedin}
                text={"Dileepa Malshan"}
                link={"https://www.linkedin.com/in/dileepa-malshan-998908292/"}
                />
            </div>
            <div style={{ flex:1 }}>
                <ContactForm></ContactForm>
            </div>
        </div>
    </section>
  )
}

export default ContactMe
