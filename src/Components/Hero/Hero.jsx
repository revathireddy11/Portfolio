import React from 'react'
import './Hero.css'
import profile_img from '../../assets/reva.JPG'
import AnchorLink from "react-anchor-link-smooth-scroll"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" />
      <h1>I'm Y Revathi</h1>
      <p>Full Stack developer</p>
      <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect with me
          </AnchorLink>  
        </div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  )
}

export default Hero