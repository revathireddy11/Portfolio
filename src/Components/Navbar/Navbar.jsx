import React, { useRef, useState } from 'react'
import './Navbar.css'
// import logo from '../../assets/logo.svg'
import underline from '../../assets/underline.png'
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'



const Navbar = () => {

  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right="0";
  }

  const closeMenu = () => {
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      {/* <img src={logo} alt="" /> */}
      <img src={menu_open} onClick={openMenu} alt="" className='nav_mob_open'/>
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav_mob_close" />
        <li>
          <AnchorLink className='anchor-link' href='#home'> 
          <p onClick={() => setMenu("home")} > Home </p> 
          </AnchorLink>{menu==="home" ? 
          <img src={underline} style={{height: "1px", width: "100px"}} />:<></>} 
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => setMenu("about")}> About Me </p> 
          </AnchorLink>{menu==="about" ? 
          <img src={underline} style={{height: "1px", width: "100px"}} />:<></>} 
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#projects'><p onClick={() => setMenu("projects")}>Projects</p> 
          </AnchorLink>{menu==="projects" ? 
          <img src={underline} style={{height: "1px", width: "100px"}} />:<></>} 
        </li>
        
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={() => setMenu("contact")}>Contact</p> 
          </AnchorLink>{menu==="contact" ? 
          <img src={underline} style={{height: "1px", width: "100px"}} />:<></>} 
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect with me
        </AnchorLink>
      </div>
    </div>
  )
}

export default Navbar
