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
                <h1>About the Project</h1>
                <p>
                    Hello! My name is <span style={{fontWeight: 800}}>Nicolas Fuchs</span>, and this is my GOA final project (<span style={{fontStyle: 'italic'}}>CSII: ANALYZING DATA WITH PYTHON</span>). On this website, you’ll be able to see two main pages containing data visualizations for the popularity and location of Tweets related to multiple TV Shows. The data displayed was gathered using Twitter’s API, and the visualizations with the Bokeh library. Visit the GitHub repository for this project here: <a href='https://github.com/nicolasf10/tv-shows' target="a_blank">https://github.com/nicolasf10/tv-shows</a>.
                    (Note: Some shows had to be removed as they didn’t have very unique names, so, otherwise, Tweets about other topics would be be considered in the data set.)
                </p>
                <h2>Visualizations</h2>
                <ul>
                    <li>Popularity Ranking: Bar chart displaying how popular each TV Show is in terms of favorited posts in Twitter</li>
                    <li>Geo Data (All Tweets): World map displaying the location of each Tweet mentioning any TV Show in the dataset</li>
                    <li>Geo Data (Most Popular Tweets): World map displaying the location of Tweets by show</li>
                </ul>
            </Container>
        </Section>
    )
}

export default About
