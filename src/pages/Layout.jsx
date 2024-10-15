import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/logos/Petish_Logo.svg';
import Footer from '../components/Footer';

const Layout = () => {
  const [language, setLanguage] = useState(false);
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLanguage = () => {
    setLanguage(!language);
    setNav(false);
  };

  const closeMenu = () => {
    setNav(false);
  };

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-yellow-400 z-50 shadow-md'>
        <nav className='flex justify-between items-center h-24 px-4 md:h-28 lg:h-32 md:px-8 mx-auto max-w-7xl'>
          <Link to='/' onClick={closeMenu} className="flex items-center">
            <img
              src={logo}
              className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 transition-transform duration-200 hover:scale-105'
              alt='Site Logo'
            />
            <span className="ml-3 text-2xl md:text-3xl font-bold text-yellow-900">Petish</span>
          </Link>
          <div className='md:hidden cursor-pointer' onClick={handleNav}>
            <i className={`fas ${nav ? 'fa-times' : 'fa-bars'} text-2xl text-yellow-900`}></i>
          </div>
          <div className='hidden md:flex md:items-center md:space-x-8 lg:space-x-10'>
            <Link to='/Hakkımızda' className='text-xl lg:text-2xl text-yellow-900 hover:text-yellow-700 transition-colors duration-200 font-medium' onClick={closeMenu}>{!language ? 'Hakkımızda' : 'About Us'}</Link>
            <Link to='/Ürünler' className='text-xl lg:text-2xl text-yellow-900 hover:text-yellow-700 transition-colors duration-200 font-medium' onClick={closeMenu}>{!language ? 'Ürünler' : 'Products'}</Link>
            <Link to='/İletişim' className='text-xl lg:text-2xl text-yellow-900 hover:text-yellow-700 transition-colors duration-200 font-medium' onClick={closeMenu}>{!language ? 'İletişim' : 'Contact Us'}</Link>
            <Link to='/Linkler' className='text-xl lg:text-2xl text-yellow-900 hover:text-yellow-700 transition-colors duration-200 font-medium' onClick={closeMenu}>{!language ? 'Satın Al' : 'Buy Now'}</Link>
            <button className='bg-yellow-500 text-yellow-900 px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors duration-200 font-medium text-xl lg:text-2xl' onClick={handleLanguage}>{!language ? 'EN' : 'TR'}</button>
          </div>
          <div className={`md:hidden fixed top-0 left-0 w-full bg-yellow-400 z-40 transition-transform duration-300 ${nav ? 'translate-y-0' : '-translate-y-full'}`} style={{ height: 'auto', maxHeight: '70vh', overflowY: 'auto' }}>
            <div className="flex justify-end p-4">
              <i className='fas fa-times text-2xl cursor-pointer text-yellow-900' onClick={closeMenu}></i>
            </div>
            <div className='flex flex-col items-center space-y-6 pb-6'>
              <Link to='/Hakkımızda' className='text-2xl text-yellow-900' onClick={closeMenu}>{!language ? 'Hakkımızda' : 'About Us'}</Link>
              <Link to='/Ürünler' className='text-2xl text-yellow-900' onClick={closeMenu}>{!language ? 'Ürünler' : 'Products'}</Link>
              <Link to='/İletişim' className='text-2xl text-yellow-900' onClick={closeMenu}>{!language ? 'İletişim' : 'Contact Us'}</Link>
              <Link to='/Linkler' className='text-2xl text-yellow-900' onClick={closeMenu}>{!language ? 'Satın Al' : 'Buy Now'}</Link>
              <button className='bg-yellow-500 text-yellow-900 px-6 py-3 rounded-full text-2xl' onClick={handleLanguage}>{!language ? 'EN' : 'TR'}</button>
            </div>
          </div>
        </nav>
      </header>

      <main className='pt-24 md:pt-28 lg:pt-32'>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};

export default Layout;




