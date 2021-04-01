import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './components/home/Home';
import SignUp from './components/sign-in-up/Sign-Up';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Checkout from './components/checkout/Checkout';
import Account from './components/account/Account';
import Basket from './components/basket/Basket';
import CategoryPage from './components/categories/Categories';
import AllProducts from './components/allProducts/AllProducts';
import OrderThanks from './components/checkout/orderThanks/OrderThanks';



const App = () => {
  return(
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/sign-in-up" exact component={SignUp}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path = "/account" exact component = {Account}/>
          <Route path = "/basket" exact component = {Basket}/>
          <Route path="/categories/*"exact component={CategoryPage}/>
          <Route path="/products/all" exact component={AllProducts}/>
          <Route path="/checkout/order-confirmed" exact component={OrderThanks}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
               
    </div>
  )
}

export default App;