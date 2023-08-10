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
        <div class="order-card">
            <div class="first">
                <p class="first-order-code">{orderData.orderCode}</p>
                <p style={{ color: 'gray' }}>Place {timeAgo(orderData.createdAt)}</p>
            </div>
            <hr class="vertical-divider" />
            <div class="second">
                <img src={productImages[orderData.image]} style={{ maxWidth: '4rem' }} />
                <span class={'label ' + statusStyles[orderData.status]}>{orderData.status}</span>
            </div>
            <hr class="vertical-divider" />
            <div class="third">
                <div class="details">
                    <p>🏗️</p>
                    <p class="details-text">{orderData.darkstoreCode}</p>
                </div>
                <div class="details">
                    <p>👤</p>
                    <p class="details-text">{orderData.customerCode}</p>
                </div>
                <div class="details">
                    <p>📦</p>
                    <p class="details-text">{orderData.batchCode || 'None'}</p>
                </div>
                <div class="details">
                    <p>💲</p>
                    <p class="details-text">{orderData.totalPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default OrderCard