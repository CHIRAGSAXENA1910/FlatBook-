import React from 'react'
import Icon1 from '../../images/1.jpg'
import Icon2 from '../../images/1.jpg'
import Icon3 from '../../images/1.jpg'

import { 
    ServicesContainer,
    ServicesH1, 
    ServicesWrapper, 
    ServicesCard, 
    ServicesIcon, 
    ServicesH2,
    ServicesP } from './ServicesElements'

const Services = () => {
  return (
    <ServicesContainer id="services">
        <ServicesH1>Our Services </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
                <ServicesIcon src={Icon1} />
                <ServicesH2>NO BROKERAGE...................</ServicesH2>
                <ServicesP>we beleive in service not in commission</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon2} />
                <ServicesH2>ALL TYPES OF ROOMS AVAILABLE FOR RENT</ServicesH2>
                <ServicesP>no more fake rooms everything is verified</ServicesP>
            </ServicesCard>
            <ServicesCard>
                <ServicesIcon src={Icon3} />
                <ServicesH2> 24/7 ASSISTANT </ServicesH2>
                <ServicesP>we are there for you , just mail us your query will be resolved</ServicesP>
            </ServicesCard>

        </ServicesWrapper>

    </ServicesContainer>
  )
}

export default Services