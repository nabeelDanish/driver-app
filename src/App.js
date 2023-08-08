import React from 'react';
import { Navbar } from './layouts';
import { DarkstoreView, DriverView } from './views'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {

    // Building Layout
    return (
        <div>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" exact element={<DriverView />} />
                    <Route path="/darkstore" exact element={<DarkstoreView />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;