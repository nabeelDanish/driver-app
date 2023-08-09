import './styles.css'
import { timeAgo } from '../../lib/util'
import item1 from '../../assets/images/item-1.jpeg'
import item2 from '../../assets/images/item-2.webp'

const OrderCard = ({ orderData, index }) => {
    const statusStyles = {
        "CONFIRMED": "info",
        "DELIVERED": "success",
        "CANCELLED": "danger",
        "PICKING": "info",
        "FULFILLED": "info",
        "DELIVERING": "warning",
        "UNABLE_TO_DELIVER": "danger"
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: '2rem' }}>
                <p style={{ fontSize: 'medium', fontWeight: 'bold', marginBottom: '2rem' }}>{orderData.orderCode}</p>
                <p style={{ color: 'gray' }}>Place {timeAgo(orderData.createdAt)}</p>
            </div>
            <hr style={{ borderLeft: '1px solid lightgray', height: '4rem' }} />
            <div style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column', marginRight: '2rem' }}>
                <img src={index % 2 == 0 ? item1 : item2} style={{ maxWidth: '4rem' }} />
                <span class={'label ' + statusStyles[orderData.status]}>{orderData.status}</span>
            </div>
            <hr style={{ borderLeft: '1px solid lightgray', height: '4rem' }} />
            <div style={{ marginLeft: '2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <p>🏗️</p>
                    <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>{orderData.darkstoreCode}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <p>👤</p>
                    <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>{orderData.customerCode}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <p>📦</p>
                    <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>{orderData.batchCode || 'None'}</p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '1rem' }}>
                    <p>💲</p>
                    <p style={{ fontWeight: 'lighter', fontSize: 'small' }}>{orderData.totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard