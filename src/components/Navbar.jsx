import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isFooterVisible, setIsFooterVisible] = useState(false);

    const navLinks = [
      { label: 'Home', sectionId: 'Header', path: '/' },
      { label: 'About', sectionId: 'About', path: '/about' },
      { label: 'Projects', sectionId: 'Projects', path: '/projects' },
      { label: 'Testimonials', sectionId: 'Testimonials', path: '/testimonials' },
      { label: 'Contact', sectionId: 'Contact', path: '/contact' },
    ];

    const handleNavigate = (sectionId, path) => {
      const section = document.getElementById(sectionId);
      if (!section) return;

      if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
      }
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setDisplayMobileMenu(false);
    };

    useEffect(() => {
      const updateNavbarState = () => setIsScrolled(window.scrollY > 20);
      updateNavbarState();
      window.addEventListener('scroll', updateNavbarState);
      return () => window.removeEventListener('scroll', updateNavbarState);
    }, []);

    useEffect(() => {
      const footer = document.getElementById('Footer');
      if (!footer) return undefined;

      const footerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
          if (entry.isIntersecting) {
            setDisplayMobileMenu(false);
          }
        },
        { threshold: 0.15 }
      );

      footerObserver.observe(footer);
      return () => footerObserver.disconnect();
    }, []);

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
    <div
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isFooterVisible ? 'opacity-0 -translate-y-5 pointer-events-none' : 'opacity-100 translate-y-0'
      }`}
    >
      <div
        className={`container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-28 transition-all duration-300 ${
          isScrolled ? 'bg-slate-950/70 backdrop-blur-md shadow-md shadow-black/20 rounded-b-xl' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-3">
          <img
            src={assets.logo}
            alt="Reliance Associate logo"
            className="h-10 sm:h-12 w-auto object-contain drop-shadow-md"
          />
          <span className="inline-block text-sm sm:text-xl font-semibold tracking-wide text-white drop-shadow-md">
            Reliance Associate
          </span>
        </div>
        <ul className="hidden md:flex gap-7 text-white">
          {navLinks.map(({ label, sectionId, path }) => (
            <li key={sectionId}>
              <button
                type="button"
                onClick={() => handleNavigate(sectionId, path)}
                className="cursor-pointer hover:text-emerald-300"
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
        {/* Auth / Sign up button (disabled – no backend yet)
        <button className="hidden md:block bg-emerald-600 px-8 py-2 rounded-full text-white">
          Sign Up
        </button>
        */}
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
          className={`md:hidden fixed w-3/5 right-0 top-0 bottom-0 bg-gradient-to-b from-emerald-900/70 to-slate-950/80 backdrop-blur-sm shadow-lg transition-all`}
        >
          <div className="flex justify-end p-6">
            <img
              src={assets.close_icon}
              className="w-6 cursor-pointer hover:scale-110 transition-transform"
              alt="close"
              onClick={() => setDisplayMobileMenu(!displayMobileMenu)}
            />
          </div>
          <ul className="flex flex-col items-center gap-3 mt-5 py-6 px-5 text-lg font-semibold text-emerald-50">
            {navLinks.map(({ label, sectionId, path }) => (
              <li key={`mobile-${sectionId}`}>
                <button
                  type="button"
                  onClick={() => handleNavigate(sectionId, path)}
                  className="px-5 py-3 rounded-full text-white hover:bg-emerald-200 hover:text-emerald-900 transition-all"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar