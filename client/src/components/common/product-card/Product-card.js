import React from 'react';
import {Link} from 'react-router-dom';
import './Product-card.css';
import data from '../../../ProductData';

let productImages = [

]

const ProductCard = (props) => {
    return(
        <Link>
        {/* {data.products.map(product =>  */}
            <div className="product-card">
            <div className = "product-info">
                <img src={props.image} alt={props.imageAlt}/>
                <div className="info-container">
                    <h3>{props.brand} {props.model}</h3>
                    <p>£{props.price}</p>
                </div>
            </div>
            <div className="expanded-background-container">
                <div class="expand-background">
                    <div>{props.description}</div>
                </div>
            </div>
        </div>
            {/* )} */}
        </Link>
    )
}

export default ProductCard;