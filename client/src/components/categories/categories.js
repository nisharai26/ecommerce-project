import React from 'react';
import './Categories.css';
import ProductCard from '../common/product-card/Product-card';
import {useState, useEffect} from 'react';

const CategoryPage = (props) => {
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

  const segmentURL = window.location.href.split('/');
  const currentCategory = segmentURL.pop();

  const categoryTitle = currentCategory.charAt(0).toUpperCase() + currentCategory.slice(1);

  const filterCategory = products.filter(function(product) {
      return product.category == `${currentCategory}`;
  });

  return (
    <div class="category-container content">
      <h1>{categoryTitle}</h1>
      <div className ='product-grid'>
              {filterCategory.map((product, index) => {
                  return(
                      <ProductCard product={product}/>
                  )
              })}
      </div>
    </div>
  )
}

export default CategoryPage;