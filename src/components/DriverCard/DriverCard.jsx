import React, { useState } from 'react';
import { changeDriverStatus, getDriverData } from '../../lib/api'
import { useStyles } from './styles';
import { MapComponent, ProfileCard } from '../../components';

const DriverCard = ({ driverCode, setDriverCode, driverData, setDriverData, driverLocation, setDriverLocation }) => {
    const classes = useStyles();
    const [error, setError] = useState(null);

    const handleButtonClick = async () => {
        await getDriverData(driverCode, setDriverData, setError, setDriverLocation);
    };

    const changeStatus = async () => {
        const newStatus = driverData.driver.status == "AVAILABLE" ? "OFFLINE" : "AVAILABLE"
        await changeDriverStatus(driverCode, newStatus);
        await getDriverData(driverCode, setDriverData, setError, setDriverLocation);
    }

    const renderDriverData = () => {
        if (error) {
            return <div className={classes.error}>{error}</div>;
        }

        if (driverData && driverData.driver) {
            return (
                <>
                    <ProfileCard profileData={driverData.driver} />
                    {
                        driverData.driver.status == "AVAILABLE" || driverData.driver.status == "OFFLINE"
                            ?
                            <button onClick={changeStatus}>Go
                                {driverData.driver.status == "AVAILABLE" ? " Offline" : " Available"}
                            </button>
                            : ''
                    }
                    {
                        driverData.driver.status == "RETURNING"
                            ?
                            <button onClick={changeStatus}>Go Available</button>
                            : ''
                    }
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
