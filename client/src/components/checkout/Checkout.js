import React from 'react'
import './Checkout.css'
import Basket from '../basket/Basket';
import {Link} from 'react-router-dom';

const Checkout = () => {

    const basketTotal = parseFloat(localStorage.getItem('total')).toFixed(2)
    
    const getTotal = (basketTotal) => {
        const totalAsNum = parseFloat(basketTotal);
        const checkoutTotal = totalAsNum + 5.99;
        return checkoutTotal.toFixed(2);
    }

    const clearBasket = () => {
        localStorage.removeItem('basket', 'total')
    }

    return(
        <div className="checkout-container">
            <div className="checkout-left">
                <div className="form-container2">
                    <form className="form1">
                        <div className="form-inner2">
                            <div>
                                <h2>Delivery Address</h2>
                                <div className="form-group2">
                                    <label htmlFor="address1">First Line of Address</label>
                                    <p>8 mosslawn road</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="address2">Second Line of Address</label>
                                    <p>Southdene</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="postcode">Postcode</label>
                                    <p>L32 8TY</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="city">City</label>
                                    <p>Liverpool</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="country">Country</label>
                                    <p>United Kingdom</p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="checkout-right">
                <div className="form-container2">
                    <form className="form1">
                        <div className="form-inner2">
                            <div>
                                <h2>In Your Basket</h2>
                                <div className="form-group2">
                                    <label htmlFor="address1">Subtotal</label>
                                    <p>£{basketTotal}</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="address2">Shipping</label>
                                    <p>£5.99</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="postcode">Total</label>
                                    <p>£{getTotal(basketTotal)}</p>
                                </div>
                                <div className="form-group2">
                                    <label htmlFor="city">Promo Code</label>
                                    <input className="checkout-input" type="text" name="city" id="city"/>
                                </div>
                                <input className="button" type="submit" value="APPLY PROMO CODE"/>
                                <br/>
                                <Link to = '/checkout/order-confirmed'>
                                    <input className="button" type="submit" value="CONFIRM ORDER" onClick={clearBasket()}/>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Checkout;