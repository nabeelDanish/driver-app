import React from 'react';
import { OrderCard } from '../../components'
import { useStyles } from './styles';

const AllOrders = ({ orders, currentOrderSelected, setCurrentOrderSelected, title }) => {
    const classes = useStyles();

    const renderOrder = (index) => {
        return (
            <div
                className={index == currentOrderSelected ? classes.selectedCard : classes.orderCard}
                key={index}
                onClick={() => setCurrentOrderSelected(index)}
            >
                <OrderCard orderData={orders[index]} />
            </div>
        );
    }

    const renderAllOrders = () => {
        if (orders && orders.length) {
            return (
                <>
                    {
                        orders.map((element, index) => renderOrder(index))
                    }
                </>
            );
        }

        return null;
    };

    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            {renderAllOrders()}
        </div>
    );
};

export default AllOrders;
