import React from 'react';
import expriencesImg from "../../assets/about-background.jpg"
import Button from '../../components/Button';



const About = () => {
    return (
        <section className='section-container my-24 flex flex-col md:flex-row items-center justify-center md:gap-20 gap-8'>
        <div className='md:w-1/2 md:h-[541px]'>
            <img src={expriencesImg} alt="" className='w-full h-full' />
        </div>
        <div className="md:w-1/2 mx-auto">
            <h3 className='uppercase text-lg font-semibold text-primary mb-4'>About Us</h3>
            <h2 className=" text-4xl font-bold mb-4 lg:w-1/2">We are dedicated to delivering excellence in every aspect of our service.</h2>
            <p className="text-secondary dark:text-gray mb-5 lg:w-2/3">Protichi is a trusted name in quality furniture, offering stylish and durable designs for homes and offices. We prioritize craftsmanship, comfort, and sustainability in every piece we create. Our collection ranges from modern to classic styles, catering to diverse tastes and needs. With a commitment to customer satisfaction, we ensure premium materials and exceptional service. Transform your space with our elegant and functional furniture today!</p>
            <Button text="More Info"/>
        </div>

    </section>
    );
};

export default About;