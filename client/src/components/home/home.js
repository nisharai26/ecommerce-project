import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import CategoryRow from '../common/categoryRow/CategoryRow';

const Home = () => {
    return(
        <div className ='main-home'>

            <Link to = "/categories/laptops"><h2>Laptops</h2></Link>
            <CategoryRow category = 'laptops'/>
            <Link to = "/categories/desktop"><h2>Desktops</h2></Link>
            <CategoryRow category = 'desktops'/>
            <Link to = "/categories/mobiles"><h2>Mobiles</h2></Link>
            <CategoryRow category = 'mobiles'/>
            <Link to = "/categories/smartwatches"><h2>Smartwatches</h2></Link>
            <CategoryRow category = 'smartwatches'/>
            <Link to = "/categories/accessories"><h2>Accessories</h2></Link>
            <CategoryRow category = 'accessories'/>

        </div>
    )
}

export default Home;