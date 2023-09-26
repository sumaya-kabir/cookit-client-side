import React from 'react';
import Banner from '../../components/Banner/Banner';
import About from '../../components/About/About';
import HomeCourses from '../../components/HomeCourses/HomeCourses';
import CookingPhilo from '../../components/CookingPhilo/CookingPhilo';
import Testimonial from '../../components/Carousel/Carousel';
import OurChefs from '../../components/OurChefs/OurChefs';
import CallToAction from '../../components/CallToAction/CallToAction';


const Home = () => {
    return (
        <div className='w-100 mx-auto'>
            <Banner></Banner>
            <About></About>
            <HomeCourses></HomeCourses>
            <CookingPhilo></CookingPhilo>
            <Testimonial></Testimonial>
            <OurChefs></OurChefs>
            <CallToAction></CallToAction>
        </div>
    );
};

export default Home;