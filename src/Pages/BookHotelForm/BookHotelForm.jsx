import React from 'react';
import './BookHotelForm.css';
import logo from '../../assets/plane-ticket.png';
import plane from '../../assets/logo.png';

const BookHotelForm = () => {




    return (
        <div className="pt-24 p-10 md:flex justify-center m-auto">
<div className="card bookcard bg-base-100 shadow-xl px-4 py-5 m-auto">
  <div className="flex booking-div">
    <div className='logo-div border-e-2'>
        <img className='logoBook' src={logo} alt="" />
    </div>
    <div className='flex time-div border-e-2 m-auto'>
        <div className='time'>
            <h1 className='font-semibold text-3xl'>11.30</h1>
            <h3 className='text-md text-gray-400'>City Name</h3>
        </div>
        <div className="flex flex-col w-50 my-auto">
            <div className='m-auto mb-2'><h3>flight num</h3></div>
        <div className="divider divider-warning text-gray-400 ">-----------------<img className='plane-logo' src={plane} alt="" />-----------------</div>
        <div className='m-auto mt-2'><h3>flight time </h3></div>
        </div>

        <div className='time'>
            <h1 className='font-semibold text-3xl'>11.30</h1>
            <h3 className='text-md text-gray-400'>City Name</h3>
        </div>
    </div>
    <div className="book-end-div flex justify-around m-auto">
        <div>
            <h5 className='text-gray-400 text-sm'>Basic fare</h5>
            <h1 className='font-bold text-4xl text-blue-800'>$250</h1>
        </div>
      <button className="btn btn-warning btn-lg"> Select
      </button>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default BookHotelForm;