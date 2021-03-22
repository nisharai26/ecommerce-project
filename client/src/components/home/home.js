import React from 'react'
import './Home.css'
import Desktop from './Desktop'
import Laptops from './Laptops'
import Mobiles from './Mobiles'
import Watches from './Watches'
import Accessories from './Accessories'


const Home = () => {
    return(
        <div className ='main-home'>

            <Laptops/>
            <Desktop/>
            <Mobiles/>
            <Watches/>
            <Accessories/>

        </div>
    )
}

export default Home;