import React, { useState } from 'react';
import './SignUp1.css';
import './CityAddress.css';
import './Confirmation.css';
import { useNavigate } from 'react-router-dom';
// import BloodGroup from './BloodGroup';
// import CityAddress from './CityAddress';
// import Row from 'react-bootstrap/Row';

const Donar = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [gender, setGender] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [organ, setOrgan] = useState('');

  const [age, setAge] = useState('');
  const navigate= useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    window.alert(`Thank you for submitting, ${firstName}!`);
    // do something with the user data
  };
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const collectData = async () => {
    console.warn(
      firstName,
      lastName,
      email,
      password,
      age,
      gender,
      bloodGroup,
      city,
      address,
      isChecked,
      organ
    );
    let result = await fetch('http://127.0.0.1:4000/Donar', {
      method: 'post',
      body: JSON.stringify({
        firstName,
        lastName,
        email,
        password,
        age,
        gender,
        bloodGroup,
        city,
        address,
        isChecked,
        organ
      }),
      headers: { 'Content-Type': 'application/json' },
    });
    result = await result.json();
    console.warn(result);
    localStorage.setItem('items', JSON.stringify(result));
    if (result) {
        navigate('/DonarLogin');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin} className='signup-form'>
        <label htmlFor='firstName'>First Name:</label>
        <input
          type='text'
          id='firstName'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor='lastName'>Last Name:</label>
        <input
          type='text'
          id='lastName'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor='age'>Age:</label>
        <input
          type='age'
          id='age'
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <label> Choose Your Gender</label>
        <div className='radio-button'>
          <label htmlFor='gender'>
            <input
              type='radio'
              name='gender'
              value='Male'
              checked={gender === 'Male'}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type='radio'
              name='gender'
              value='Female'
              checked={gender === 'Female'}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>
        </div>
        <div>
          <label>Choose your blood group:</label>
          <br />
          <div className='checkbox-container'>
            <label>
              <input
                type='checkbox'
                value='A+'
                checked={bloodGroup === 'A+'}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
              A+
            </label>

            <label>
              <input
                type='checkbox'
                value='A-'
                checked={bloodGroup === 'A-'}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
              A-
            </label>
            <label>
              <input
                type='checkbox'
                value='B+'
                checked={bloodGroup === 'B+'}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
              B+
            </label>
            <label>
              <input
                type='checkbox'
                value='B-'
                checked={bloodGroup === 'B-'}
                onChange={(e) => setBloodGroup(e.target.value)}
              />
              B-
            </label>
          </div>
        </div>
        {/* 
        <div>
          <BloodGroup />
        </div> */}
        <div>
          <label>Select Organ want to donate</label>
          <br />
          <div className='checkbox-container'>
            <label>
              <input
                type='checkbox'
                value='kidney'
                checked={organ === 'kidney'}
                onChange={(e) => setOrgan(e.target.value)}
              />
              kidney
            </label>
            <label>
              <input
                type='checkbox'
                value='Heart'
                checked={organ === 'Heart'}
                onChange={(e) => setOrgan(e.target.value)}
              />
              Heart
            </label>
            <label>
              <input
                type='checkbox'
                value='Liver'
                checked={organ === 'Liver'}
                onChange={(e) => setOrgan(e.target.value)}
              />
              Liver
            </label>
            <label>
              <input
                type='checkbox'
                value='Eye'
                checked={organ === 'Eye'}
                onChange={(e) => setOrgan(e.target.value)}
              />
              Eye
            </label>
            <label>
              <input
                type='checkbox'
                value='Lungs'
                checked={organ === 'Lungs'}
                onChange={(e) => setOrgan(e.target.value)}
              />
              Lungs
            </label>
          </div>
        </div>

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

        {/* <div>
          <CityAddress />
        </div> */}

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
        <div className='checkbox-container'>
          <label className='checkbox-label'>
            <input
              type='checkbox'
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <span className='checkmark'></span>I agree to donate my organs
          </label>
        </div>

        <button type='submit' className='signup-button' onClick={collectData}>
          Signup
        </button>
      </form>
    </div>
  );
};

export default Donar;
