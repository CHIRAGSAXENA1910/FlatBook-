import React,{useState ,useEffect} from 'react';
import Video from '../../videos/video1.mp4';
import { Button } from '../ButtonElements';
import { animateScroll as scroll} from 'react-scroll';
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
 const [hover, setHover] = useState(false)

 const onHover = () => {
  setHover(!hover)
 }


  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
          <HeroH1><div>FLATBOOK</div>Choose Your Flat</HeroH1>
          <HeroP>Sign Up for new User</HeroP>
          <HeroBtnWrapper>
            <Button to='signup'
             onMouseEnter={onHover}
             onMouseLeave={onHover}
             primary='true'
             dark='true'
             smooth={true}
             duration={500}
             spy={true}
             exact='true'
             offset={-80}
             >
            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
    
    </HeroContainer>
  )
}

export default HeroSection;