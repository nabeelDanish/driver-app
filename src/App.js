import React, { useState, useEffect } from 'react';
import { Grid, Navbar } from './layouts';
import { DriverCard, AllOrders, CurrentOrderCard } from './views'
import { getRandomCoordinatesInDubai } from './lib/util';
import { updateDriverLocation } from './lib/api';

const App = () => {
    // Driver State
    const [driverCode, setDriverCode] = useState('');
    const [driverData, setDriverData] = useState({});
    const [driverLocation, setDriverLocation] = useState(null);

    // Order State
    const [currentOrderSelected, setCurrentOrderSelected] = useState(0);

    // Changing Driver Location
    useEffect(() => {
        // This function will be called after every render of the component
        const intervalId = setInterval(async () => {
            if (driverLocation == null)
                return

            const { latitude, longitude } = getRandomCoordinatesInDubai();
            await updateDriverLocation(driverCode, { latitude, longitude })
            setDriverLocation({ latitude: latitude, longitude, longitude })
        }, 10000);

        // Cleanup function: This will be called when the component is unmounted or the dependency array changes
        return () => {
            clearInterval(intervalId);
        };
    }, []);


    // Building Layout
    return (
        <div>
            <Navbar />
            <Grid>
                <DriverCard
                    driverCode={driverCode}
                    setDriverCode={setDriverCode}
                    driverData={driverData}
                    setDriverData={setDriverData}
                    driverLocation={driverLocation}
                    setDriverLocation={setDriverLocation}
                />
                <CurrentOrderCard
                    driverData={driverData}
                    setDriverData={setDriverData}
                    currentOrderSelected={currentOrderSelected}
                />
                <AllOrders
                    driverData={driverData}
                    currentOrderSelected={currentOrderSelected}
                    setCurrentOrderSelected={setCurrentOrderSelected}
                />
            </Grid>
        </div>
    );
};

export default App;