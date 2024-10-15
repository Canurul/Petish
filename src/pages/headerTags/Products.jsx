import React from 'react';
import { products } from '../../assets/productData';

const Products = () => {
  return (
    <div className="max-w-7xl mx-auto py-12">
      <h1 className="text-4xl font-bold text-center mb-12">Ürünler</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product) => (
          <div 
            key={product.id} 
            className="border border-gray-300 rounded-lg p-4 flex flex-col items-center bg-white shadow-lg"
          >
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-2xl font-semibold text-center mb-2">{product.name}</h3>
            <p className="text-gray-600 text-center">{product.context}</p>
          </div>
        ))}
      </div>
      <br></br>
    </div>
  );
};

export default Products;