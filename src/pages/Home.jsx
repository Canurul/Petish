import React from 'react';
import { Link } from 'react-router-dom';
import AboutCatnip from '../components/AboutCatnip';
import Carousel from '../components/Carousel';
import Cats from '../components/Cats';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-yellow-50 to-yellow-100 min-h-screen font-sans">
      
      <section className="bg-yellow-300 text-yellow- py-20 px-4 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Catnip Wonderland</h1>
        <p className="text-xl mb-8">Discover the purr-fect toys for your feline friends!</p>
        <Link to="/Ürünler" className="bg-yellow-900 text-yellow-100 py-3 px-8 rounded-full text-lg font-semibold hover:bg-yellow-800 transition duration-300 inline-block">
          Shop Now
        </Link>
      </section>

      
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <AboutCatnip />
      </section>

      
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-900">Featured Products</h2>
          <Carousel />
          <div className="text-center mt-8">
            <Link to="/Ürünler" className="text-yellow-600 font-semibold text-lg hover:text-yellow-700 transition duration-300">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      
      <section className="py-16 px-4 bg-yellow-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-yellow-900">Happy Customers</h2>
          <Cats />
        </div>
      </section>
    </div>
  );
};

export default Home;