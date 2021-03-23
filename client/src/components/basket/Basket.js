import React,{useState} from "react";
import "./Basket.css";
import Applelaptop from "./images/applelaptopimage.jpeg";

import Mobile from "./images/mobile.png";
import Watch from "./images/watchimage.jpeg";


const Basket =()=>{
const [basket,setBasket]=useState(
    [
      {
        name: "laptop",
        price:1200,
        quantity:1
}, 
{
    name: "mobile",
    price:300,
    quantity:1

},
{
    name: "watch",
    price:500,
    quantity:1

},

] );


const incrementBasket = (index) => {
    let newBasket = [...basket];
   
    newBasket[index].quantity+=1;
     setBasket(newBasket);
   
}
const decrementBasket = (index) => {
    let newBasket = [...basket];
   if(newBasket[index].quantity >= 1){
    newBasket[index].quantity -= 1;
     setBasket(newBasket); 
   }
  }

  const findPrice =()=>{
      let totalCost = 0;
   for(let product of basket){
     var productCost = (product.price)*(product.quantity);
      totalCost += productCost;
   }
return totalCost;
  }


    return(
        <div className="basket">
     
     <div className="laptop">
     <h1>Laptops</h1>
      <img src ={Applelaptop} alt="Laptop"/>
    <button onClick={()=>incrementBasket(0)}>+</button><h1>{basket[0].quantity}</h1><button onClick={()=>decrementBasket(0)}>-</button>
    
     </div>
      
      <div className="mobile">
      <h1>Mobile</h1>
      <img src ={Mobile} alt="Mobile"/>
      <button onClick={()=>incrementBasket(1)}>+</button><h1>{basket[1].quantity}</h1><button onClick={()=>decrementBasket(1)}>-</button>
      </div>
      
      <div className="watch">
      <h1>Watches</h1>
      <img src ={Watch} alt="Watch"/>
      <button onClick={()=>incrementBasket(2)}>+</button><h1>{basket[2].quantity}</h1><button onClick={()=>decrementBasket(2)}>-</button>
      </div>
    

<h1>{findPrice()}</h1>
<button>Checkout</button>

        </div>

    )
}
export default Basket;