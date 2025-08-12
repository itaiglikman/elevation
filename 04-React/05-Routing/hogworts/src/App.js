import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
// import { BrowserRouter, Route, Link } from 'react-router'
import Home from './Components/Home';
import { CATEGORIES, CHARMS_DATA, POTIONS_DATA } from './Constants';
import HogwartNavbar from './Components/Header/HogwartNavbar';
import Entities from './Components/Entities/Entities';
import EntityDescription from './Components/Entities/EntityDescription';
import About from './Components/About'

const App = (props) => {
    const [categories, setCategories] = useState(CATEGORIES);
    const [potions, setPotions] = useState(POTIONS_DATA);
    const [charms, setCharms] = useState(CHARMS_DATA);
    const STATE_MAP = {
        potions: potions,
        charms: charms
    }

    const getCategoryData = (category) => {
        return STATE_MAP[category];
    }

    return (
        <BrowserRouter>
            <div>
                <div className="App">
                    <HogwartNavbar />
                </div>
                <Routes>
                    <Route path="/" element={<Home categories={categories} />} />
                </Routes>
                {/* add routes and route here */}
            </div>
        </BrowserRouter>

    );
}

export default App;
