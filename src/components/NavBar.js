import React,{useState,useEffect} from 'react'
import {Navbar,Container,Nav} from 'react-bootstrap';
import logo from '../assets/mansi-logo.png';
import navIcon1 from '../assets/nav-icon1.svg';
import navIcon2 from '../assets/nav-icon2.svg';
import navIcon3 from '../assets/nav-icon3.svg';
const NavBar = () => {
  const [activeLink,setActiveLink]=useState('home');
  const[scrolled,setScrolled]=useState(false);
  useEffect(()=>{
    const onScroll=()=>{
        if(window.scrollY>50){
            setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return()=>window.removeEventListener("Scroll",onScroll)
  },[])
  const onUpdateActiveLink=(value)=>{
    setActiveLink(value);
  }
  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
    <Container>
      <Navbar.Brand href="#home"><img src={logo} alt="logo"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="#skills"className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Coding Profiles</Nav.Link>
          <Nav.Link href="#project"className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
         </Nav>
         <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/mansi-gupta-iitg/"><img src={navIcon1} alt="Linkedin"/></a>
                <a href="https://github.com/MANSI-0607"><img src={navIcon2} alt="git"/></a>
                <a href="https://www.instagram.com/mansi_g.6704/?hl=en"><img src={navIcon3} alt="insta"/></a>
            </div>
        <button className='vvd' onClick={()=>window.location.href = '#connect'}>
            <span >Let's Connect</span>
          </button>
         </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default NavBar