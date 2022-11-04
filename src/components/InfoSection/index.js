import React from 'react'
import { Button } from '../ButtonElements.js';
import svgImage from "../../images/svg-4.svg";
import{
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
} from './InfoElements'
import { NavLink } from 'react-router-dom';

const InfoSection = ({lightBg,id,imgStart, topLine,lightText,headline,darkText,description,buttonLabel,alt,
    primary, dark,dark2,divertTo
}) => {
  return (
    <>
    <InfoContainer lightBg={lightBg} id={id} >
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{ topLine }</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>{description}</Subtitle>
                    <BtnWrap>
                        <Button to="home"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-80}
                        primary={primary ? 1 : 0}
                        dark={dark ? 1 : 0}
                        dark2={dark2 ? 1 : 0}
                        > <NavLink to={divertTo} style={{textDecoration:"none", color:"Blue"}}>{buttonLabel} </NavLink> </Button>
                    </BtnWrap>
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={svgImage} alt={alt}/>
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
    </InfoContainer>
    </>
  )
}

export default InfoSection