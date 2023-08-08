import React, { useState, useEffect } from 'react';
import { Grid } from '../../layouts';
import { DriverCard, AllOrders, CurrentOrderCard } from '../../components'
import { getRandomCoordinatesInDubai } from '../../lib/util';
import { updateDriverLocation } from '../../lib/api';

const DarkstoreView = () => {
    // Driver State
    const [darkstoreCode, setDarkstoreCode] = useState('');
    const [darkstoreData, setDarkstoreData] = useState({});

    // Order State
    const [currentOrderSelected, setCurrentOrderSelected] = useState(0);

    // Building Layout
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '1rem' }}>
                <input
                    type="text"
                    value={darkstoreCode}
                    onChange={(e) => setDarkstoreCode(e.target.value)}
                    placeholder="Enter darkstore code"
                />
                <button>Get Darkstore</button>
            </div>
            <Grid>
                <AllOrders
                    driverData={darkstoreData}
                    currentOrderSelected={currentOrderSelected}
                    setCurrentOrderSelected={setCurrentOrderSelected}
                    title="Fulfilled"
                />
                <AllOrders
                    driverData={darkstoreData}
                    currentOrderSelected={currentOrderSelected}
                    setCurrentOrderSelected={setCurrentOrderSelected}
                    title="Active"
                />
                <AllOrders
                    driverData={darkstoreData}
                    currentOrderSelected={currentOrderSelected}
                    setCurrentOrderSelected={setCurrentOrderSelected}
                    title="Completed"
                />
            </Grid>
        </>
    );
};

export default DarkstoreView;