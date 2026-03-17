import React from 'react'
import { assets } from '../assets/assets'
import { toast } from 'react-toastify'
import { decorate } from 'react-toastify/addons/use-notification-center'

const Footer = () => {
  return (
    <div className='pt-10 px-4 md:px-20 lg:px-32 bg-slate-900 w-full overflow-hidden text-slate-100' id='Footer'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-start'>
            <div className='w-full md:w-1/3 mb-8 md:mb-0'>
                <div className='flex items-center gap-3 mb-3'>
                    <img
                      src={assets.logo}
                      alt='Reliance Associate logo'
                      className='h-10 w-auto object-contain drop-shadow-md'
                    />
                    <span className='text-lg font-semibold tracking-wide'>
                      Reliance Associate
                    </span>
                </div>
                <p className='text-gray-400'>Welcome to your ultimate destination for finding dream properties and investment opportunities. With years of experience in crafting quality homes and spaces, we specialize in delivering excellence.</p>
            </div>
            <div className='w-full md:w-1/5 mb-8 md:mb-0'>
                <h3 className='text-white text-lg font-bold mb-4'>Company</h3>
                <ul className='flex flex-col gap-2 text-gray-400'>
                    <a href='#Header' className='hover:text-emerald-300'>Home</a>
                    <a href='#About' className='hover:text-emerald-300'>About Us</a>
                    <a href='#Contact' className='hover:text-emerald-300'>Contact Us</a>
                    <a href='#Testimonials' className='hover:text-emerald-300'>Testimonials</a>
                </ul>
            </div>
            <div className='w-full md:w-1/3'>
                <h3 className='text-white text-lg font-bold mb-4'>Head Office</h3>
                <p className='text-gray-400 mb-2 text-sm'>
                    6 No. Chungi, Bosan Road,<br/>Multan, Punjab, Pakistan
                </p>
                <p className='text-gray-400 mb-1 text-sm'>
                    <span className='font-semibold'>Cell:</span> +92-313-3330803
                </p>
                <p className='text-gray-400 mb-1 text-sm'>
                    <span className='font-semibold'>Landline:</span> +92-61-6220033
                </p>
                <p className='text-gray-400 mb-1 text-sm'>
                    <span className='font-semibold'>Email:</span> reliancesolutionofficial@gmail.com
                </p>
                <p className='text-gray-400 text-sm'>
                    <span className='font-semibold'>Website:</span> reliancesolution.org
                </p>
            </div>
        </div>
        <div className='border-t border-gray-700 py-4 mt-10 text-center text-gray-500 text-sm'>
           © {new Date().getFullYear()} Reliance Associate. All rights reserved.
        </div>
    </div>
  )
}

export default Footer