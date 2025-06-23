import React, {useEffect} from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
// import profile_img from '../../assets/reva.JPG'
import java from '../../assets/java.png'
import html from '../../assets/html.png'
import css from '../../assets/css.png'
import js from '../../assets/js.png'
import bootstrap from '../../assets/bootstrap.png'
import react from '../../assets/react.png'
import AOS from 'aos';
import 'aos/dist/aos.css';


const About = () => {
  useEffect(() => {
  AOS.init({ duration: 2000 });
}, []);
  return (
    <div id='about' className='about'>
      <div className="about-section">
        <div className="about-left">
          <div className="about-title">
            <h1 data-aos="fade-up" className='gradient-text'>About me</h1>
            {/* <img src={theme_pattern} alt="" /> */}
          </div>
        </div>
        <div className="about-right">
          <div data-aos="fade-up" className="about-para">
            <p>Recent B. Tech graduate from Don Bosco Institute of Technology with a solid foundation in front-end development (HTML, CSS, JavaScript) and a growing focus on full-stack web technologies. Passionate about building user-centric digital solutions.</p>
          </div>
          <div data-aos="fade-up" className="about-skills">
            <div data-aos="fade-up" className="about-skill"><p>Java <img src={java} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
            <div data-aos="fade-up" className="about-skill"><p>HTML <img src={html} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
            <div data-aos="fade-up" className="about-skill"><p> CSS  <br /><img src={css} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
            <div data-aos="fade-up" className="about-skill"><p>JavaScript <img src={js} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
            <div data-aos="fade-up" className="about-skill"><p>Bootstrap <img src={bootstrap} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
            <div data-aos="fade-up" className="about-skill"><p>React <img src={react} style={{height:"150px",width: "150px", borderRadius: "50%"}} alt="" /> </p> </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
