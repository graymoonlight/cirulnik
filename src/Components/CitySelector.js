import React, { useState } from 'react';

function CitySelector() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const cities = [
    'Москва',
    'Санкт-Петербург',
    'Новосибирск',
    'Екатеринбург',
    'Казань',
    'Калининград'
  ];

  const handleChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    setSelectedCity('');
    setShowSuggestions(value.length > 0);
  };

  const handleSelect = (city) => {
    setSelectedCity(city);
    setSearchTerm(city);
    setShowSuggestions(false);
  };

  const filteredCities = cities.filter(city =>
    city.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{width: '90px', marginTop: '5px'}}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        onClick={() => setShowSuggestions(true)}
        placeholder="Город"
        style={{ width: '90px', padding: '10px', fontSize: '14px', height: '0px', border: 'none', textAlign: 'center'}}
      />
      {showSuggestions && (
        <ul style={{ border: '1px solid #ccc',borderRadius: '10px', padding: '0', listStyle: 'none', marginTop: '0', maxHeight: '150px', overflowY: 'auto', width: '110px', fontSize: '12px', position: 'absolute', zIndex:3}}>
          {filteredCities.map((city, index) => (
            <li
              key={index}
              onClick={() => handleSelect(city)}
              style={{ padding: '10px', cursor: 'pointer', backgroundColor: selectedCity === city ? '#f0f0f0' : '#fff'}}
            >
              {city}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CitySelector;