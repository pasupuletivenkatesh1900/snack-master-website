import React from 'react';
import home from '../../images/home/home.jpg'
import home2 from '../../images/home/home2.jpg'
import '../../styles/pages/Product.css';
function Product() {
    return (
        <div className="product-container">
            <div className="product">
                <img src={home} alt="Product 1" className="product-image" />
                <div className="product-info">
                    <h2>Product 1</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Price: $XX.XX</p>
                </div>
            </div>
            <div className="product">
                <img src={home2} alt="Product 2" className="product-image" />
                <div className="product-info">
                    <h2>Product 2</h2>
                    <p>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>Price: $XX.XX</p>
                </div>
            </div>
        </div>
    );
}

export default Product;
