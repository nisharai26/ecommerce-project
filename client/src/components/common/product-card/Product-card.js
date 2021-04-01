import React from 'react';
import {Link} from 'react-router-dom';
import './Product-card.css';
import data from '../../../ProductData';
import {useState, useEffect} from 'react';

let productImages = [

]

const ProductCard = (props) => {
    const addToBasket= (product) => {
        let basket = localStorage.getItem('basket')
        let basketTotal = localStorage.getItem('total')
          if (basket) {
            basket = JSON.parse(basket)
                if (basket.hasOwnProperty(product._id)) {          
                basket[product._id].quantity ++
                } else {
                    basket[product._id] = {
                    _id: product._id,
                    image: product.image,
                    name: product.brand + " " + product.model, 
                    quantity: 1, 
                    price: product.price
                }
            }
            } else {
            basket = {
                  [product._id]: {
                    _id: product._id,
                    image: product.image,
                    name: product.brand + " " + product.model, 
                    quantity: 1, 
                    price: product.price}
                  }
          }
            localStorage.setItem('basket', JSON.stringify(basket))

            let total = (0)
            Object.entries(basket).map(([key, value]) => {
                let run = (value.price * value.quantity)               
                total += run                
            })
            localStorage.setItem('total', JSON.stringify(total))
        }
    return(
        <Link>
            <div className="product-card">
            <div className = "product-info">
                <img src={props.product.image} alt={props.product.imageAlt}/>
                <div className="info-container">
                    <h3>{props.product.brand} {props.product.model}</h3>
                    <p>£{props.product.price}</p>
                    <button onClick={() => {addToBasket(props.product)}}>Add to Basket</button>
                </div>
            </div>
            <div className="expanded-background-container">
                <div class="expand-background">
                    <div>{props.product.description}</div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default ProductCard;