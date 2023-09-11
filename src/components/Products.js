import React, { useState } from 'react';
import Product from './Product';
import './Products.css';

const Products = ({ products, onAddToCart, language }) => {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <div className='products-container'>
      <Product
        product={selectedProduct}
        onSelect={onAddToCart}
        language={language}
      />
      <div className='products-menu'>
        {products.map((product) => (
          <div
            className='product-menu-item'
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} />
            <span>{product.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
