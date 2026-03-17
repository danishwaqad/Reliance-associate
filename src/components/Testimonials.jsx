import React, { useState } from 'react'
import { assets, testimonials } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const getVisibleTestimonials = () => {
    // Show up to 3 at a time, wrap around the array
    const visible = [];
    const total = testimonials.length;
    const count = Math.min(3, total);
    for (let i = 0; i < count; i++) {
      visible.push(testimonials[(currentIndex + i) % total]);
    }
    return visible;
  };

  return (
    <motion.div 
    initial={{opacity: 0, x: 100}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true,amount: 0.5}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='Testimonials'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Customer <span className='underline underline-offset-4 decoration-1 under font-light'>Testimonials</span></h1>
        <p className='text-center text-gray-500 mb-8 max-w-80 mx-auto'>
          Where dreams meet reality: Stories of finding home with us
        </p>

        <div className='flex items-center justify-center gap-4 mb-6'>
          <button
            onClick={prevTestimonial}
            className='p-2 w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-emerald-700'
            aria-label='Previous testimonial'
          >
            &lt;
          </button>

          <div className='flex gap-4 md:gap-6 w-full max-w-5xl'>
            {getVisibleTestimonials().map((testimonial, idx) => (
              <div
                key={idx}
                className='flex-1 border shadow-lg shadow-emerald-100 rounded px-4 sm:px-6 py-6 sm:py-8 text-center bg-white'
              >
                <img
                  className='w-16 h-16 sm:w-20 sm:h-20 rounded-full mx-auto mb-4'
                  src={testimonial.image}
                  alt={testimonial.alt}
                />
                <h2 className='text-lg sm:text-xl text-gray-700 font-medium'>{testimonial.name}</h2>
                <p className='text-gray-500 mb-3 text-xs sm:text-sm'>{testimonial.title}</p>
                <div className='flex justify-center gap-1 text-emerald-700 mb-3'>
                  {Array.from({ length: testimonial.rating }, (_, index) => (
                    <img key={index} src={assets.star_icon} className='w-4' alt='rating' />
                  ))}
                </div>
                <p className='text-gray-600 text-xs sm:text-sm md:text-base'>{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className='p-2 w-9 h-9 flex items-center justify-center rounded-md bg-gray-100 hover:bg-gray-200 text-emerald-700'
            aria-label='Next testimonial'
          >
            &gt;
          </button>
        </div>

        <div className='flex justify-center gap-2'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === currentIndex ? 'w-6 bg-emerald-600' : 'w-2.5 bg-gray-300'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
    </motion.div>
  )
}

export default Testimonials