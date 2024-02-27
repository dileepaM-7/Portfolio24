// Navbar.js

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../assets/dileepa-logo.png';
import MobileNav from './MobileNav/MobileNav';

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 0.25 * window.innerHeight) {
      setActiveSection('home');
    } else if (scrollPosition < 0.75 * window.innerHeight) {
      setActiveSection('skills');
    } else if (scrollPosition < 1.5 * window.innerHeight) {
      setActiveSection('projects');
    } else {
      setActiveSection('contact');
    }
  };

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [openMenu]);

  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} smoothScroll={smoothScroll} />
      <nav className='nav-wrapper'>
        <div className='nav-content'>
          <img src={logo} alt='' className='logo' />

          <ul>
            <li>
              <a
                onClick={() => {
                  smoothScroll('home');
                  toggleMenu();
                }}
                className={`menu-item ${activeSection === 'home' ? 'active' : ''}`}
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  smoothScroll('skills');
                  toggleMenu();
                }}
                className={`menu-item ${activeSection === 'skills' ? 'active' : ''}`}
              >
                Skills
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  smoothScroll('projects');
                  toggleMenu();
                }}
                className={`menu-item ${activeSection === 'projects' ? 'active' : ''}`}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  smoothScroll('contact');
                  toggleMenu();
                }}
                className={`menu-item ${activeSection === 'contact' ? 'active' : ''}`}
              >
                Contact Me
              </a>
            </li>
            <button className='contact-btn' onClick={() => {}}>
              Hire me
            </button>
          </ul>
          <button className='menu-btn' onClick={toggleMenu}>
            <span className={'material-symbols-outlined'} style={{ fontSize: '.8rem' }}>
              {openMenu ? 'close' : 'Menu'}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
