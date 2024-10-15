import React from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-yellow-400 text-yellow-900'>
      <div className='max-w-6xl mx-auto py-8 px-4'>
        <div className='flex flex-col md:flex-row justify-between items-center'>
          
          <div className='flex space-x-6 mb-4 md:mb-0'>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-yellow-600 transition-colors duration-200"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-yellow-600 transition-colors duration-200"
            >
              <FaFacebook className="text-3xl" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-yellow-600 transition-colors duration-200"
            >
              <FaInstagram className="text-3xl" />
            </a>
          </div>
          <div className='text-sm md:text-base'>
            &copy; {new Date().getFullYear()} Petish. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
