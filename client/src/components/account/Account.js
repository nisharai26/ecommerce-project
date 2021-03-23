import React from "react";

const Account =()=>{
    return (
        <div className="container">
        <div className="Myinfo">
            <h1>My Info</h1>
           Name:<input type ="text" name ="name"></input>
           Address:<input type ="alphanumeric" name ="address"></input>
           <button>Update Info </button>
           <button>Change Password </button>
           </div>
           <div className ="MyOrder">
               <h1>My Order</h1>
               <p>Order Number:</p>
               <p>Total</p>
               <button>View Order</button>
           </div>
           </div>
    )

}

export default Account;