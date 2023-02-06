import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import {Design,Develope} from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";

import astronaut from "../assets/Images/spaceman.png";
import BigTitlte from "../subComponents/BigTitlte";


const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position:relative;
    oveflow: hidden;
`

const float = keyframes`
    0% { transform: translateY(-10px) }
    50% { transform: translateY(15px) translateX(15px) }
    100% { transform: translateY(-10px) }

`

const SpaceMan = styled.div`
    position: absolute;
    top: 10%;
    right: 5%;
    width: 20vw;

    &>:first-child {
        animation: ${float} 4s ease infinite;
        width: 100%;
        height: auto;
    }

    // img {
    //     width: 100%;
    //     height: auto;
    // }
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 2rem;
    width: 50vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.5;

    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.6rem + 1vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono',monospace;
    font-style: italic;
`


const AboutPage = () => {
    return ( 
        <ThemeProvider theme={darkTheme}>
            <Box>
                <LogoComponent theme='dark'/>
                <SocialIcons theme='dark'/>
                <PowerButton />
                <ParticleComponent theme='dark'/>

                <SpaceMan>
                    <img src={astronaut} alt="spaceman" />
                </SpaceMan>

                <Main>
                    I'm a full-stack developer. I have a sufficient understanding of both the front-end and back-end frameworks.
                    <br /> <br />
                    Even though my primary knowledge is based on developing websites, I do not wish to concentrate on this. So, I am trying to expand my domain to data analysis as well.
                    <br /> <br />
                    I do not believe in being specific to one domain. I love to explore more. I also have an interest in entrepreneurship and, developing and implementing startups. 
                </Main>
                <BigTitlte text="ABOUT" top="5rem" left="5rem" />
                
            </Box>
        </ThemeProvider>
            
     );
}

//Made using particle.js config and react-particles
 
export default AboutPage; 