import React from 'react';
import './CategoryRow.css';
import ProductCard from '../product-card/Product-card';
import data from '../../../ProductData';

const CategoryRow = () => {
    const newProducts = data.products.slice(0,3);
    return (
        <div className ='category content'>
            <div className = 'category-row'>
                {newProducts.map((product, index) => {
                    return (
                        <ProductCard product={product}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CategoryRow;