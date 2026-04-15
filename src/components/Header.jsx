import React from 'react'
import Navbar from './Navbar'
import { motion } from 'framer-motion'

const Header = () => {
  const handleNavigate = (sectionId, path) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className='min-h-screen bg-cover bg-center flex items-center w-full overflow-hidden' id='Header' style={
        {backgroundImage: "url('/header_image.jpg')"}
    }>
        <Navbar />
        <motion.div 
        initial={{opacity: 0, y: 100}}
        transition={{duration: 1.5}}
        whileInView={{opacity: 1, y:0}}
        viewport={{once: true}}
        className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white'>
            <h2 className='text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20'>Explore homes that fit your dreams</h2>
            <div className='space-x-6 mt-16'>
                <button type="button" onClick={() => handleNavigate('Projects', '/projects')} className='border border-white hover:text-purple-300 hover:border-purple-300 px-6 sm:px-8 py-3 rounded-md'>Projects</button>
                <button type="button" onClick={() => handleNavigate('Contact', '/contact')} className='border border-purple-600 bg-purple-600 px-6 py-3 sm:px-8 rounded-md'>Contact Us</button>
            </div>
        </motion.div>
    </div>
  )
}

export default Header