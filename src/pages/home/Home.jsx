import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Product from '../shop/Product';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Product headline="Best Selling Product"/>

        </>
    );
};

export default Home;