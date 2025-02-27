import React from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='mt-40 bg-secondary-bg text-black dark:bg-gray-800 dark:text-white pt-2 pb-5'>
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
                {/* logo and details  */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4"><Link to="/">Protici</Link></h2>
                    <p className="md:mr-12">The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
                </div>
                {/* services  */}
                <div className="">
                    <h2 className="text-xl font-semibold mb-4">Services</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className='hover:text-primary'>Email Marketing</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary'>Campaigns</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary'>Branding</Link>
                        </li>
                    </ul>
                </div>
            
                <div className="">
                    <h2 className="text-xl font-semibold mb-4">Furniture</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className='hover:text-primary'>Beds</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary'>Chair</Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary'>All</Link>
                        </li>
                    </ul>
                </div>
            
                <div className="">
                    <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center space-x-2'>
                            <FaFacebookF/><span>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center space-x-2'>
                            <FaTwitter/><span>Twitter</span></Link>
                        </li>
                        <li>
                            <Link to="/" className='hover:text-primary flex items-center space-x-2'>
                            <FaInstagram/> <span>Instagram</span></Link>
                        </li>
                    </ul>
                </div>
            
            </div>
            {/* copyright  */}
           <div className="section-container mt-12 flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 dark:text-white border-t border-gray-300 ">
                <p>Copyright &copy;{new Date().getFullYear()}</p>
                <div className="flex items-center gap-4">
                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </div>
           </div>
        </footer>
    );
};

export default Footer;