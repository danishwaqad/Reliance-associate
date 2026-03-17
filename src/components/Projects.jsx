import React, { useEffect, useState } from 'react'
import { assets, projectData } from '../assets/assets'
import { motion } from 'framer-motion';

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  useEffect(() => {
    const updateCardToShow = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(4); 
      } else {
        setCardsToShow(1); 
      }
    };

    updateCardToShow();
    window.addEventListener('resize', updateCardToShow);
    return () => window.removeEventListener('resize', updateCardToShow);
  }, []);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? projectData.length - 1 : prevIndex - 1
    );
  };

  return (
    <motion.div 
    initial={{opacity: 0, x: -200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true,amount: 0.5}}
    className='container mx-auto py-4 pt-16 px-6 md:px-20 lg:px-24 my-12 w-full overflow-hidden' id='Projects'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        Projects <span className='underline underline-offset-4 decoration-1 font-light'>Completed</span>
      </h1>
      <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
        Crafting Spaces, Building Legacies - Explore Our Portfolio
      </p>
      
      {/* Slider Buttons */}
      <div className='flex justify-end items-center mb-8'>
        <button onClick={prevProject} className='p-2 w-10 bg-gray-200 rounded mr-2' aria-label='Previous Project'>
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button onClick={nextProject} className='p-2 w-10 bg-gray-200 rounded' aria-label='Next Project'>
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Projects Slider Container */}
      <div className='overflow-hidden relative'>
        <div
          className='flex gap-8 transition-transform duration-700 ease-in-out'
          style={{
            transform: `translateX(-${(currentIndex * 100) / cardsToShow}%)`
          }}
        >
          {projectData.concat(projectData).map((project, index) => {
            const isActive = index % projectData.length === currentIndex;

            return (
              <div
                key={index}
                className={`relative flex-shrink-0 w-full sm:w-1/4 transform transition-all duration-700 ease-in-out ${
                  isActive ? 'scale-100 opacity-100' : 'scale-95'
                }`}
              >
                <img className='w-full h-auto mb-14' src={project.image} alt={project.title} />
                <div className='absolute left-0 right-0 bottom-5 flex justify-center'>
                  <div className='inline-block bg-white w-3/4 px-4 py-2 shadow-md shadow-purple-500'>
                    <h2 className='text-xl font-semibold text-gray-800'>{project.title}</h2>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span className='px-1'>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
