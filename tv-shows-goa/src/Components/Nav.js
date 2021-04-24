import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css'
import logo from './logo.svg';
import { Link } from 'react-router-dom';

function Nav() {
    const noLinkStyle = {
        color: '#fff',
        textDecoration: 'none'
    }

    const navTextStyle = {
        marginLeft: '10px',
        marginRight: '10px'
    }

    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>
                <Link to='/tv-shows/' style={noLinkStyle}>
                    <img
                        alt=""
                        src={logo}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    TV Shows Popularity
                </Link>
            </Navbar.Brand>
            <Navbar.Text style={navTextStyle}>
                <Link to='/tv-shows/about'>
                    About
                </Link>
            </Navbar.Text>
            <NavDropdown title="Data Visualizations" id="basic-nav-dropdown">
                <NavDropdown.Item target="a_blank" href="https://population-ranking.000webhostapp.com/">
                        Popularity Ranking
                </NavDropdown.Item>
                <NavDropdown.Item target="a_blank" href="https://geo-data-all-tweets.000webhostapp.com/">
                        Geo Data (All Tweets)
                </NavDropdown.Item>
                <NavDropdown.Item target="a_blank" href="https://geo-data-individual-tweets.000webhostapp.com/">
                        Geo Data (Most Popular Tweets)
                </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Text>
                <a target="a_blank" href="https://github.com/nicolasf10/tv-shows/blob/master/Data_Python/tweets_by_show.json">Raw JSON Data</a>
            </Navbar.Text>
        </Navbar>
        </>
    )
}

export default Nav
