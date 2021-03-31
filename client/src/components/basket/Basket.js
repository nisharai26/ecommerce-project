import React,{useState} from "react";
import {Link} from 'react-router-dom';
import "./Basket.css";
import Applelaptop from "./images/applelaptopimage.jpeg";
import Mobile from "./images/mobile.png";
import Watch from "./images/watchimage.jpeg";

const Basket =()=>{
// const [basket,setBasket]=useState(
//     [
//         // {
//         //   name: "laptop",
//         //   price:1200,
//         //   quantity:1
//         // }, 
//         // // {
//         // //   name: "mobile",
//         // //   price:300,
//         // //   quantity:1
//         // // },
//         // // {
//         // //   name: "watch",
//         // //   price:500,
//         // //   quantity:1
//         // // },
//     ]);

const [update, setUpdate] = useState(false);

let basketTotal = localStorage.getItem('total')
const getBasketTotal = () => {
  basketTotal = parseFloat(basketTotal).toFixed(2);
  return basketTotal;
}

let basket = localStorage.getItem('basket') || {};

basket = JSON.parse(basket)

const incrementBasket = (index) => {
    let newBasket = [...basket];
   
    newBasket[index].quantity+=1;  
}

const decrementBasket = (index) => {
    let newBasket = [...basket];
    if(newBasket[index].quantity >= 1){
      newBasket[index].quantity -= 1; 
    }
  }

  // const findPrice =()=>{
  //     let totalCost = 0;
  //     for(let product of basket){
  //       var productCost = (product.price)*(product.quantity);
  //       totalCost += productCost;
  //     }
  //     return totalCost;
  //     }

      return(
        <div className="basket-container">
            <div className="basket-left">
                <div className="basket-heading"> 
                  <h2>Basket</h2>
                </div>


                {Object.entries(basket).map(([key, value]) => ( 

  
                <div className="basket-box">
                  <div className="product-name">
                    <p>{value.name}</p>
                  </div>
                  <img className="images" src ={value.image} alt="Laptop"/>
                  <div className="quantity">
                    <button className="basket-button" onClick={()=>decrementBasket(0)}>-</button>
                    <h4>{value.quantity}</h4>
                    <button className="basket-button" onClick={()=>incrementBasket(0)}>+</button>
                  </div>
                  <p className="price">{value.price}</p>
                </div>
             ))}


            </div>
            <div className="basket-right">
                <div className="form-container3">
                    <form className="form">
                        <div className="form-inner3">
                            <div>
                                <h2>Summary</h2>
                                <div className="form-group3">
                                    <label htmlFor="address1">Subtotal</label>
                                    <p>£{getBasketTotal()}</p>
                                </div>
                                <Link to = "/checkout"><input  className="basket-submit" type="submit" value="CHECKOUT"/></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

      //   <div className="mobile">
      //     <h1>Mobile</h1>
      //     <img src ={Mobile} alt="Mobile"/>
      //     <button onClick={()=>incrementBasket(1)}>+</button><h1>{basket[1].quantity}</h1><button onClick={()=>decrementBasket(1)}>-</button>
      //   </div>
      //   <div className="watch">
      //     <img src ={Watch} alt="Watch"/>
      //     <button onClick={()=>incrementBasket(2)}>+</button><h1>{basket[2].quantity}</h1><button onClick={()=>decrementBasket(2)}>-</button>
      //   </div>
    )
}

export default Basket;