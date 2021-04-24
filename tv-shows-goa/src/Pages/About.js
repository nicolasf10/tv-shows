import React from 'react';
import styled from 'styled-components';

function About() {
    const Section = styled.section`
        background-color: #1e3550;
        height: 100vh;
        color: #fff;
    `

    const Container = styled.div`
        width: 60%;
        margin: auto;
        padding-top: 100px;

        @media screen and (max-width: 1000px) {
            width: 75%;
        }
    `

    return (
        <Section>
            <Container>
                <p>
                    Hello! My name is <span style={{fontWeight: 800}}>Nicolas Fuchs</span>, and this is my GOA final project (<span style={{fontStyle: 'italic'}}>CSII: ANALYZING DATA WITH PYTHON</span>). On this website, you’ll be able to see two main pages containing data visualizations for the popularity and location of Tweets related to multiple TV Shows. The data displayed was gathered using Twitter’s API, and the visualizations with the Bokeh library. Visit the GitHub repository for this project here: <a href='https://github.com/nicolasf10/tv-shows' target="a_blank">https://github.com/nicolasf10/tv-shows</a>.
                    (Note: Some shows had to be removed as they didn’t have very unique names, so, otherwise, Tweets about other topics would be be considered in the data set.)
                </p>
            </Container>
        </Section>
    )
}

export default About
