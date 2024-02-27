import React from 'react'
import './Hero.css'
import myImg from "../../assets/dileepa.png"
import reactImg from "../../assets/react.png"
import pythonImg from "../../assets/python.png"
import javaImg from "../../assets/java.png"
import html5Img from "../../assets/html5.png"
import js from "../../assets/js.png"

const Hero = () => {
  return (
    <section className='hero-container' id="home">
        <div className="hero-content">
            <h2>Building Digital Experiences that Inspire</h2>
            <p> <b>I'm Dileepa Malshan...</b> <br />
                Aspiring undergraduate software engineer with a passion for coding,
                problem-solving, and a drive to innovate in the world of Technology.
            </p>
        </div>
        <div className="hero-img">
            <div>
                <div className='tech-icon'>
                    <img src={reactImg}alt=""  className='react-img' />
                </div>
                <img src={myImg}alt="" className='dileepa-img' />
            </div>
            <div>
                <div className='tech-icon'>
                    <img src={pythonImg} alt="" className='react-img'/>
                </div>
                <div className='tech-icon'>
                    <img src={javaImg} alt=""className='react-img' />
                </div>
                <div className='tech-icon'>
                    <img src={html5Img}  alt="" className='react-img'/>
                </div>
                <div className='tech-icon'>
                    <img src={js}  alt="" className='react-img'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
