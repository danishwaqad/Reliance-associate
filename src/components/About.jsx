import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateIsMobile = () => setIsMobile(window.innerWidth < 768);
    updateIsMobile();
    window.addEventListener('resize', updateIsMobile);
    return () => window.removeEventListener('resize', updateIsMobile);
  }, []);

  return (
    <motion.div 
    initial={isMobile ? {opacity: 1, x: 0} : {opacity: 0, x: 200}}
    transition={{duration: 1.5}}
    whileInView={{opacity: 1, x:0}}
    viewport={{once: true, amount: 0.15}}
    className='flex flex-col items-center justify-center container mx-auto px-6 pt-8 pb-5 md:px-12 md:pt-10 md:pb-6 lg:px-16 w-full overflow-hidden bg-white text-slate-900 rounded-2xl' id='About'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Reliance Associate</span></h1>
        <p className='text-gray-500 max-w-2xl text-center mb-8 text-sm md:text-base'>
          Reliance Associate is a multidisciplinary firm providing real estate, construction, tax, financial and IT‑enabled
          services under one roof, led by a highly qualified leadership team.
        </p>
        <div className='grid lg:grid-cols-2 gap-12 items-stretch w-full'>
          <div className='flex justify-center lg:justify-start h-full'>
            <div className='w-full max-w-md h-full'>
              <img
                src={assets.brand_image}
                alt='brand-image'
                className='w-full h-full object-cover rounded-2xl shadow-lg min-h-[260px]'
              />
            </div>
          </div>
          <div className='flex flex-col gap-6 text-gray-700 text-sm md:text-base h-full'>
            <div className='grid grid-cols-2 gap-4 bg-emerald-50/70 rounded-xl p-4'>
              <div>
                <p className='text-3xl md:text-4xl font-semibold text-emerald-700'>10+</p>
                <p className='text-xs md:text-sm'>Years of Excellence</p>
              </div>
              <div>
                <p className='text-3xl md:text-4xl font-semibold text-emerald-700'>20+</p>
                <p className='text-xs md:text-sm'>Years Team Experience</p>
              </div>
              <div>
                <p className='text-3xl md:text-4xl font-semibold text-emerald-700'>12+</p>
                <p className='text-xs md:text-sm'>Key Projects & Mandates</p>
              </div>
              <div>
                <p className='text-3xl md:text-4xl font-semibold text-emerald-700'>25+</p>
                <p className='text-xs md:text-sm'>Trusted Clients & Partners</p>
              </div>
            </div>

            <div className='grid md:grid-cols-2 gap-6 items-stretch'>
              <div className='bg-white rounded-xl shadow-sm p-4 border border-emerald-50 h-full flex flex-col'>
                <h3 className='text-lg font-semibold text-emerald-700 mb-2'>Leadership</h3>
                <ul className='space-y-1'>
                  <li>
                    <span className='font-semibold'>Mirza Khurram Aftab Baig</span><br/>
                    <span className='text-xs text-gray-500'>Managing Director &amp; CEO – ACCA, Tax &amp; Real Estate Specialist</span>
                  </li>
                  <li>
                    <span className='font-semibold'>Dr. Hussain Roohullah Khurram Gillani</span><br/>
                    <span className='text-xs text-gray-500'>Director Finance – PhD (Developmental Finance)</span>
                  </li>
                  <li>
                    <span className='font-semibold'>Engr. Waqas Ali Rao</span><br/>
                    <span className='text-xs text-gray-500'>Director Operations – Engineering &amp; MBA, Projects &amp; Supply Chain</span>
                  </li>
                </ul>
              </div>
              <div className='bg-white rounded-xl shadow-sm p-4 border border-emerald-50 h-full flex flex-col'>
                <h3 className='text-lg font-semibold text-emerald-700 mb-2'>What We Do</h3>
                <ul className='list-disc list-inside space-y-1'>
                  <li>Real estate &amp; construction advisory</li>
                  <li>Tax, bookkeeping &amp; financial management</li>
                  <li>ERP, IT‑enabled &amp; e‑commerce solutions</li>
                  <li>Brand, events, call center &amp; HR support</li>
                  <li>Space planning for banks &amp; leading brands</li>
                  <li>Investment consultancy for profitable asset classes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default About