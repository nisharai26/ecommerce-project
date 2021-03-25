import React from 'react'
import {Link} from 'react-router-dom';
import './BasketTest.css'

const BasketTest = () => {
    
    return(
        <div className="basket-container">
            <div className="basket-left">
                <h2>Basket</h2>
                
            </div>
            <div className="basket-right">
                <div className="form-container3">
                    <form className="form">
                        <div className="form-inner3">
                            <div>
                                <h2>Summary</h2>
                                <div className="form-group3">
                                    <label htmlFor="address1">Subtotal</label>
                                    <p>£1000</p>
                                </div>
                                <Link to = "/checkout"><input  className="input" type="submit" value="CHECKOUT"/></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    ) 
}
export default BasketTest;