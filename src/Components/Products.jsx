import React from 'react';
import Product from '../product';

const getImagePath = (productId) => {
  return `resources/images/${productId}.jpg`;
};

const Products = () => {
  return (
    <div>
      <section className="trending-product" id="trending">
        <div className="center-text">
          <h2>Our Trending <span>Sneakers</span></h2>
        </div>

        <div className="products">
          {Product.map((item, index) => (
            <div className="row" key={index}>
              <a href={`product-display?id=${item.s_id}`}>
                <img src={item.imageUrl} alt="" />
              </a>

              <div className="price">
                <h4>{item.name}</h4>
                <p>Rs.{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Products;
