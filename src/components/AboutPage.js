import React from "react";
import styled, { keyframes, ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";

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
    position: relative;
    overflow: hidden;
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
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    padding: 1.8rem;
    width: 55vw;
    height: 60vh;
    z-index: 3;
    line-height: 1.4;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size: calc(0.5rem + 0.65vw);
    backdrop-filter: blur(4px);

    position: absolute;
    left: calc(5rem + 5vw);
    top: 10rem;

    font-family: 'Ubuntu Mono', monospace;
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
                    <p>I'm a Full Stack Engineer & GenAI Developer with 2 years of experience designing and deploying scalable backend services, robust data engineering pipelines, and intelligent agentic systems.</p>
                    <br />
                    <p>My core technical expertise spans building APIs and test-driven servers (FastAPI, Node.js, Pytest), architecting agentic AI workflows and RAG pipelines (LangChain, LangGraph, Vector DBs like Pinecone), and constructing distributed data processing pipelines (PySpark, Delta Lake). I bridge these capabilities with modern frontends built using React, Next.js, and Tailwind CSS.</p>
                    <br />
                    <p>I am driven by curiosity and do not believe in restricting myself to a single technical domain. I love diving into emerging fields, from generative AI to data engineering, and I bring a strong interest in entrepreneurship, startup development, and translating innovative ideas into functional, production-ready products.</p>
                </Main>
                <BigTitlte text="ABOUT" top="5rem" left="5rem" />
                
            </Box>
        </ThemeProvider>
     );
}
 
export default AboutPage; 