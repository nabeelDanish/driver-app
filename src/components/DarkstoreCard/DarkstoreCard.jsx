import { useState } from 'react';
import { useStyles } from './styles';
import { MapComponent } from '../../components'
import { getDarkstoreLoadFactor } from '../../lib/api';

const DarkstoreCard = ({ darkstore }) => {
    const classes = useStyles();
    const [loadFactor, setLoadFactor] = useState(0)

    if (!darkstore) return (<></>)

    const handleButtonClick = async () => {
        const lf = await getDarkstoreLoadFactor(darkstore.darkstoreCode)
        setLoadFactor(lf)
    }

    return (
        <div className={classes.card}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className={classes.details}>
                    <p>🏗️</p>
                    <p>{darkstore.darkstoreCode}</p>
                </div>
                <div className={classes.details}>
                    <p>👤</p>
                    <p>{darkstore.address}</p>
                </div>
                <div className={classes.details}>
                    <p>📦</p>
                    <p>{Math.max(loadFactor, darkstore.loadFactor)}</p>
                </div>
                <div className={classes.details}>
                    <p>💲</p>
                    <p>{darkstore.isServicing ? 'Online' : 'Offline'}</p>
                </div>
                <button onClick={handleButtonClick}>Refresh Load Factor</button>
            </div>
            <MapComponent driverLocation={darkstore.location} />
        </div>
    )
}

export default DarkstoreCard