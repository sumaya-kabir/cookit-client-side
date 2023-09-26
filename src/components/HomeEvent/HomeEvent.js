import React from 'react';
import './HomeEvent.css';

const HomeEvent = () => {
    return (
            <div className='booking d-flex justify-content-end mt-5 mx-auto me-auto'>
                            <div>
                                <div className='circle'></div>
                                <div className='square'></div>
                                <div className='circle'></div>
                            </div>
                            <div className='w-75 bg-color text-dark text-center p-5'>
                            <h2 className='fw-bold  mt-3'>Book a Private Event</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste incidunt voluptatum molestias praesentium aspernatur, necessitatibus modi velit alias ad rerum, excepturi sunt dolore dolor ipsum. Aliquam nesciunt adipisci fugit delectus!</p>
                            <button className='btn btn-dark'>Sign Up Your Group</button>
                            </div>
                    </div>
    );
};

export default HomeEvent;