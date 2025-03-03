import React from 'react';
import expriencesImg from "../../assets/about-background.jpg"
import { FaHome } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <section className='section-container '>
            <div className="my-24 ">
                <h2 className="text-center text-4xl font-bold mb-4 text-primary">Contact Us</h2>
                <p className='text-center text-lg text-secondary dark:text-gray mb-5'>"Need assistance or have any questions? Our dedicated support team is always ready to help with prompt responses and expert guidance. Contact us anytime—we’re committed to ensuring you receive the best service and support!"</p>
                
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center md:gap-20 gap-8 border ">
                <div className="md:w-1/2 mx-auto">
                    <div className="flex space-x-5 cursor-pointer  my-10 ">
                        <div className='flex items-center justify-center h-16 w-16 rounded-full text-4xl bg-gray-200 '>
                        <FaHome />
                        </div>
                      <div className="">
                      <h6 className='text-primary text-3xl '>Address</h6>
                      <p className='text-lg text-secondary hover:text-primary transition-colors duration-100 ease-in-out dark:text-gray mt-2'>Bashundhara City Shopping Complex,<br />
                       Basement-2, Shop No. 111112,<br />
                        Panthapath, Dhaka.</p>
                      </div>
                    </div>
                    <div className="flex space-x-5 cursor-pointer  my-10">
                    <div className='flex items-center justify-center h-16 w-16 rounded-full text-4xl bg-gray-200 '>
                         <FaPhone />
                        </div>
                      <div className="">
                      <h6 className='text-primary text-3xl '>Phone</h6>
                      <p className='text-lg text-secondary hover:text-primary transition-colors duration-100 ease-in-out dark:text-gray mt-2'>+88019347393XXX</p>
                      </div>
                    </div>
                    <div className="flex space-x-5 cursor-pointer  my-10">
                    <div className='flex items-center justify-center h-16 w-16 rounded-full text-4xl bg-gray-200 '>
                        <MdEmail />
                        </div>
                      <div className="">
                      <h6 className='text-primary text-3xl '>Email</h6>
                      <p className='text-lg text-secondary hover:text-primary transition-colors duration-100 ease-in-out dark:text-gray mt-2'>example@gmail.com</p>
                      </div>
                    </div>
                </div>
        <div className='md:w-1/2 md:h-[541px]   '>
            <div className="h-full w-full  flex items-center border">
                <form class="w-full  border">
                    <h2 className='text-primary text-4xl pb-8'>Send Message</h2>
                 
                        <input type="text" placeholder='Full Name' className='mb-5 block border-b w-full text-lg placeholder:text-secondary placeholder:text-lg  py-2.5 focus:outline-none focus:border-primary'/>
                        <input type="text" placeholder='Full Name' className='mb-5 block border-b w-full text-lg placeholder:text-secondary placeholder:text-lg  py-2.5 focus:outline-none focus:border-primary'/>
                        <textarea name="" id="" className='mb-5 block border-b w-full text-lg text-secondary  py-2.5 focus:outline-none focus:border-primary'>Type your Message...</textarea>
                 

                    <button type="submit" class="text-gray-400 dark:text-secondary  bg-primary cursor-pointer
                      font-lg rounded-sm text-lg w-full  px-5 py-2.5 mb-24 ">Send</button>
                </form>
            </div>
        </div>
            </div>
    

    </section>
    );
};

export default Contact;