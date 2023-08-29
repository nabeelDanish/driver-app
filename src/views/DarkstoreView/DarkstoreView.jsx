import React, { useState } from 'react';
import { Grid } from '../../layouts';
import { AllOrders, DarkstoreCard } from '../../components'
import { getDarkstoreOrders, getDarkstoreData } from '../../lib/api';

const DarkstoreView = () => {
    // Darkstore State
    const [darkstoreCode, setDarkstoreCode] = useState('');
    const [darkstoreData, setDarkstoreData] = useState(null);
    const [fulfilledOrders, setFulfilledOrders] = useState([]);
    const [activeOrders, setActiveOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);

    // Fetching Darkstore Data
    const handleClick = async () => {
        const allOrders = await getDarkstoreOrders(darkstoreCode);
        const darkstore = await getDarkstoreData(darkstoreCode);

        const fOrders = allOrders.filter((order) => {
            return order.status == "CONFIRMED" || order.status == "PICKING" || order.status == "FULFILLED"
        })

        const aOrders = allOrders.filter((order) => {
            return order.status == "DELIVERING"
        })

        const cOrders = allOrders.filter((order) => {
            return order.status == "DELIVERED" || order.status == "CANCELLED" || order.status == "UNABLE_TO_DELIVER"
        })

        setFulfilledOrders(fOrders)
        setActiveOrders(aOrders)
        setCompletedOrders(cOrders)
        setDarkstoreData(darkstore)
    }

    const emptyFunction = () => { }

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
                <button onClick={handleClick}>Get Darkstore</button>
            </div>
            <DarkstoreCard darkstore={darkstoreData} />
            <Grid>
                <AllOrders
                    orders={fulfilledOrders}
                    title="Fulfilled"
                    currentOrderSelected={null}
                    setCurrentOrderSelected={emptyFunction}
                />
                <AllOrders
                    orders={activeOrders}
                    title="Active"
                    currentOrderSelected={null}
                    setCurrentOrderSelected={emptyFunction}
                />
                <AllOrders
                    orders={completedOrders}
                    title="Completed"
                    currentOrderSelected={null}
                    setCurrentOrderSelected={emptyFunction}
                />
            </Grid>
        </>
    );
};

export default DarkstoreView;