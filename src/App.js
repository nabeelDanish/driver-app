import React, { useState, useEffect } from 'react';
import { Grid, Navbar } from './layouts';
import { DriverCard, AllOrders, CurrentOrderCard, DriverView } from './views'
import { getRandomCoordinatesInDubai } from './lib/util';
import { updateDriverLocation } from './lib/api';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
    // Building Layout
    return (
        <div>
            <Navbar />
            <Router>
                <Routes>
                    <Route path="/" exact element={<DriverView />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;