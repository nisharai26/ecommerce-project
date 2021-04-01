import React from 'react'
import './OrderThanks.css'
import {Link} from 'react-router-dom';

const OrderThanks = () => {
    return (
        <div className="outer-div content">
            <div class="order-thanks">
                <h2>Thank you for your order!</h2>
                <p>Your order number is: 53254325644687</p>
                <Link to = "/">
                    <button>Continue Shopping</button>
                </Link>
            </div>
        </div>
    )
}

export default OrderThanks;