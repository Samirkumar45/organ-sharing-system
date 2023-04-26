import React, { useState } from 'react';
import './CityAddress.css'; // import CSS file for styling

function CityAddress() {
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');

  // function to handle address change event
  function handleAddressChange(e) {
    setAddress(e.target.value);
  }

  // function to handle city change event
  function handleCityChange(e) {
    setCity(e.target.value);
  }

  return (
    <form>
      <div className='form-group'>
        <label htmlFor='address'>Address:</label>
        <input
          type='text'
          id='address'
          name='address'
          value={address}
          onChange={handleAddressChange}
          required
        />
      </div>
      <div className='form-group'>
        <label htmlFor='city'>City:</label>
        <input
          type='text'
          id='city'
          name='city'
          value={city}
          onChange={handleCityChange}
          required
        />
      </div>
    </form>
  );
}

export default CityAddress;
