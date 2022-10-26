import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({course}) => {
    const {picture, title, id} = course;
    return (
        <div className='d-flex mb-3'>
            <img className='w-25 me-2' src={picture} alt="" />
            <p><Link to={`${id}`} className='text-decoration-none text-dark'>{title}</Link></p>
        </div>
    );
};

export default SideBar;