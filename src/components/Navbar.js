import React, { useState } from "react";
import contactImage from '../assets/contact.png'
import menu from '../assets/menu.png'
import "./Navbar.css";
import logo from "../assets/logo.png";
import { Link } from "react-scroll"; onclick={}


const Navbar = () => {
  const [ShowMenu, setShowMenu] = useState(false)
  return (
    <nav className="navbar">
      <img src={logo} alt="logo" className="logo" />

      <div className="desktopMenu">
        <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={300} className="desktopMenuListItem">Home</Link>
        <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={300} className="desktopMenuListItem">About</Link>
        <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={300} className="desktopMenuListItem">PortFolio</Link>
        <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={300} className="desktopMenuListItem">Clients</Link>
      </div>

      <button className="desktopMenuButton" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:'smooth'});
      }}>
        <img src={contactImage} onclick={()=>setShowMenu(!ShowMenu)} alt="" className="desktopMenuImg" />
        Contact Me
      </button>
      
      <img src={menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!ShowMenu)} />

<div className="navMenu" style={{display:ShowMenu?'flex':'none'}}>
  <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={300} className="ListItem" onclick={()=>setShowMenu(false)}>Home</Link>
  <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-40} duration={300} className="ListItem" onclick={()=>setShowMenu(false)}>About</Link>
  <Link activeClass="active" to="works" spy={true} smooth={true} offset={-50} duration={300} className="ListItem" onclick={()=>setShowMenu(false)}>PortFolio</Link>
  <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-40} duration={300} className="ListItem" onclick={()=>setShowMenu(false)}>Clients</Link>
  <Link activeClass="active" to="contacts" spy={true} smooth={true} offset={-40} duration={300} className="ListItem" onclick={()=>setShowMenu(false)}>Contact</Link>
</div>
    </nav>
  );
};

export default Navbar;
