import React from 'react';
import './CategoryRow.css';
import {Link} from 'react-router-dom';
import ProductCard from '../product-card/Product-card';

const CategoryRow = (props) => {
    return (

        <div className ='category content'>

            <Link to = {props.pageLink}><h2>{props.categoryTitle}</h2></Link>
            <div className = 'category-row'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default CategoryRow;