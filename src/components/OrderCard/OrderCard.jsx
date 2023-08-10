import './styles.css'
import { timeAgo } from '../../lib/util'

import item1 from '../../assets/images/item-1.jpeg'
import item2 from '../../assets/images/item-2.webp'
import item3 from '../../assets/images/item-3.jpeg'
import item4 from '../../assets/images/item-4.jpeg'
import item5 from '../../assets/images/item-5.jpeg'
import item6 from '../../assets/images/item-6.webp'
import item7 from '../../assets/images/item-7.webp'

const OrderCard = ({ orderData }) => {
    const statusStyles = {
        "CONFIRMED": "info",
        "DELIVERED": "success",
        "CANCELLED": "danger",
        "PICKING": "info",
        "FULFILLED": "info",
        "DELIVERING": "warning",
        "UNABLE_TO_DELIVER": "danger"
    }

    const productImages = [item1, item2, item2, item3, item4, item5, item6, item7]

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ marginRight: '2rem' }}>
                <p style={{ fontSize: 'medium', fontWeight: 'bold', marginBottom: '2rem' }}>{orderData.orderCode}</p>
                <p style={{ color: 'gray' }}>Place {timeAgo(orderData.createdAt)}</p>
            </div>
            <hr style={{ borderLeft: '1px solid lightgray', height: '4rem' }} />
            <div style={{ marginLeft: '2rem', display: 'flex', flexDirection: 'column', marginRight: '2rem' }}>
                <img src={productImages[orderData.image]} style={{ maxWidth: '4rem' }} />
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