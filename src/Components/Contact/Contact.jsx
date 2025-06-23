import React, {useEffect} from 'react'
import './Contact.css'
import mail_icon from '../../assets/mail_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import 'aos/dist/aos.css';
import AOS from 'aos';

const Contact = () => {
  useEffect(() => {
  AOS.init({ duration: 1000 });
}, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "16c5a1f9-9a2b-438a-b185-a873135dfebb");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      alert(res.message);
    }
  };

  return (
    <div id='contact' className='contact'>
      <img src="" alt="" />
      <div className="contact-title">
        <h1 data-aos="fade-up" className='gradient-text'>Get in touch</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" /> <p>reddyreva11@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" /> <p>+91-9611488857</p>
                </div>
                <div className="contact-detail">
                    <FaGithub style={{ marginRight: '8px', fontSize: '40px'}} />
                    <a href="https://github.com/revathireddy11" className='social-link'>Github</a>
                </div>
                <div className="contact-detail">
                    <FaLinkedin size={40} color="#0077b5" />
                    <a href="https://www.linkedin.com/in/y-revathi/" className='social-link'>LinkedIn</a>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder='Enter your name' />
            <label htmlFor="">Your Email</label>
            <input type="email" name="email" placeholder='Enter your email' />
            <label htmlFor="">Write your message here</label>
            <textarea name="message" rows="8" placeholder='Enter your message' ></textarea>
            <button type='submit' className="contact-submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
