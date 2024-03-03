import React, { useState, useEffect } from 'react';
import './Banner.css';
import transfer from '../../assets/transfer.png';



const Banner = () => {

    const [selectedTab, setSelectedTab] = useState('flight');
    const [flight, setFlight] = useState([]);
    const [flightData, setFlightData] = useState([]);
    const [flightDataTemp, setFlightDataTemp] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    const [switchSearch, setSwitchSearch] = useState([]);
    const [sortBy, setSortBy] = useState("");


    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setFlight(data))
        .catch(error => console.error(error))
    }, [])


    useEffect(() => {

        const searchTemp = flightData.filter(value => value.city.toLowerCase().includes(searchValue.toLowerCase()));

        setFlightDataTemp(searchTemp);
        console.log(switchSearch);
        if (searchValue != "" || searchValue != "") {
            setSwitchSearch(flightDataTemp)
        }
        else {
            setSwitchSearch(flightData);
        }

    }, [searchValue, flightData]);

     // Function to handle sorting based on the selected option
     useEffect(() => {
        if (sortBy) {
            // Clone the array to avoid mutating the original array
            const sortedData = [...flightData].sort((a, b) => {
                if (sortBy === 'price') {
                    return a.price.localeCompare(b.price);
                } else if (sortBy === 'rating') {
                    return a.rating.localeCompare(b.rating);
                }
                return 0;
            });
            setLocalData(sortedData);
        }
    }, [sortBy]);



    // const fetchData = async () => {
    //     try {
    //         const response = await fetch('http://localhost:5000/flights');
    //         const data = await response.json();
    //         setData(data);
    //         setFilteredData(data); 
    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    const handleSearch = () => {
        const filtered = data.filter(item =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredData(filtered);
    };




    return (
        <div className='banner-main'>
            <div className="text-center pt-32 pb-6">
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
                <div className='px-5'>

                    {/* departure and destination row */}
                    <div className='flex bg-white rounded-lg w-2/3 m-auto justify-center'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3'>
                            <label htmlFor="departureCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-5'>From:</label>

                            <input type="text" 
                            onChange={(e) => {
                                const value = e.target.value;

                                setSearchValue(value);
                            }}
                            value={searchValue}id="departureCity" placeholder='Departure'
                                required className="w-50  mt-2 mb-2 text-lg mx-5 ps-1" />
                        </div>

                        <img className='transfer m-auto' src={transfer} alt="" />

                        <div className='flex flex-col bg-white rounded-lg w-2/3'>
                            <label htmlFor="arrivalCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-5'>To:</label>
                            <input type="text" id="arrivalCity" placeholder='Destination' className=" w-50  mt-2 mb-2 text-lg mx-5 ps-1" />
                        </div>
                    </div>

                    {/* departure and return date row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center mt-5'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="departureDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Departure Date:</label>
                            <input type="date" id="departureDate" required className="w-50 mb-2 text-lg mx-5 ps-1" />
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
                            <input type="number" id="numAdults" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="numChildren" className='text-sm rounded-lg short-text pt-1 mx-5 text-gray-400'>Number of Children:</label>
                            <input type="number" id="numChildren" required placeholder='Enter number' className="w-50 text-lg m-auto mb-1 rounded-lg mx-2" />
                        </div>

                    </div>
                    <div className="mt-2 search-div">
                <button onClick={handleSearch} className="btn btn-warning search-btn text-white font-bold hover:bg-yellow-600">Search</button>
            </div>

                </div>
            )}

            {selectedTab === 'hotel' && (
                <div className='px-5'>

                    {/* check in date and check out row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="checkInDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Check-In Date:</label>
                            <input type="date" id="checkInDate" required className="w-50 mb-2 text-lg mx-5 ps-1" />
                        </div>

                        <div className='flex flex-col bg-white rounded-lg w-2/3 ms-2'>
                            <label htmlFor="checkOutDate" className='text-sm rounded-lg short-text p-1 mx-5 text-gray-400'>Check-Out Date:</label>
                            <input type="date" id="checkOutDate" required className="w-50 text-lg mx-5 ps-1" />
                        </div>

                    </div>

                    {/* city and numbers of rooms row */}
                    <div className='flex rounded-lg w-2/3 m-auto justify-center mt-4'>
                        <div className='flex flex-col bg-white rounded-lg w-2/3 me-2'>
                            <label htmlFor="departureCity" className='text-gray-400 text-sm rounded-lg short-text p-1 mx-2'>City:</label>

                            <input type="text" id="departureCity" placeholder='City name'
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
                <button onClick={handleSearch} className="btn btn-warning search-btn text-white font-bold hover:bg-yellow-600">Search</button>
            </div>
                    {/* end of section */}

                </div>


            )}




        </div>
    );
};

export default Banner;