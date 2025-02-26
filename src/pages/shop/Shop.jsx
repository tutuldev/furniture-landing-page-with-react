import React from 'react';
import bannerImg from "../../assets/banner.png";
import Product from './Product';

const Shop = () => {
    return (
        <section className='min-h-screen'>
           {/* banner  */}
           <div className='w-full h-[400px] bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage:`url(${bannerImg})`}}>
                <h1 className='text-4xl font-bold  '>Best Selling Product</h1>
           </div>
           <Product headline="What's Your Choice"/>
        </section>
    );
};

export default Shop;