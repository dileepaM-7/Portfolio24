import React from 'react';
import './MobileNav.css';
import logo from "../../../assets/dileepa-logo.png";

const MobileNav = ({ isOpen, toggleMenu, smoothScroll }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className='mobile-menu-container'>
          <img className='logo' src={logo} alt='' />
          <ul>
            <li>
              <a onClick={() => { smoothScroll('home'); }} className='menu-item'>Home</a>
            </li>
            <li>
              <a onClick={() => { smoothScroll('skills'); }} className='menu-item'>Skills</a>
            </li>
            <li>
              <a onClick={() => { smoothScroll('projects'); }} className='menu-item'>Projects</a>
            </li>
            <li>
              <a onClick={() => { smoothScroll('contact'); }} className='menu-item'>Contact Us</a>
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Hire me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
