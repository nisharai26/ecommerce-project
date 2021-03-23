import React from 'react'
import './Home.css'
import CategoryRow from './CategoryRow'

const Home = () => {
    return(
        <div className ='main-home'>
            <CategoryRow categoryTitle = 'Laptops'/>
            <CategoryRow categoryTitle = 'Desktops'/>
            <CategoryRow categoryTitle = 'Mobiles'/>
            <CategoryRow categoryTitle = 'Smart Watches'/>
            <CategoryRow categoryTitle = 'Accessories'/>
        </div>
    )
}

export default Home;