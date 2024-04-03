import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs library
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    message: '',
  });

  // State for controlling success/error message display
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_cs062jr', 'template_vfzpzod', e.target, '2TpRNCAPQiap8Ep_t')
      .then(
        (result) => {
          // Handle success
          console.log('Email sent successfully:', result.text);
          setMessage('Email sent successfully!');
          // Clear form data
          setFormData({
            firstname: '',
            lastname: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          // Handle errors
          console.error('Error sending email:', error);
          setMessage('Error sending email. Please try again later.');
        }
      );
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          type="text"
          name="message"
          cols="30"
          rows="10"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
      {message && <p>{message}</p>} {/* Display success/error message */}
    </div>
  );
};

export default ContactForm;
