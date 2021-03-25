import React from 'react'
import './Categories.css'
import ProductCard from '../common/product-card/Product-card'

const CategoryPage = (props) => {
    return(
        <div className="category-container content">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        
    )
}

export default CategoryPage;

 /*const Laptops = () {=> {
    ///render() 
        return(
          <div className="Laptops">
            {/* <div className="Laptops-title">
              <h4>Desktops</h4>
            </div>
            <div className="items">
              {PRODUCTS.map((product) => {
                if (product.category === "Laptops") {
                  return(
                    <div className="item">
                      <Link to={`/products/${product.id}`}>
                      <div className="product-img">
                        <img alt={product.name} src={product.img} />
                      </div>
                      <div className="product-details">
                        <h1 id="product-name">{product.name}</h1>
                        <h4 id="product-description">{product.description}</h4>
                      </div>
                      </Link>
                      <div className="price-add">
                        <h5 id="product-price">${product.price}</h5>
                        <Icon small onClick={() => this.addProduct(product)} id="add-icon">add_shopping_cart</Icon>
                      </div>
                    </div>
                  )
                }
              })}
            </div>
          </div>
        );
      } */