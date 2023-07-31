import React from 'react';
import { camelCaseToCapitalizedWords } from '../../lib/util'
import { useStyles } from './styles';

const AllOrders = ({ driverData, currentOrderSelected, setCurrentOrderSelected }) => {
    const classes = useStyles();

    const renderOrder = (index) => {
        return (
            <div
                className={index == currentOrderSelected ? classes.selectedCard : classes.orderCard}
                key={index}
                onClick={() => setCurrentOrderSelected(index)}
            >
                <table className={classes.table}>
                    <tbody>
                        {Object.entries(driverData.currentOrders[index]).map(([key, value]) => (
                            <tr key={key}>
                                <td>{camelCaseToCapitalizedWords(key)}</td>
                                <td>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }

    const renderAllOrders = () => {
        if (driverData && driverData.currentOrders && driverData.currentOrders.length) {
            return (
                <>
                    {
                        driverData.currentOrders.map((element, index) => renderOrder(index))
                    }
                </>
            );
        }

        return null;
    };

    return (
        <div className={classes.card}>
            <h1>Orders Assigned</h1>
            {renderAllOrders()}
        </div>
    );
};

export default AllOrders;
