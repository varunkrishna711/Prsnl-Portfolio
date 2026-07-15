import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";
import { motion } from "framer-motion";

const MainContainer = styled(motion.div)`
    background-color: ${props => props.theme.body};
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`

const Container = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    border: 2px solid ${props => props.theme.text};
    color: ${props => props.theme.text};
    background-color: ${props => props.theme.body};
    padding: 3rem;
    width: 40vw;
    height: 25vh;
    z-index: 3;
    cursor: pointer;

    font-family: 'Ubuntu Mono', monospace;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    backdrop-filter: blur(4px);

    &:hover {
        color: ${props => props.theme.body};
        background-color: ${props => props.theme.text};
    }

    @media (max-width: 768px) {
        width: 70vw;
        height: 20vh;
    }
`

const Text = styled.h1`
    font-size: calc(0.8rem + 1.5vw);
    text-align: center;
    font-weight: 700;
    letter-spacing: 2px;
`

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
            duration: 0.5,
        }
    }
}

const BlogPage = () => {
    return ( 
        <ThemeProvider theme={lightTheme}>
            <MainContainer
                variants={container}
                initial='hidden'
                animate='show'
                exit={{
                    opacity: 0, transition: { duration: 0.5 }
                }}
            >
                <Container>
                    <LogoComponent theme='light' />
                    <PowerButton />
                    <SocialIcons theme='light' />
                    <ParticleComponent theme='light' />

                    <Card>
                        <Text>
                            NO BLOGS PRESENT YET!!!!
                        </Text>
                    </Card>

                    <BigTitle text="BLOG" top="5rem" left="5rem" />
                </Container>
            </MainContainer>
        </ThemeProvider>
     );
}
 
export default BlogPage;