import React from 'react'
// import { motion } from 'framer-motion'
import 'boxicons/css/boxicons.min.css'
import Spline from '@splinetool/react-spline'

const Hero = () => {
    return (

        <div className='w-full min-h-screen flex flex-col lg:flex-row
    items-center justify-center'>
            <div className='z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
                <h1 className='text-6xl sm:text-6xl md:text-7xl lg:text-8xl font-montserrat tracking-wider my-8'>
                    Marshall Zhang
                </h1>
                {/* <p className='text-center text-base sm:text-lg tracking-wider text-gray-400 py-9'>
                    This is the about paragraph to talk about yourself
                </p> */}
                <div className='flex lg:flex-row sm:flex-col gap-4 justify-center'>

                    <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r
        from -[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)]
        rounded-full'>
                        <div className='absolute inset-[3px] bg-black rounded-full flex items-center
            justify-center gap-1 hover:invert transition duration-300'>
                            <i class='bx  bx-terminal' ></i> Software Developer
                        </div>

                    </div> 
                    <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r
        from-[#e99b63] to-[#656565]  shadow-[0_0_15px_rgba(255,255,255,0.4)]
        rounded-full'>
                        <div className='absolute inset-[3px] bg-black rounded-full flex items-center
            justify-center gap-1 hover:invert transition duration-300'>
                            <i class='bx  bx-user-check'  ></i>  Teacher
                        </div>

                    </div>
                </div>


                
            </div>
            {/* <Spline scene="https://prod.spline.design/hVuiwmlFxumggILw/scene.splinecode" /> */}
        </div>

    )
}

export default Hero
