import React from 'react';
import './AllProducts.css';
import {useState, useEffect} from 'react';
import ProductCard from '../common/product-card/Product-card';

const AllProducts = () => {
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

    const laptops = products.filter(function(laptop) {
        return laptop.category == 'laptops';
    });

    return (
        <div className ='category content'>
                {laptops.map((laptop, index) => {
                    return(
                        <ProductCard product={laptop}/>
                    )
                })}
        </div>
    )
}

export default AllProducts;