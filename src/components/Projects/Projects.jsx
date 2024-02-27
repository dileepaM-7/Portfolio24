import React from 'react'
import './Projects.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProjecCard from './ProjectCard/ProjectCard'
import { PROJECTS } from '../../utils/data'
import Slider from 'react-slick'
import { useRef } from 'react'
import { useEffect } from 'react';

const Projects = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive:[
      {
        breakpoint: 770,
        settings:{
          slidesToShow:1,
          slidesToScroll:1,
        },
      },  
    ],
  };

  useEffect(() => {
    // Log the slider reference to the console to check if it's available
    console.log(sliderRef.current);
  }, [sliderRef]);
  return (
    <section className='experience-container' id='projects'>
      <h5>Projects</h5>

      <div className="experience-content">
        <Slider ref={sliderRef} {...settings}></Slider>
        {PROJECTS.map((item) => (
          <ProjecCard key={item.title} details={item} />
        ))}
      </div>
    </section>
  )
}

export default Projects
