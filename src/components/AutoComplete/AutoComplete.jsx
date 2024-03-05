import React, { useState } from 'react';

const Autocomplete = ({country}) => {

  const [inputValue, setInputValue] = useState('');
  const [departure, setDeparture] = useState({});
  const [suggestions, setSuggestions] = useState([]);

  const countries = [
    "Italy", "Japan", "New Zealand", "France", "Australia", "USA", "South Africa", "Brazil", "India", "Canada", "Spain", "Thailand", "Egypt", "Greece", "Netherlands", "Morocco", "Argentina", "Turkey", "Switzerland", "Iceland", "Nairobi", "Abuja", "Hanoi", "Kiev", "Brasília", "Cape Town", "Mumbai", "Bangkok", "Berlin", "San Francisco", "Los Angeles", "Chicago", "Miami", "Houston", "Las Vegas", "Orlando", "Seattle", "Boston", "Washington D.C.", "Atlanta", "Dallas", "Denver", "Phoenix", "Philadelphia", "Detroit", "San Diego", "Vancouver", "Montreal", "Calgary", "Edmonton", "Ottawa", "Mexico City", "Monterrey", "Guadalajara", "Santiago", "Bogotá", "Lima", "Caracas", "San Juan", "Panama City", "San Jose", "Havana", "Buenos Aires", "Rio de Janeiro", "São Paulo", "Montevideo", "Asunción", "La Paz", "New York", "London", "Paris", "Beijing", "Frankfurt", "Tokyo", "Toronto", "Sydney", "São Paulo", "New Delhi", "Moscow", "Rome", "Seoul", "Madrid", "Mexico City", "Jakarta", "Amsterdam", "Istanbul", "Riyadh", "Zurich", "Stockholm", "Buenos Aires", "Oslo", "Vienna", "Dubai", "Brussels", "Warsaw", "Johannesburg", "Singapore", "Copenhagen", "Doha", "Helsinki", "Cairo", "Athens", "Lisbon", "Kuala Lumpur", "Hong Kong", "Prague", "Auckland", "Dublin", "Budapest", "Santiago", "Manila", "Islamabad", "Bucharest", "Baku", "Lagos", "Dhaka", "Colombo"
  ];

  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputValue(value);

    const filteredSuggestions = countries.filter(country =>
      country.toLowerCase().includes(value)
    );

    setSuggestions(filteredSuggestions);
  };

  // Handler function to update selected option when dropdown value changes
  const handleDropdownChangeDep = (value) => {
    setDeparture(value);
};

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
  };

  return (
    <div id="autocomplete-container">
      <input
        type="text"
        id="autocomplete-input"
        placeholder="Where to go?"
        className="form-select font-bold text-black shadow-2xl rounded-lg"
        value={inputValue}
        onChange={(value) => handleDropdownChangeDep(value)} required 
      />
      <ul id="suggestions-list">
        {suggestions.map((suggestion, index) => (
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Autocomplete;
