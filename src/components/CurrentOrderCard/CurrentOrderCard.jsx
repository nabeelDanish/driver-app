import React, { useState, useEffect } from 'react';
import { getDarkstoreOrders, getDriverData, pickOrders, deliverOrder, unableToDeliver } from '../../lib/api'
import { OrderCard } from '../../components'
import { useStyles } from './styles';

const CurrentOrderCard = ({ driverData, setDriverData, currentOrderSelected, setDriverLocation }) => {
    const classes = useStyles();

    // Darkstore Orders State
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    // Error states
    const [error, setError] = useState('')

    // Modal states
    const [displayModal, setDisplayModal] = useState(false)
    const [comment, setComment] = useState('');

    const toggleModal = () => {
        setDisplayModal(!displayModal)
    }

    // Unable to Deliver Modal
    const Modal = () => {
        return (
            <div className={classes.modal} style={{ display: displayModal ? 'block' : 'none' }}>
                <div className={classes.modalContent}>
                    <span className={classes.modalClose} onClick={toggleModal}>&times;</span>
                    <div style={{ marginTop: '0.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <p>Please provide a reason for not being able to deliver</p>
                        <br />
                        <input
                            type='text'
                            style={{ width: '80%' }}
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder='Bike broke down?'
                        />
                        <br />
                        <button onClick={handleUnableToDeliver}>Confirm</button>
                    </div>
                </div>
            </div>
        )
    }

    // Current Order Exists Card
    const renderCurrentOrder = () => {
        if (driverData && driverData.currentOrders && driverData.currentOrders.length) {
            return (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <OrderCard orderData={driverData.currentOrders[currentOrderSelected]} />
                    <br />
                    {
                        driverData.currentOrders[currentOrderSelected].status == "DELIVERING" ?
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button onClick={handleDeliverRequest}>Deliver</button>
                                <button onClick={toggleModal}>Unable to Deliver</button>
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
            getDarkstoreOrders(driverData.driver.darkstoreCode)
                .then((currentOrders) => {
                    let filteredOrders = currentOrders.filter((darkstore) => {
                        return darkstore.status == "FULFILLED"
                    })
                    setItems(filteredOrders)
                })
    }, [driverData]);

    const handleCheckboxChange = (event) => {
        const value = event.target.value;
        setSelectedItems((prevSelectedItems) =>
            prevSelectedItems.includes(value)
                ? prevSelectedItems.filter((item) => item !== value)
                : [...prevSelectedItems, value]
        );
    };

    const handleDeliverRequest = async (event) => {
        const result = await deliverOrder(driverData.driver.driverCode, driverData.currentOrders[currentOrderSelected].orderCode)
        if (result)
            await getDriverData(driverData.driver.driverCode, setDriverData, setError, setDriverLocation)
        else
            setError('Failed to deliver order')
    }

    const handleUnableToDeliver = async (event) => {
        setDisplayModal(false);
        const result = await unableToDeliver(driverData.driver.driverCode, driverData.currentOrders[currentOrderSelected].orderCode, comment)
        if (result) {
            setComment('');
            await getDriverData(driverData.driver.driverCode, setDriverData, setError, setDriverLocation)
        }
        else
            setError('Failed to deliver order')
    }

    const handleSendRequest = async () => {
        const result = await pickOrders(driverData.driver.driverCode, selectedItems)
        if (result)
            await getDriverData(driverData.driver.driverCode, setDriverData, setError, setDriverLocation)
        else
            setError('Failed to pick batch!')
    };

    const renderOrderPick = () => {
        if (!(driverData && driverData.currentOrders && driverData.currentOrders.length <= 0))
            return null

        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
            {Modal()}
            <h1>Order Selected</h1>
            {renderCurrentOrder()}
            {renderOrderPick()}
        </div>
    );
};

export default CurrentOrderCard;
