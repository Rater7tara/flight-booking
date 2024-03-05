import React, { useState, useEffect } from 'react';
import Autocomplete from '../../components/AutoComplete/AutoComplete';
import './BannerForm.css';
import transfer from '../../assets/transfer.png';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import BookHotelAdapter from '../BookHotelForm/BookHotelAdapter';
import BookFlightAdapter from '../BookFlight/BookFlightAdapter';
import { BsAirplane } from "react-icons/bs";
import { FaHotel } from "react-icons/fa";
import NavBar from '../Shared/NavBar/NavBar';
import Loading from '../../components/Loading/Loading';

const BannerForm = () => {
    const [formData, setFormData] = useState({
        destination: '',
        activity: '',
        date: '',
        guests: 0,
    });

    const [countries, setCountries] = useState([]);
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [selectedTab, setSelectedTab] = useState('flight');
    const [flightData, setFlightData] = useState([]);
    const [flightDropdown, setFlightDropdown] = useState([]);
    const [departure, setDeparture] = useState({});
    const [arrival, setArrival] = useState({});
    const [hotel, setHotel] = useState([]);
    const [city, setCity] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetch('data.json')
            .then((response) => response.json())
            .then((data) => {
                setCountries(data);
            })
            .catch((error) => console.error('Error fetching countries:', error));
    }, []);

    const handleKeyDown = (event) => {
        if (event.key === 'Escape') {
            setShowSuggestions(false);
        }
    };

    const handleBlur = () => {
        setShowSuggestions(false);
    };

    const handleChange = (event) => {
        const inputValue = event.target.value.toLowerCase();
        const name = event.target.name;
        const value = event.target.type === 'number' ? parseInt(event.target.value, 10) : event.target.value;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        // Filter suggestions based on the input value
        const filteredSuggestions = countries.filter((country) =>
            country.label.toLowerCase().includes(inputValue)
        );

        setSuggestions(filteredSuggestions);
        setShowSuggestions(true);
    };

    const handleSuggestionClick = (suggestion) => {
        setFormData((prevData) => ({
            ...prevData,
            destination: suggestion.label,
        }));
        setShowSuggestions(false);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        console.log('Form submitted:', formData);

        // Example: Use form data for searching
        const searchCriteria = {
            destination: formData.destination,
            activity: formData.activity,
            date: formData.date,
            guests: formData.guests,
        };

        // Add your actual search functionality using searchCriteria
        console.log('Search for:', searchCriteria);
    };

    // flight data fetch
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFlightDropdown(data))
            .catch(error => console.error(error))
    }, [])



    const handleSubmit = event => {
        event.preventDefault();
        setIsLoading(true);
        const form = event.target;
        const departureDate = form.departureDate.value;

        console.log(departureDate);
        console.log(typeof departureDate);

        fetch(`https://flight-server.vercel.app/flights/${departureDate + departure.value + arrival.value}`)
            .then(res => res.json())
            .then(data => {
                setFlightData(data.best_flights);
                setIsLoading(false); // Set loading state to false
            })
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
            .then(data => {
                setHotel(data.properties);
                setIsLoading(false); // Set loading state to false
            })
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

    if (isLoading) {
        return <Loading></Loading> ;
    }

    return (
        <div>
            <div className='banner-img-div'>
                <div className="text-center tab-btn pb-6">
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
                    <form onSubmit={handleSubmit} className="rounded-lg hero-content m-auto">
                        <div className="search-form lg:bg-white" >

                            {/* departure and destination row */}
                            <div className="form-group inline rounded-lg indicator des-dep">
                                <label htmlFor="destination" className="form-label ms-2">
                                    FROM
                                </label>
                                <Dropdown options={flightDropdown} placeholder="Departure" onChange={(option) => handleDropdownChangeDep(option)} required className="departure-form w-50  mt-2 mb-2 text-lg mx-5 ps-1" />
                                <span className="indicator-item indicator-middle"><img className='transfer m-auto rounded-full lg:border-gray-200 lg:border-2' src={transfer} alt="" /></span>
                                
                            </div>
                            
                            <div className="form-group inline rounded-lg lg:me-4 des-dep">
                                <label htmlFor="destination" className="form-label ms-2">
                                    TO
                                </label>
                                <Dropdown options={flightDropdown} placeholder="Destination" onChange={(option) => handleDropdownChangeDest(option)} required className="departure-form w-50  mt-2 mb-2 text-lg mx-5 ps-1" />

                            </div>
                            {/* departure and return date row */}
                            <div className="form-group inline rounded-lg">
                                <label htmlFor="departureDate" className="form-label ms-2">
                                    Departure Date:
                                </label>
                                <input
                                    type="date"
                                    id="departureDate"
                                    name="departureDate"
                                    placeholder="Date"
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"
                                    required
                                />
                            </div>
                            <div className="form-group inline lg:me-4 rounded-lg">
                                <label htmlFor="returnDate" className="form-label ms-2">
                                    Return Date:
                                </label>
                                <input
                                    type="date"
                                    id="returnDate"
                                    name="returnDate"
                                    placeholder="Date"
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"
                                    required
                                />
                            </div>
                            {/* number of adults and children row */}
                            <div className="form-group inline rounded-lg ">
                                <label htmlFor="numAdults" className="form-label text-center">
                                    Adults:
                                </label>
                                <input
                                    type="number"
                                    id="numAdults"
                                    name="numAdults"
                                    placeholder='Enter Number'
                                    min="0"
                                    required
                                    className="form-input text-gray-400 shadow-2xl rounded-lg num-input text-center"
                                />
                            </div>
                            <div className="form-group inline rounded-lg type-form lg:me-2">
                                <label htmlFor="numChildren" className="form-label text-center">
                                    Children:
                                </label>
                                <input
                                    type="number"
                                    id="numChildren"
                                    name="numChildren"
                                    placeholder='Number of Children'
                                    min="0"
                                    defaultValue={0}
                                    className="form-input text-gray-400 shadow-2xl rounded-lg num-input text-center"
                                />
                            </div>

                            <div className='search-btn lg:ms-4'>
                            <button type="submit" className="btn btn-lg search-button   font-bold shadow-2xl">Search</button>
                            {isLoading && <span className="loading loading-bars loading-lg"></span>}
                            </div>
                        </div>



                    </form>
                )}

                {selectedTab === 'hotel' && (
                    <form onSubmit={handleHotelSubmit} className="rounded-lg hero-content m-auto">
                        <div className="search-form lg:bg-white" >

                            {/* check in date and check out row*/}
                            <div className="form-group inline rounded-lg">
                                <label htmlFor="departureDate" className="form-label ms-2">
                                    Check-In Date:
                                </label>
                                <input
                                    type="date"
                                    id="checkInDate"
                                    name="checkInDate"
                                    placeholder="Date"
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"
                                    required
                                />
                            </div>

                            <div className="form-group inline rounded-lg lg:me-4">
                                <label htmlFor="departureDate" className="form-label ms-2">
                                    Check-Out Date:
                                </label>
                                <input
                                    type="date"
                                    id="checkOutDate"
                                    name="checkOutDate"
                                    placeholder="Date"
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"
                                    required
                                />
                            </div>
                            {/* city and numbers of rooms row  */}
                            <div className="form-group inline rounded-lg">
                                <label htmlFor="departureCity" className="form-label ms-2">
                                    City:
                                </label>
                                <input
                                    type="text"
                                    id="departureCity"
                                    name="city"
                                    placeholder="City Name"
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"
                                    required
                                />
                            </div>
                            <div className="form-group inline lg:me-4 rounded-lg">
                                <label htmlFor="returnDate" className="form-label ms-2">
                                    Number of Rooms:
                                </label>
                                <input
                                    type="number"
                                    id="numRoom"
                                    defaultValue={1}
                                    className="form-input text-gray-400 shadow-2xl rounded-lg"

                                />
                            </div>
                            {/* number of adults and children row */}
                            <div className="form-group inline rounded-lg ">
                                <label htmlFor="numAdults" className="form-label text-center">
                                    Adults:
                                </label>
                                <input
                                    type="number"
                                    id="numAdults"
                                    name="numAdults"
                                    placeholder='Enter Number'
                                    min="0"
                                    required
                                    className="form-input text-gray-400 shadow-2xl rounded-lg num-input text-center"
                                />
                            </div>
                            <div className="form-group inline rounded-lg type-form lg:me-2">
                                <label htmlFor="numChildren" className="form-label text-center">
                                    Children:
                                </label>
                                <input
                                    type="number"
                                    id="numChildren"
                                    name="numChildren"
                                    placeholder='Number of Children'
                                    min="0"
                                    defaultValue={0}
                                    className="form-input text-gray-400 shadow-2xl rounded-lg num-input text-center"
                                />
                            </div>

                            <div className='search-btn lg:ms-4'>
                            <button type="submit" className="btn btn-lg search-button   font-bold shadow-2xl">Search</button>
                            {isLoading && <span className="loading loading-bars loading-lg"></span>}
                            </div>
                        </div>
                    </form>
                )}

                {selectedTab === 'hotel' && (
                    <form onSubmit={handleHotelSubmit} className='px-5'>
                        {/* Check-in date and check-out row */}
                        {/* Your form elements for hotel booking */}
                    </form>
                )}


                {selectedTab === 'flight' && (
                    <div className='fly-div bg-slate-100'>
                        {flightData?.map(item => (
                            <BookFlightAdapter
                                key={item.id}
                                item={item}
                            ></BookFlightAdapter>
                        ))}
                    </div>
                )}

                {selectedTab === 'hotel' && (
                    <div className='hotel-card-main bg-slate-100 grid md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10 p-4 hotel-bg'>
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




        </div>
    );
};

export default BannerForm;