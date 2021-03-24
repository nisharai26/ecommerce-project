import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import CategoryRow from '../common/categoryRow/CategoryRow';

const Home = () => {
    return(
        <div className ='main-home'>

            <Link to = "/laptops"><h2>Laptops</h2></Link>
            <CategoryRow/>
            <Link to = "/desktop"><h2>Desktops</h2></Link>
            <CategoryRow categoryTitle = 'Desktops' pageLink = "/categories/desktops"/>
            <Link to = "/mobiles"><h2>Mobiles</h2></Link>
            <CategoryRow categoryTitle = 'Mobiles' pageLink = "/categories/mobiles"/>
            <Link to = "/smartwatches"><h2>Smartwatches</h2></Link>
            <CategoryRow categoryTitle = 'Smart Watches' pageLink = "/categories/smartwatches"/>
            <Link to = "/accessories"><h2>Accessories</h2></Link>
            <CategoryRow categoryTitle = 'Accessories' pageLink = "/categories/accessories"/>

        </div>
    )
}

export default Home;