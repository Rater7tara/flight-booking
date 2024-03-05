import React, { useState, useEffect } from 'react';
import './Banner.css';
import transfer from '../../assets/transfer.png';
import BookFlightAdapter from '../BookFlight/BookFlightAdapter';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BookHotelAdapter from '../BookHotelForm/BookHotelAdapter';
import NavBar from '../Shared/NavBar/NavBar';


const Banner = () => {

    const [selectedTab, setSelectedTab] = useState('flight');
    const [flightData, setFlightData] = useState([]);
    const [flightDropdown, setFlightDropdown] = useState([]);
    const [departure, setDeparture] = useState({});
    const [arrival, setArrival] = useState({});
    const [hotel, setHotel] = useState([]);
    const [city, setCity] = useState("");


    // console.log(flightData);

    // flight data fetch
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlightDropdown(data))
            .catch(error => console.error(error))
    }, [])



    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const departureDate = form.departureDate.value;

        console.log(departureDate);
        console.log(typeof departureDate);

        fetch(`https://flight-server.vercel.app/flights/${departureDate + departure.value + arrival.value}`)
            .then(res => res.json())
            .then(data => setFlightData(data.best_flights))
            .catch(error => console.error(error));
    }


    const handleHotelSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const checkInDate = form.checkInDate.value;
        const checkOutDate = form.checkOutDate.value;
        const city = form.city.value;

        setCity(city);
        console.log(checkInDate, checkOutDate, city)
        fetch(`https://flight-server.vercel.app/hotels/${checkInDate + checkOutDate + city}`)
            .then(res => res.json())
            .then(data => setHotel(data.properties))
            .catch(error => console.error(error));
    }


    // Handler function to update selected option when dropdown value changes
    const handleDropdownChangeDep = (option) => {
        setDeparture(option);
    };
    const handleDropdownChangeDest = (option) => {
        setArrival(option);
    };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };





    return (
        <div className='banner-main'>
            <NavBar></NavBar>
            <div className="text-center pt-16 pb-6">
                <button
                    className={`flex-1 text-lg font-semibold py-2 px-4 focus:outline-none border-b-4 border-transparent ${selectedTab === 'flight' ? 'text-white bg-indigo-600 border-yellow-400' : 'text-white'}`}
                    onClick={() => handleTabChange('flight')}
                >
                    Flight Booking
                </button>

                <button
                    className={`flex-1 text-lg font-semibold py-2 px-4 focus:outline-none border-b-4 border-transparent ${selectedTab === 'hotel' ? 'text-white bg-indigo-600 border-yellow-400' : 'text-white'}`}
                    onClick={() => handleTabChange('hotel')}
                >
                    Hotel Booking
                </button>
            </div>

            {selectedTab === 'flight' && (
                <form onSubmit={handleSubmit} className='px-5'>

                    {/* departure and destination row */}
                    <div className='flex bg-white rounded-lg w-2/3 m-auto justify-center'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3'>
                            <label htmlFor="departureCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-5'>From:</label>

                            <Dropdown options={flightDropdown} placeholder="Departure" onChange={(option) => handleDropdownChangeDep(option)} required className="departure-form w-50  mt-2 mb-2 text-lg mx-5 ps-1" />

                        </div>

                        <img className='transfer m-auto' src={transfer} alt="" />

                        <div className='flex flex-col bg-white rounded-lg w-2/3'>
                            <label htmlFor="arrivalCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-5'>To:</label>
                            <Dropdown options={flightDropdown} placeholder="Destination" onChange={(option) => handleDropdownChangeDest(option)} required className="departure-form w-50  mt-2 mb-2 text-lg mx-5 ps-1" />
                        </div>
                    </div>

                    {/* departure and return date row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center mt-5'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="departureDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Departure Date:</label>
                            <input type="date" name='departureDate' id="departureDate" required className="w-50 mb-2 text-lg mx-5 ps-1" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="returnDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Return Date:</label>
                            <input type="date" id="returnDate" required className="w-50 text-lg mx-5 ps-1" />
                        </div>

                    </div>

                    {/* number of adults and children row */}
                    <div className='flex rounded-lg w-1/2 m-auto justify-center mt-5 mb-2'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="numAdults" className='text-sm rounded-lg short-text pt-1 mx-5 text-gray-400'>Number of Adults:</label>
                            <input name="numAdults" type="number" id="numAdults" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="numChildren" className='text-sm rounded-lg short-text pt-1 mx-5 text-gray-400'>Number of Children:</label>
                            <input name="numChildren" type="number" id="numChildren" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>
                    </div>
                    <div className="mt-2 search-div">
                        <button type='submit' className="btn btn-warning search-btn text-white font-bold hover:bg-yellow-600">Search</button>
                    </div>

                </form>
            )}

            {selectedTab === 'hotel' && (
                <form onSubmit={handleHotelSubmit} className='px-5'>

                    {/* check in date and check out row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="checkInDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Check-In Date:</label>
                            <input type="date" id="checkInDate" name="checkInDate" required className="w-50 mb-2 text-lg mx-5 ps-1" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="checkOutDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Check-Out Date:</label>
                            <input type="date" id="checkOutDate" name='checkOutDate' required className="w-50 text-lg mx-5 ps-1" />
                        </div>

                    </div>

                    {/* city and numbers of rooms row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center mt-4'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="departureCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-2'>City:</label>

                            <input type="text" id="departureCity" name='city' placeholder='City name'
                                required className="w-50  mt-2 mb-2 text-lg mx-2 ps-1" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="numRoom" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-2'>Number of Rooms:</label>
                            <input type="number" id="numRoom" placeholder='Enter number' className=" w-50  mt-2 mb-2 text-lg mx-2 ps-1" />
                        </div>
                    </div>

                    {/* number of adults and children row */}

                    <div className='flex rounded-lg w-1/2 m-auto justify-center mt-5 mb-2'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="numAdults" className='text-sm rounded-lg short-text pt-1 mx-2 text-gray-400'>Number of Adults:</label>
                            <input type="number" id="numAdults" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="numChildren" className='text-sm rounded-lg short-text pt-1 mx-2 text-gray-400'>Number of Children:</label>
                            <input type="number" id="numChildren" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>

                    </div>
                    <div className="mt-2 search-div">
                        <button type='submit' className="btn btn-warning search-btn text-white font-bold hover:bg-yellow-600">Search</button>
                    </div>
                    {/* end of section */}

                </form>

            )}

            {selectedTab === 'hotel' && (
                <form onSubmit={handleHotelSubmit} className='px-5'>
                    {/* Check-in date and check-out row */}
                    {/* Your form elements for hotel booking */}
                </form>
            )}

            {selectedTab === 'flight' && (
                <div>
                    {flightData?.map(item => (
                        <BookFlightAdapter
                            key={item.id}
                            item={item}
                        ></BookFlightAdapter>
                    ))}
                </div>
            )}

            {selectedTab === 'hotel' && (
                <div className='hotel-card-main grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 p-4 hotel-bg'>
                    {hotel?.map(item => (
                        <BookHotelAdapter
                            key={item.id}
                            item={item}
                            city={city}
                        ></BookHotelAdapter>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Banner;