import React from 'react';
import './BookHotelAdapter.css';
import { FaStar, FaClock, FaUser } from "react-icons/fa";

const BookHotelAdapter = ({ item, city }) => {
    const { name, hotel_class, rate_per_night, reviews, description, check_in_time, check_out_time,images

    } = item;

    console.log(item.images[0].thumbnail);
    let cityName='';
if(city!=""){cityName=''}
    return (
        <div className=''>
            <div className="pt-8 p-2 md:flex justify-center m-auto">
                <div className="card hotel-card border-blue-200 border-e-2   border-s-2 border-b-2 shadow-xl rounded-lg  w-96   m-auto">
                    <img className='hotel-img' src={images[0].thumbnail} alt="" />
                    <div className="card-body rounded-lg">
                        <h2 className="card-title title text-2xl">
                            {name}


                        </h2>
                        
                        <p className='text-gray-400 descrip'>{description}</p>
                        <div className='rating-div'>
                            <div className="flex items-center">
                                <span className=''><FaUser className='me-1'></FaUser></span>
                                <span className="font-bold"> Reviews {reviews}</span>
                            </div>

                            


                        </div>
                        <div className='flex justify-between'>
                        <div className="flex items-center">
                                <span className='text-gray-500'><FaClock className='me-1'></FaClock> </span>
                                <span className='text-gray-500'> Check_in: {check_in_time}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <span className='text-gray-500'><FaClock className='me-1'></FaClock> </span>
                                <span className='text-gray-500'>Check_out: {check_out_time}
                                </span>
                            </div>
                        </div>
                        <div className="mt-4 flex-col">
                            <div className='flex justify-between w-100'>
                                <div>
                                    <h1 className='text-gray-500'>Starting From</h1>
                                </div>
                                <div className="font-bold text-xl">{rate_per_night?.lowest}</div>
                            </div>

                            <div className='card-actions mt-4 justify-center'>
                                <button className='btn btn-warning m-auto'>Select</button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default BookHotelAdapter;