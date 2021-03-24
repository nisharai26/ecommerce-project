import React from 'react';
import {Link} from 'react-router-dom';
import './Product-card.css';

let productImages = [

]

const ProductCard = (props) => {
    return(
        <Link>
            <div className="product-card">
                <div className = "product-info">
                    <img src="https://brain-images-ssl.cdn.dixons.com/4/0/10216304/u_10216304.jpg" alt="Macbook Pro 13.3 (2020)"/>
                    <div className="info-container">
                        <h3>APPLE MacBook Pro 13.3" (2020) - M1, 256 GB SSD, Space Grey</h3>
                        <p>£1152.00</p>
                    </div>
                </div>
                <div className="expanded-background-container">
                    <div class="expand-background">
                        <ul>
                            <li>macOS 11.0 Big Sur</li>
                            <li>Apple M1 chip</li>
                            <li>RAM: 8 GB / Storage: 256 GB SSD</li>
                            <li>Retina display</li>
                            <li>Battery life: Up to 20 hours</li>
                        </ul>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductCard;