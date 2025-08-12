import React from 'react';
import './HogwartNavbar.css';
import { Link } from 'react-router-dom';

const HogwartNavbar = () => {
    return (
        <nav className="navbar">
            <Link to={'/'}>
                <div className="navbar-link">Home</div>
            </Link>
            <Link to={'/about'}>
            <div className="navbar-link">About</div>
            </Link>
        </nav>
    );
}


export default HogwartNavbar;
