import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import { decorate } from 'react-toastify/addons/use-notification-center'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-gray-900 w-full overflow-hidden' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <img src={assets.logo} alt='logo'/>
                <p className='text-gray-400 mt-4'>Welcome to your ultimate destination for finding dream properties and investment opportunities. With years of experience in crafting quality homes and spaces, we specialize in delivering excellence.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' className='hover:text-purple-200'>Home</a>
                    <a href='#About' className='hover:text-purple-200'>About Us</a>
                    <a href='#Contact' className='hover:text-purple-200'>Contact Us</a>
                    <a href='#Testimonials' className='hover:text-purple-200'>Testimonials</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Subscribe to our newsletter</h3>
                <p className='text-gray-400 mb-4 max-w-80'>The latest news, articles and resources sent to your inbox weekly.</p>
                <div className='flex gap-2'>
                    <input type='email' placeholder='Enter your email' className='p-2 rounded bg-gray-800 text-gray-400 border border-gray-700 focus:outline-none w-full md:w-auto'/>
                    <button onClick={() => toast.info("Have a Nice Day!" )} className='py-2 px-4 rounded bg-purple-700 text-white'>Subscribe</button>
                </div>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500'>
           React-Tailwind Practice Site - 2024
        </div>
    </div>
  )
}

export default Footer