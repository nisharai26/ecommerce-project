import React from 'react';
import './Home.css';
import CategoryRow from '../common/categoryRow/CategoryRow';

const Home = () => {
    return(
        <div className ='main-home'>

            <CategoryRow categoryTitle = 'Laptops' pageLink = "/categories/laptops"/>
            <CategoryRow categoryTitle = 'Desktops' pageLink = "/categories/desktops"/>
            <CategoryRow categoryTitle = 'Mobiles' pageLink = "/categories/mobiles"/>
            <CategoryRow categoryTitle = 'Smart Watches' pageLink = "/categories/smartwatches"/>
            <CategoryRow categoryTitle = 'Accessories' pageLink = "/categories/accessories"/>

        </div>
    )
}

export default Home;