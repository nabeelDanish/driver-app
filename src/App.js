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
                <div style={{ marginTop: '120px' }}>
                    <Routes>
                        <Route path="/" exact element={<DriverView />} />
                        <Route path="/darkstore" exact element={<DarkstoreView />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
};

export default App;