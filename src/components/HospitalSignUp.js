import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp1.css';
import './CityAddress.css';
// import BloodGroup from './BloodGroup';
import CityAddress from './CityAddress';
// import Row from 'react-bootstrap/Row';

const HospitalSignUp = () => {
  const [Name, setName] = useState('');
  const [ContactNumber, setContactNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [type, setType]= useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const [website, setWebsite] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    window.alert(`Thank you for submitting, ${Name}!`);
    // do something with the user data
  };
  const collectData = async () => {
    console.warn(Name, ContactNumber,email,password,website,type,address,city);
    let result = await fetch('http://127.0.0.1:4000/HospitalSignUp', {
        method: 'post',
        body: JSON.stringify({Name, ContactNumber,email,password,website,type,address,city }),
        headers: { 'Content-Type': 'application/json' },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem("items", JSON.stringify(result));
    if (result) {
        navigate('/HospitalLogin');
    }
}

  return (
    <div>
      <form onSubmit={handleSignup} className='signup-form'>
        <label htmlFor='Name'> Name:</label>
        <input
          type='text'
          id='Name'
          value={Name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor='ContactNumber'>Contact Number:</label>
        <input
          type='number'
          id='ContactNumber'
          value={ContactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
          required
        />

        <label htmlFor='website'>Website:</label>
        <input
          type='website'
          id='website'
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
          required
        />
        <div>
          <label> Choose Hospital Type</label>
          <div className='Hospitals-button'>
            <label htmlFor='hospital'>
              <input type='radio' name='hospital' value='Government'checked={type==='Government'} onChange={(e) => setType(e.target.value)} />
              Government
            </label>

            <label>
              <input type='radio' name='hospital' value='Private' checked={type==='Private'} onChange={(e) => setType(e.target.value)}/>
              Private
            </label>
          </div>
        </div>

        {/* <div>
          <CityAddress />
        </div> */}

        <div className='form-group'>
          <label htmlFor='address'>Address:</label>
          <input
            type='text'
            id='address'
            name='address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
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
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>

        <label htmlFor='email'>Email:</label>
        <input
          type='email'
          id='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor='password'>Password:</label>
        <input
          type='password'
          id='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type='submit' className='signup-button' onClick={collectData}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default HospitalSignUp;
