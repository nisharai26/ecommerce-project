import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';
// import Navbar from './components/common/navbar/Navbar';
// import Navbar from './components/common/footer/Footer';
// import Navbar from './components/common/product-card/Product-card';
import Basket from './components/basket/Basket';
import Account from './components/account/Account'

const App = () => {
  return(
    <div className="">
        <BrowserRouter>
         
            <Switch>
                <Route path = "/Account" exact component = {Account}/>
                <Route path = "/Basket" exact component = {Basket}/>
      

      </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
