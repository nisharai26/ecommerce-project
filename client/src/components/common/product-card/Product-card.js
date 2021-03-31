import React from 'react';
import {Link} from 'react-router-dom';
import './Product-card.css';
import data from '../../../ProductData';
import {useState, useEffect} from 'react';

let productImages = [

]

const ProductCard = (props) => {
    // console.log(`${props.product._id}`);
    const [product, basket] = useState([])

    const addToBasket= (product) => {
        console.log(product);
        let basket = localStorage.setItem('products', JSON.parse(product));

        // if (basket) {
        //     basket = JSON.parse(basket);
        //     if (basket.hasOwnProperty(product)) {
        //         basket[product].quantity++
        //     }
        //     else {
        //         basket[product] = {
        //             _id: product,
        //             quantity: 1
        //         }
        //     }
        // }
    }
    return(
        <Link>
        {/* {data.products.map(product =>  */}
            <div className="product-card">
            <div className = "product-info">
                <img src={props.product.image} alt={props.product.imageAlt}/>
                <div className="info-container">
                    <h3>{props.product.brand} {props.product.model}</h3>
                    <p>£{props.product.price}</p>
                    <button onclick={() => {addToBasket(props.product._id)}}>Add to Basket</button>
                </div>
            </div>
            <div className="expanded-background-container">
                <div class="expand-background">
                    <div>{props.product.description}</div>
                </div>
            </div>
        </div>
            {/* )} */}
        </Link>
    )
}

export default ProductCard;