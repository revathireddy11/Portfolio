import React, {useEffect} from 'react'
import './Hero.css'
import profile_img from '../../assets/reva.JPG'
import AnchorLink from "react-anchor-link-smooth-scroll"
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1 data-aos="fade-right">I'm Y Revathi</h1>
      <p data-aos="fade-left">Full Stack developer</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>  
        </div>
        <a href="/Y__Revathi_Resume_1.pdf" target="_blank" rel="noopener noreferrer" download className="hero-resume">
          My resume
        </a>
      </div>
    </div>
  )
}

export default Hero