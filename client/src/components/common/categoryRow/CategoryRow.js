import React from 'react';
import './CategoryRow.css';
import ProductCard from '../product-card/Product-card';
import data from '../../../ProductData';

const CategoryRow = () => {
    const newProducts = data.products.slice(0,3);
    // console.log(newProducts[0]);
    const getInfo = (info) => {
        //console.log(info[0].description);
    }
    getInfo(newProducts.map);
    return (
        <div className ='category content'>
            <div className = 'category-row'>
                {/* Should return <ProductCard/>s for the first 3 items in the array for this category, pulling the category, image, imageAlt, brand, model, price, and description from ProductData.js, which should be populated with info from the database.                          */}
            </div>
        </div>
    )
}

// console.log(data.products.slice(0,3));

export default CategoryRow;