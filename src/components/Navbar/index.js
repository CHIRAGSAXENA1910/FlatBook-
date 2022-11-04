import React,{ useState,useEffect } from 'react'
import{FaBars} from  'react-icons/fa'
import {IconContext} from 'react-icons/lib';
import { animateScroll as scroll} from 'react-scroll';
import{
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink,

}from './NavbarElements'

const Navbar = ({toggle}) => {
    const [ scrollNav, setScrollNav] = useState(false)

    const changeNav = ()=> {

        if(window.scrollY >=80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        } 
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    },[])

    const toggleHome =() =>{
        scroll.scrollToTop();
    }
  return (
    <>
    <IconContext.Provider value={{color: 'yellow'}}>
    <Nav scrollNav={scrollNav}>
        <NavbarContainer>
            <NavLogo to= '/' onClick={toggleHome}> FLATBOOK </NavLogo>
            <MobileIcon onClick={toggle}>
                <FaBars />
            </MobileIcon>
            <NavMenu>
                <NavItem>
                    <NavLinks to = "about"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >About</NavLinks>
                </NavItem>
                <NavItem className='navitem'>
                    <NavLinks to = "student"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Student</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = "services"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Services</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = "owner"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    >Owner</NavLinks>
                </NavItem>
                <NavItem>
                    <NavLinks to = "sign up"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80} 
                    >Sign Up</NavLinks>
                </NavItem>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin" 
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >LOGIN</NavBtnLink>
            </NavBtn>
        </NavbarContainer>

    </Nav>
    </IconContext.Provider>

    </>


  )
}

export default Navbar