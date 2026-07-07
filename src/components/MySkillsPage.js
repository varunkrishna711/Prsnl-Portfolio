import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Data, Develope, Microchip } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";

const Box = styled.div`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Main = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 1.5rem;
    width: 26vw;
    height: 62vh;
    z-index: 3;
    line-height: 1.4;
    cursor: pointer;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }
`

const Title = styled.h2`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: calc(0.9em + 0.8vw);

    ${Main}:hover & {
        & > * {
            fill: ${props => props.theme.body};
        }
    }

    & > *:first-child {
        margin-right: 0.8rem;
    }
`

const Description = styled.div`
    color: ${props => props.theme.text};
    font-size: calc(0.55em + 0.7vw);
    padding: 0.3rem 0;

    ${Main}:hover & {
        color: ${props => props.theme.body};
    }

    strong {
        margin-bottom: 0.3rem;
        text-transform: uppercase;
        display: block;
    }
    
    ul, p {
        margin-left: 1rem;
    }
    
    li {
        list-style-type: square;
    }
`

const MySkillsPage = () => {
    return ( 
        <ThemeProvider theme={lightTheme}>
            <Box>
                <LogoComponent theme='light'/>
                <SocialIcons theme='light'/>
                <PowerButton />
                <ParticleComponent theme='light'/>
                
                {/* 1. Python AI Engineer */}
                <Main>
                    <Title>
                        <Microchip width={35} height={35} /> Python AI Engineer
                    </Title>

                    <Description>
                        Specializing in agentic AI systems, production RAG pipelines, and integrating LLMs for intelligent workflows.
                    </Description>
                    
                    <Description>
                        <strong>Skills</strong>
                        <p>LangChain, LangGraph, RAG, Vector DBs, LLMs, OpenAI & Gemini APIs.</p>
                    </Description>
                    
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Langsmith</li>
                            <li>Docker</li>
                            <li>Pinecone</li>
                            <li>Postman</li>
                        </ul>
                    </Description>
                </Main>

                {/* 2. Data Engineer */}
                <Main>
                    <Title>
                        <Data width={35} height={35} /> Data Engineer
                    </Title>

                    <Description>
                        Designing and implementing efficient, scalable ETL pipelines to process and manage large-scale datasets.
                    </Description>
                    
                    <Description>
                        <strong>Skills</strong>
                        <p>PySpark, Delta Lake, SQL, Data Modeling, ETL Workflows, Data Pipeline Architecture.</p>
                    </Description>
                    
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Google Colab</li>
                            <li>Docker</li>
                            <li>PostgreSQL</li>
                        </ul>
                    </Description>
                </Main>

                {/* 3. Full Stack Developer */}
                <Main>
                    <Title>
                        <Develope width={35} height={35} /> Full Stack Dev
                    </Title>

                    <Description>
                        Building responsive, high-performance web applications with robust backend services and modern frontends.
                    </Description>
                    
                    <Description>
                        <strong>Skills</strong>
                        <p>React.js, Next.js, Tailwind CSS, FastAPI, Pytest (90% coverage), REST APIs, Javascript.</p>
                    </Description>
                    
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>Git & Github</li>
                            <li>Postman</li>
                            <li>NPM</li>
                        </ul>
                    </Description>
                </Main>

                <BigTitlte text="SKILLS" top="80%" left="30%" />
            </Box>
        </ThemeProvider>
     );
}
 
export default MySkillsPage; 