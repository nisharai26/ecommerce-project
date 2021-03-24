import React from 'react';
import './CategoryRow.css';
import ProductCard from '../product-card/Product-card';

const CategoryRow = (props) => {
    return (

        <div className ='category content'>
            <div className = 'category-row'>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    )
}

export default CategoryRow;