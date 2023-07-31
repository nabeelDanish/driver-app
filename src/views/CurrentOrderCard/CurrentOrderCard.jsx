import React, { useState, useEffect } from 'react';
import { getDarkstoreOrders, getDriverData, pickOrders } from '../../lib/api'
import OrderCard from './OrderCard/OrderCard';
import { useStyles } from './styles';

const CurrentOrderCard = ({ driverData, setDriverData, currentOrderSelected }) => {
    const classes = useStyles();

    // Darkstore Orders State
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    // Error states
    const [error, setError] = useState('')

    const renderCurrentOrder = () => {
        if (driverData && driverData.currentOrders && driverData.currentOrders.length) {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <OrderCard orderData={driverData.currentOrders[currentOrderSelected]} />
                    <br />
                    {
                        driverData.currentOrders[currentOrderSelected].status == "DELIVERING" ?
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={handleDeliverRequest}>Deliver</button><button>Unable to Deliver</button>
                            </div>
                            : ''
                    }
                </div>
            );
        }

        return null;
    };

    useEffect(() => {
        if (driverData && driverData.driver && driverData.driver.darkstoreCode)
            getDarkstoreOrders(driverData.driver.darkstoreCode, setItems)
    }, [driverData]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(value)
                ? prevSelectedItems.filter((item) => item !== value)
                : [...prevSelectedItems, value]
        );
    };

    const handleDeliverRequest = (event) => {

    }

    const handleSendRequest = async () => {
        const result = await pickOrders(driverData.driver.driverCode, selectedItems)
        if (result)
            await getDriverData(driverData.driver.driverCode, setDriverData, setError)
        else
            setError('Failed to pick batch!')
    };

    const renderOrderPick = () => {
        if (!(driverData && driverData.currentOrders && driverData.currentOrders.length <= 0))
            return null

        return (
            <div>
                <h3>You have no orders assigned!</h3>
                <br />
                <p>Select orders that you want to pick up</p>
                <ul>
                    {items.map((item) => (
                        <li key={item.id} className={classes.card}>
                            <label>
                                <input
                                    type="checkbox"
                                    value={item.orderCode}
                                    checked={selectedItems.includes(item.orderCode)}
                                    onChange={handleCheckboxChange}
                                    defaultChecked={false}
                                />
                                {item.orderCode}
                            </label>
                        </li>
                    ))}
                </ul>
                <button onClick={handleSendRequest} disabled={selectedItems.length === 0}>
                    Pick Batch
                </button>
                <p>{error}</p>
            </div>
        );
    }

    return (
        <div className={classes.card}>
            <h1>Order Selected</h1>
            {renderCurrentOrder()}
            {renderOrderPick()}
        </div>
    );
};

export default CurrentOrderCard;
