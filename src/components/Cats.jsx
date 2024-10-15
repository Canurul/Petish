import React from 'react';
import catImage1 from '../assets/catImages/kedi1.png';
import catImage2 from '../assets/catImages/kedi2.png';
import catImage3 from '../assets/catImages/kedi4.png';

const Cats = () => {
  return (
    <div className="m-20">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col md:flex-row items-center">
          <img
            src={catImage1}
            alt="Cat 1"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 bg-[#72BF78]"
          />
          <p className="md:ml-8 mt-4 md:mt-0 text-lg">
            This is cat number one. It's a fluffy and curious kitty.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src={catImage2}
            alt="Cat 2"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 bg-[#72BF78]"
          />
          <p className="md:ml-8 mt-4 md:mt-0 text-lg">
            This is cat number two. It's playful and loves to nap.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          <img
            src={catImage3}
            alt="Cat 3"
            className="w-48 h-48 md:w-60 md:h-60 rounded-full object-cover border-4 bg-[#72BF78]"
          />
          <p className="md:ml-8 mt-4 md:mt-0 text-lg">
            This is cat number three. It's adventurous and full of energy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cats;