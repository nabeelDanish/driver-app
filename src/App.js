import React from 'react';
import { Navbar } from './layouts';
import { DriverView } from './views'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    // Building Layout
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<DriverView />} />
                    <Route path="/darkstore" exact element={<div>Darkstore</div>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;