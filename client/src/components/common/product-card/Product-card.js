import React from 'react';
import {Link} from 'react-router-dom';
import './Product-card.css';

let productImages = [

]

const ProductCard = (props) => {
    return(
        <div className="product-card">
            <div className="image-container">
                <img src={props.productImage} alt=""/>
                <p>{props.price}</p>
            </div>
            <div className="product-info">
                <h3>{props.productTitle}</h3>
                <p>{props.description}</p>
                <span>Add to Basket</span>
            </div>
        </div>
    )
}

export default ProductCard;