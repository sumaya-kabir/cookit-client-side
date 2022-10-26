import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    return (
        <div className='d-flex mb-3'>
            <img className='w-25 me-2' src={course.picture} alt="" />
            <p><Link className='text-decoration-none text-dark'>{course.title}</Link></p>
        </div>
    );
};

export default SideBar;