import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from './components/home/Home';
import SignUp from './components/sign-in-up/Sign-Up';
import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Checkout from './components/checkout/Checkout';
import CategoryPage from './components/categories/Categories';



const App = () => {
  return(
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/sign-in-up" exact component={SignUp}/>
          <Route path="/checkout" exact component={Checkout}/>
          <Route path="/categories/*"exact component={CategoryPage}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;