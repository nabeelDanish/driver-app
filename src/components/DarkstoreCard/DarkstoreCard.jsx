import { useStyles } from './styles';
import { MapComponent } from '../../components'

const DarkstoreCard = ({ darkstore }) => {
    const classes = useStyles();

    if (!darkstore) return (<></>)

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
                    <p>{darkstore.loadFactor}</p>
                </div>
                <div className={classes.details}>
                    <p>💲</p>
                    <p>{darkstore.isServicing ? 'Online' : 'Offline'}</p>
                </div>
                <button>Refresh Load Factor</button>
            </div>
            <MapComponent driverLocation={darkstore.location} />
        </div>
    )
}

export default DarkstoreCard