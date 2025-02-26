import React from 'react';
import Hero from './Hero';
import WhyChoose from './WhyChoose';
import Product from '../shop/Product';
import Expriences from './Expriences';
import Materials from './Materials';

const Home = () => {
    return (
        <>
            <Hero/>
            <WhyChoose/>
            <Product headline="Best Selling Product"/>
            <Expriences/>
            <Materials/>

        </>
    );
};

export default Home;