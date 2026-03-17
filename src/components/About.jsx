import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div 
    initial={{opacity: 0, x: 200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true, amount: 0.5}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:pd-32 w-full overflow-hidden' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
        <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
        <div className='flex flex-col md:flex-row items-center md:items-start lg:gap-24 md:gap-20'>
            <img src={assets.brand_image} alt='brand-image' className='w-full max-w-lg'/>
            <div className='flex flex-col items-center md:items-start mt-8 text-gray-600'>
                <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                    <div>
                        <p className='text-4xl md:text-5xl font-semibold text-purple-700'>10+</p>
                        <p className='lg:text-lg'>Years of Excellence</p>
                    </div>
                    <div>
                        <p className='text-4xl md:text-5xl font-semibold text-purple-700'>12+</p>
                        <p className='lg:text-lg'>Projects Completed</p>
                    </div>
                    <div>
                        <p className='text-4xl md:text-5xl font-semibold text-purple-700'>20+</p>
                        <p className='lg:text-lg'>Mn. Sq. Ft Delivered</p>
                    </div>
                    <div>
                        <p className='text-4xl md:text-5xl font-semibold text-purple-700'>25+</p>
                        <p className='lg:text-lg'>Ongoing Projects</p>
                    </div>
                </div>
                <p className='my-8 max-w-lg'>we bring your dream properties to life. Whether you're looking to buy, sell, or invest, 
                our portfolio showcases the finest real estate opportunities tailored to your needs. Your dream home awaits!</p>
                <button className='bg-purple-600 text-white px-8 py-2 rounded-md'>Learn More</button>
            </div>
        </div>
    </motion.div>
  )
}

export default About