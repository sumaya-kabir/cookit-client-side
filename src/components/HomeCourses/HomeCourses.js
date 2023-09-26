import React from 'react';
import HomeCounter from '../Counter/HomeCounter';
import Expectation from '../Expectation/Expectation';
import HomeEvent from '../HomeEvent/HomeEvent';

const HomeCourses = () => {
    
    return (
        <div className='responsive p-5 my-3 bg-success text-light'>
            <h2 className=''>Popular Courses</h2>
            <HomeCounter></HomeCounter>
            <Expectation></Expectation>
            <HomeEvent></HomeEvent>
         </div>
    );
};

export default HomeCourses;