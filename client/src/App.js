import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from './components/common/navbar/Navbar';
import Home from './components/home/Home';
import Footer from './components/common/footer/Footer';

const App = () => {
  return(
    <div className="">
      <BrowserRouter>
        <Navbar/>
        <Home/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App;