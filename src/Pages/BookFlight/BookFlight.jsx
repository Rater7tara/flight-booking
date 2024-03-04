import React from 'react';
import logo from '../../assets/plane-ticket.png';
import plane from '../../assets/logo.png';

const BookFlight = ({ airline_logo, price, total_duration, subItem }) => {
    const { departure_airport, arrival_airport, airplane, airline, travel_class } = subItem;



    return (
        <div className="p-5 md:flex justify-center m-auto">
            <div className="card bookcard bg-base-100 shadow-xl px-4 py-5 m-auto">
                <div className="flex booking-div">
                    <div className='logo-div border-e-2'>
                        <img className='logoBook' src={airline_logo} alt="" />
                        <h1 className='text-center text-gray-400'>{airline}</h1>
                    </div>
                    <div className='flex justify-around time-div border-e-2 m-auto'>
                        <div className='time'>
                            <h1 className='font-semibold text-3xl text-center'>{departure_airport.time}</h1>
                            <h3 className='text-md text-gray-400'>{departure_airport.name}</h3>
                        </div>
                        <div className="flex flex-col w-50 my-auto">
                            <div className='m-auto mb-2'><h3>{airplane}</h3></div>
                            <div className="divider divider-warning text-gray-400 "><img className='plane-logo' src={plane} alt="" /></div>
                            <h1 className='text-center text-gray-400'>{travel_class}</h1>
                        </div>

                        <div className='time'>
                            <h1 className='font-semibold text-3xl text-center'>{arrival_airport.time.slice(11, 16)}</h1>
                            <h3 className='text-md text-gray-400'>{arrival_airport.name}</h3>
                        </div>
                    </div>
                    <div className="book-end-div flex justify-around m-auto">
                        <div>
                            <h5 className='text-gray-400 text-sm'>Basic fare</h5>
                            <h1 className='font-bold text-4xl text-blue-800'>${price}</h1>
                        </div>
                        <button className="btn btn-warning btn-lg"> Select
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BookFlight;