import React from 'react';
import Counter from './Counter';
import { BsCalendar2Week } from "react-icons/bs";
import { MdOndemandVideo } from "react-icons/md";
import { FaRegListAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const HomeCounter = () => {
    return (
        <div className="numbers d-none d-sm-flex">
        <Counter number={205} title="In Person Classes" icon={<BsCalendar2Week className='fs-1'/>} /> 
        <Counter number={52} title="Online Classes" icon={<MdOndemandVideo className='fs-1'/>}/>
        <Counter number={68} title="Dishes To Choose From" icon={<FaRegListAlt className='fs-1'/>} />
        <Counter number={568} title="Students"  icon={<FaUsers className='fs-1'/>} />
      </div>
    );
};

export default HomeCounter;