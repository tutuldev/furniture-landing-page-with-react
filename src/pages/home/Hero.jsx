import React from 'react'
import bannerImg from "../../assets/banner.png";
import { FaSearch } from 'react-icons/fa';
import TooltipButton from './../../components/TooltipButton';
const Hero = () => {
    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage:`url(${bannerImg})`}}>
            <div className='md:pt-44 pt-24 text-center px-2 space-y-8 md:w-1/2 mx-auto'>
                <h1 className='text-4xl lg:text-6xl  font-medium lg:leading-tight  leading-snug'>Make your interior more
                minimalistic & modern</h1>
                <p className='text-2xl font-normal lg:w-1/2 mx-auto'>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* search  */}
                <div className='relative inline-block z-30'> 
                <input type="text" placeholder='Search furniture' className='w-full md:w-80 px-6 py-2 bg-white/25 rounded-full border border-gray-300 focus:outline-none' />
                <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>
                    <FaSearch/>
                </div>
                </div>
            </div>
            {/* bottom blur effect  */}
            <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'/>

            {/* hover button for display tooltip  */}
            
            <div className='hidden xl:block absolute bottom-40 left-24'>
            <TooltipButton position="bottom"/>
            </div>
            <div className='hidden xl:block absolute bottom-52 left-96'>
            <TooltipButton position="bottom"/>
            </div>
            <div className='hidden xl:block absolute bottom-24 right-[820px]'>
            <TooltipButton position="bottom"/>
            </div>
            <div className='hidden xl:block absolute bottom-12 right-16'>
            <TooltipButton position="bottom"/>
            </div>
        </section>
    );
};

export default Hero;