import React, { useState, useEffect } from 'react';
import { getDriverData } from '../../lib/api'
import { camelCaseToCapitalizedWords } from '../../lib/util'
import { useStyles } from './styles';
import { MapComponent } from '../../components';

const DriverCard = ({ driverCode, setDriverCode, driverData, setDriverData, driverLocation, setDriverLocation }) => {
    const classes = useStyles();
    const [error, setError] = useState(null);

    const handleButtonClick = async () => {
        await getDriverData(driverCode, setDriverData, setError);
    };

    useEffect(() => {
        setDriverLocation({ latitude: driverData?.driver?.location?.latitude, longitude: driverData?.driver?.location?.longitude })
    }, [driverData])

    const renderDriverData = () => {
        if (error) {
            return <div className={classes.error}>{error}</div>;
        }

        if (driverData && driverData.driver) {
            return (
                <>
                    <table className={classes.table}>
                        <tbody>
                            {Object.entries(driverData.driver).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{camelCaseToCapitalizedWords(key)}</td>
                                    <td>{JSON.stringify(value)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {driverLocation ? <MapComponent driverLocation={driverLocation} /> : ""}
                </>
            );
        }

        return null;
    };

    return (
        <div className={classes.card}>
            <h1>Driver Details</h1>
            <input
                type="text"
                value={driverCode}
                onChange={(e) => setDriverCode(e.target.value)}
                placeholder="Enter driver code"
                className={classes.input}
            />
            <button onClick={handleButtonClick} className={classes.button}>
                Get Driver Info
            </button>
            {renderDriverData()}
        </div>
    );
};

export default DriverCard;
