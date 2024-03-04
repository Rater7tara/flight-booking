import React from 'react';
import BookFlight from './BookFlight';

const BookFlightAdapter = ({ item }) => {

    const { airline_logo, price, total_duration, flights,numAdults, numChildren } = item;


    return (
        <div>

            {flights?.map(subItem => (

                <BookFlight
                    key={subItem.id}
                    subItem={subItem}
                    airline_logo={airline_logo}
                    price={price}
                    total_duration={total_duration}
                    numAdults={numAdults}
                    numChildren={numChildren}


                ></BookFlight>
            ))}
        </div>
    );
};

export default BookFlightAdapter;