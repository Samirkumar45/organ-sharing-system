import React, { useState } from 'react';
import './SignUp1.css';
import BloodGroup from './BloodGroup';
import CityAddress from './CityAddress';
// import Row from 'react-bootstrap/Row';

const HospitalSignUp = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [age, setAge] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // do something with the user data
  };

  return (
    <div>
      <form onSubmit={handleSignup} className='signup-form'>
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
            <input type='radio' name='gender' value='Male' />
            Male
          </label>

          <label>
            <input type='radio' name='gender' value='Female' />
            Female
          </label>
        </div>

        <div>
          <BloodGroup />
        </div>
        <div>
          <CityAddress />
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

        <button type='submit' className='signup-button'>
          Signup
        </button>
      </form>
    </div>
  );
};

export default HospitalSignUp;
