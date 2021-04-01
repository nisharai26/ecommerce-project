import React from 'react';
import './CategoryRow.css';
import ProductCard from '../product-card/Product-card';
import {useState, useEffect} from 'react';

const CategoryRow = (props) => {

    const [products, setProducts] = useState([]);
    const [productID, setProductID] = useState('');

    const getProducts = () => {
        fetch('http://localhost:3001/products/all')
        .then(res => res.json())
        .then(res => setProducts(res.data));
    }
    useEffect(() => {
        getProducts();
    }, []);

    const filterCategory = products.filter(function(product) {
        return product.category == `${props.category}`;
    });

    const newProducts = filterCategory.slice(0,3);
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