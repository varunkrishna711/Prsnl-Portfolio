import React from "react";
import styled from "styled-components";
import Me from "../assets/Images/profile-img.png";
import {motion} from 'framer-motion';

const Box = styled(motion.div)`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);

    width: 65vw;
    height: 55vh;
    display: flex;

    background-repeat: no-repeat;
    background-size: 100% 2px;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;

        background-repeat: no-repeat;
        background-size: 100% 2px;

        border-left: 2px solid ${props => props.theme.body};
        border-right: 2px solid ${props => props.theme.text};

       

        z-index: 1;
`
const SubBox = styled.div`
    width: 50%;
    position: relative;
    display: flex;     
    
    .pic {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%,0%);
        width: 100%;
        height: auto;
    }
`

const Text = styled.div`
    font-size: calc(1em + 1.5vw);
    color: ${props => props.theme.body};
    padding: 2rem;
    cursor: pointer;

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &>*:last-child {
        color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
        font-size: calc(0.1rem + 1.1vw);
        font-weight: 300;

    }
`

const Intro = () => {
    return ( 
        <Box
            initial={{height:0}}
            animate={{height: '55vh'}}
            transition={{type:'spring',duration:2,delay:1}}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Varun Krishna</h3>
                    <p>I am a full-stack developer who is constantly trying to explore new domains. My conceptual knowledge in understanding both the front-end and back-end of web applications
                          makes me a valuable asset to any team. My comprehensive understanding of web development technologies such as HTML, CSS, JavaScript, 
                          and server-side languages allows me to take projects from conception to deployment. Apart from this, I am person who likes to explore 
                          further more into different domains. To begin with, I have built a few projects based on data  analytics. Thus, if, even though my
                          experience is less in any domain, I will try my level best to learn and implement the concept</p>
                </Text>
            </SubBox>

            <SubBox>
                <motion.div
                    initial={{opacity:0}}
                    animate={{opacity: 1}}
                    transition={{duration:1,delay:2}}
                >
                    <img className="pic" src={Me} alt="Profile Pic" />
                </motion.div>
            </SubBox>
        </Box>
     );
}
 
export default Intro;