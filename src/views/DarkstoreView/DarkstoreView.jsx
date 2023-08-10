import React, { useState } from 'react';
import { Grid } from '../../layouts';
import { AllOrders } from '../../components'
import { getDarkstoreOrders } from '../../lib/api';
import { productImages } from '../../assets/images'

const DarkstoreView = () => {
    // Driver State
    const [darkstoreCode, setDarkstoreCode] = useState('');
    const [fulfilledOrders, setFulfilledOrders] = useState([]);
    const [activeOrders, setActiveOrders] = useState([]);
    const [completedOrders, setCompletedOrders] = useState([]);


    // Order State
    const [currentOrderSelected, setCurrentOrderSelected] = useState(0);

    // Fetching Darsktore Data
    const handleClick = async () => {
        const allOrders = await getDarkstoreOrders(darkstoreCode);

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
    }

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
            <Grid>
                <AllOrders
                    orders={fulfilledOrders}
                    title="Fulfilled"
                />
                <AllOrders
                    orders={activeOrders}
                    title="Active"
                />
                <AllOrders
                    orders={completedOrders}
                    title="Completed"
                />
            </Grid>
        </>
    );
};

export default DarkstoreView;