import React from 'react'
import './CategoryRow.css'


const CategoryRow = (props) => {
    return(

        <div className ='main-home'>

            <h2>{props.categoryTitle}</h2>
            <div className = 'category'>
                <div className='box-one'>

                </div>
                <div className='box-two'>

                </div>
                <div className='box-three'>

                </div>
            </div>
        </div>
    )
}

export default CategoryRow;