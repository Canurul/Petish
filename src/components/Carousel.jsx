import React, { useState, useEffect, useRef } from 'react';
import { products } from '../assets/productData';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollDirection = useRef(1);
  const itemsPerPage = 4;
  const scrollSpeed = 0.015;
  const requestRef = useRef(null);
  const isHovered = useRef(false);

  const continuousScroll = () => {
    if (!isHovered.current) {
      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + scrollSpeed * scrollDirection.current;
        const maxIndex = (products.length - itemsPerPage) * (100 / itemsPerPage);
        if (newIndex >= maxIndex) {
          scrollDirection.current = -1;
          return maxIndex;
        } else if (newIndex <= 0) {
          scrollDirection.current = 1;
          return 0;
        }
        return newIndex;
      });
    }
    requestRef.current = requestAnimationFrame(continuousScroll);
  };

  const stopAutoScroll = () => {
    isHovered.current = true;
  };

  const startAutoScroll = () => {
    isHovered.current = false;
  };

  useEffect(() => {
    requestRef.current = requestAnimationFrame(continuousScroll);
    return () => cancelAnimationFrame(requestRef.current);
  }, []);

  return (
    <div
      className="product-carousel flex items-center justify-center bg-yellow-100 rounded-lg shadow-md"
      onMouseEnter={stopAutoScroll}
      onMouseLeave={startAutoScroll}
    >
      <div className="overflow-hidden w-full py-8">
        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex}%)`,
            transition: 'none',
          }}
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="w-1/4 p-4 flex-shrink-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="border border-yellow-300 rounded-lg overflow-hidden h-full flex flex-col items-center bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-40 object-contain hover:scale-110 transition-transform duration-300"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h3 className="mt-2 text-lg font-semibold text-center text-yellow-900">{product.name}</h3>
                  <p className="text-sm text-yellow-700 mt-2 flex-grow">{product.text}</p>
                  <button className="mt-4 bg-yellow-400 text-yellow-900 py-2 px-4 rounded-full hover:bg-yellow-500 transition-colors duration-300">
                    View Product
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;











