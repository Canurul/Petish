import React from 'react';
import imgFare from '../assets/images/fare3.jpg';

const AboutCatnip = () => {
  return (
    <div 
      className="relative flex items-center justify-between max-w-7xl mx-auto"
      style={{ paddingTop: '4rem' }} 
    >
      
      <div className="w-1/2 pr-8 flex flex-col items-center"> 
        <h1 className="text-5xl font-bold mb-8"> 
          Catnip Hakkında
        </h1>
        <div className="text-left">
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p className="mt-8">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mt-8">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </div>
      </div>

      
      <div className="w-1/2 flex justify-end pl-8"> 
        <img 
          src={imgFare} 
          alt="Fare" 
          className="w-full max-w-md h-auto border-4" 
          style={{ borderColor: '#68996c' }}
        />
      </div>
    </div>
  );
};

export default AboutCatnip;







