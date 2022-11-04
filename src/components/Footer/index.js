import React from 'react'
import { animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap, 
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

 } from './FooterElements'

const Footer = () => {

    const toggleHome =() =>{
        scroll.scrollToTop();
    }
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle> 
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms & Condition</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle> 
                            <FooterLink to='/signin'>How it Works</FooterLink>
                            <FooterLink to='/signin'>Testimonials</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms & Condition</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle> 
                            <FooterLink to='/signin'>Contact Us</FooterLink>
                            <FooterLink to='/signin'>Support</FooterLink>
                            <FooterLink to='/signin'>Careers</FooterLink>
                            <FooterLink to='/signin'>Investors</FooterLink>
                            <FooterLink to='/signin'>Terms & Condition</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle> 
                            <FooterLink to='/signin'>Instagram</FooterLink>
                            <FooterLink to='/signin'>Facebook</FooterLink>
                            <FooterLink to='/signin'>Linkedin</FooterLink>
                            <FooterLink to='/signin'>Youtube</FooterLink>
                            <FooterLink to='/signin'>Twitter</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to ='/' onClick={toggleHome}>
                        FLATBOOK
                    </SocialLogo>
                    <WebsiteRights>FLATBOOK @ { new Date().getFullYear( ) }  
                      All Right Resreved. </WebsiteRights>
                    <SocialIcons>
                     <SocialIconLink href="/" target="_blank" arial-label="Facebook"></SocialIconLink>
                     <FaFacebook />
                     <SocialIconLink href="/" target="_blank" arial-label=" Instagram"></SocialIconLink>
                     <FaInstagram />
                     <SocialIconLink href="/" target="_blank" arial-label="Youtube"></SocialIconLink>
                     <FaYoutube />
                     <SocialIconLink href="//www.twitter.com/briandesignz" target="_blank" arial-label="twitter"></SocialIconLink>
                     <FaTwitter />
                     <SocialIconLink href="/" target="_blank" arial-label="Linkedin"></SocialIconLink>
                     <FaLinkedin />
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer