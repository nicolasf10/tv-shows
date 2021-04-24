import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import brooklyn99 from './images/brooklyn-99.png';
import modernfamily from './images/modernfamily.png';
import thecrown from './images/thecrown.png';
import theflash from './images/theflash.png';
import { Link } from 'react-router-dom';


const Hero = () => {
    const Section = styled.section`
    height: 100vh;
    display: flex;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background: #141414;
    overflow-x: hidden;

    @media screen and (max-width: 1000px) {
        height: 145vh;
    }
    `

    const Container = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;

    @media screen and (max-width: 1000px) {
        flex-direction: column;
    }
    `

    const ColumnLeft = styled.div`
    display: flex;
    width: 50vw;
    color: #fff;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    padding: 5rem 2rem;
    height: 100%;

    @media screen and (max-width: 1000px) {
        width: 100vw;
        height: 65vh;
    }
    `

    const Image = styled(motion.img)`
    position: absolute;
    width: 40%;
    max-width: 250px;
    max-height: 250px;

    @media screen and (max-width: 1000px) {
        width: 33.5%;
    }
    `

    const ColumnRight = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    position: relative;
    width: 40vw;

    ${Image}:nth-child(1) {
        top: 30px;
        left: 50px;
    }

    ${Image}:nth-child(2) {
        top: 100px;
        right: 30px;
    }

    ${Image}:nth-child(3) {
        top: 325px;
        left: 50px;
    }

    ${Image}:nth-child(4) {
        bottom: 130px;
        right: 60px;
    }

    @media screen and (max-width: 1000px) {
        width: 100vw;
        height: 65vh;

        ${Image}:nth-child(1) {
        top: 20px;
        left: 20px;
        }

        ${Image}:nth-child(2) {
            top: 60px;
            right: 40px;
        }

        ${Image}:nth-child(3) {
            top: 250px;
            left: 50px;
        }

        ${Image}:nth-child(4) {
            bottom: 45px;
            right: 70px;
        }
    }
    `

    const Button = styled(motion.button)`
    padding: 1rem 3rem;
    font-size: 1rem;
    font-family: "Montserrat", sans-serif;
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    cursor: pointer;
    margin-left: 20px;
    background: transparent;
    text-align: center;
    color: #fff;
    `

    const Title = styled(motion.h1)`
    margin-bottom: 0.5rem;
    font-size: 2rem;
    margin-left: 20px;

    @media screen and (max-width: 800px) {
        font-size: 1.5rem;
    }

    @media screen and (max-width: 450px) {
        font-size: 1rem;
    }
    `

    const Description = styled(motion.p)`
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    font-family: "Montserrat", sans-serif;
    margin-left: 20px;

    @media screen and (max-width: 800px) {
        font-size: 3rem;
    }

    @media screen and (max-width: 450px) {
        font-size: 2rem;
    }
    `

    const fadeLeft = {
        hidden: { opacity: 0, x: -100 },
        visible: {opacity: 1, x: 0 }
    }

    return (
        <div className='hero-section'>
            <Section>
                <Container>
                    <ColumnLeft>
                        <Title
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            transition={{duration: 1}}
                        >GOA Final Project</Title>
                        <Description
                            variants={fadeLeft}
                            initial='hidden'
                            animate='visible'
                            transition={{duration: 1}}
                        >TV Shows Popularity With Twitter</Description>
                        <Link to='about'>
                            <Button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95, backgroundColor: '#fff', color: '#1e3550' }}
                            initial={{ opacity: 0 }}
                            animate={{opacity: 1, transition: {duration: 1.5} }}

                            >Learn More</Button>
                        </Link>
                    </ColumnLeft>
                    <ColumnRight>
                        <Image src={brooklyn99}
                            whileTap={{scale: 0.9 }}
                            whileHover={{scale: 1.1}}
                            drag={true}
                            dragConstraints={{left: 20, right: 250, top: 0, bottom: 80}}
                        />
                        <Image src={theflash}
                            whileTap={{scale: 0.9 }}
                            whileHover={{scale: 1.1}}
                            drag={true}
                            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                        />
                        <Image src={modernfamily}
                            whileTap={{scale: 0.9 }}
                            whileHover={{scale: 1.1}}
                            drag={true}
                            dragConstraints={{left: 10, right: 250, top: 0, bottom: 10}}
                        />
                        <Image src={thecrown}
                            whileTap={{scale: 0.9 }}
                            whileHover={{scale: 1.1}}
                            drag={true}
                            dragConstraints={{left: 0, right: 0, top: 0, bottom: 0}}
                        />
                    </ColumnRight>
                </Container>
            </Section>
        </div>
    )
}

export default Hero
