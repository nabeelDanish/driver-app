import './styles.css'
import { timeAgo } from '../../lib/util'

const OrderCard = ({ orderData }) => {
    return (
        <div class="card">
            <table>
                <tr>
                    <td>Order Code</td>
                    <td>{orderData.orderCode}</td>
                </tr>
                <tr>
                    <td>Darkstore Code</td>
                    <td>{orderData.darkstoreCode}</td>
                </tr>
                <tr>
                    <td>Customer Code</td>
                    <td>{orderData.customerCode}</td>
                </tr>
                <tr>
                    <td>Batch Code</td>
                    <td>{orderData.batchCode}</td>
                </tr>
                <tr>
                    <td>Status</td>
                    <td>{orderData.status}</td>
                </tr>
                <tr>
                    <td>Total Price</td>
                    <td>{orderData.totalPrice} AED</td>
                </tr>
                <tr>
                    <td>Created At</td>
                    <td>{timeAgo(orderData.createdAt)}</td>
                </tr>
                <tr>
                    <td>Updated At</td>
                    <td>{timeAgo(orderData.updatedAt)}</td>
                </tr>
            </table>
        </div>
    )
}

export default OrderCard