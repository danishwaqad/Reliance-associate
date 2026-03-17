import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);

    //Handle the scrolling when mobile menu bar is open
    // useEffect( () => {
    //     if(displayMobileMenu){
    //         document.body.style.overflow = 'hidden'
    //     }else{
    //         document.body.style.overflow = 'auto'
    //     }
    //     return () => {
    //          document.body.style.overflow = 'auto'
    //     }
    // },[displayMobileMenu])

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-28 bg-transparent">
        <img src={assets.logo} alt="logo"></img>
        <ul className="hidden md:flex gap-7 text-white">
          <a href="#Header" className="cursor-pointer hover:text-purple-300">
            Home
          </a>
          <a href="#About" className="cursor-pointer hover:text-purple-300">
            About
          </a>
          <a href="#Projects" className="cursor-pointer hover:text-purple-300">
            Projects
          </a>
          <a
            href="#Testimonials"
            className="cursor-pointer hover:text-purple-300"
          >
            Testimonials
          </a>
        </ul>
        <button className="hidden md:block bg-purple-600 px-8 py-2 rounded-full text-white">
          Sign Up
        </button>
        <img
          src={assets.menu_icon}
          onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
          className="md:hidden w-7 cursor-pointer"
          alt="menu-items"
        />
      </div>
      {/* Mobile Menu */}
      {displayMobileMenu && (
        <div
          className={`md:hidden fixed w-3/5 right-0 top-0 bottom-0 bg-gradient-to-b from-purple-900/60 to-black/60 backdrop-blur-sm shadow-lg transition-all`}
        >
          <div className="flex justify-end p-6">
            <img
              src={assets.close_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="close"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            />
          </div>
          <ul className="flex flex-col items-center gap-3 mt-5 py-6 px-5 text-lg font-semibold text-purple-900">
            <a
              href="#Header"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
              className="px-5 py-3 rounded-full text-white hover:bg-purple-200 hover:text-purple-900 transition-all"
            >
              Home
            </a>
            <a
              href="#About"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
              className="px-5 py-3 rounded-full text-white hover:bg-purple-200 hover:text-purple-900 transition-all"
            >
              About
            </a>
            <a
              href="#Projects"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
              className="px-5 py-3 rounded-full text-white hover:bg-purple-200 hover:text-purple-900 transition-all"
            >
              Projects
            </a>
            <a
              href="#Testimonials"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
              className="px-5 py-3 rounded-full text-white hover:bg-purple-200 hover:text-purple-900 transition-all"
            >
              Testimonials
            </a>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar