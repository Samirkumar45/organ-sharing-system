import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox,
} from 'mdb-react-ui-kit';

// import HospitalSignUp from './HospitalSignUp';

function HospitalLogin() {
  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();
  const navigate = useNavigate();
  const handleLogin = async () => {
    window.alert(`Thank you for Login`);
    console.warn(email, password);
    let result = await fetch('http://localhost:4000/HospitalLogin', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    result = await result.json();

    if (result.Name) {
      localStorage.setItem('items', JSON.stringify(result));
      console.warn(result);
      navigate('/Abouts');
    } else {
      alert('error');
    }
  };
  return (
    <MDBContainer fluid className='p-3 my-5 h-custom'>
      <MDBRow>
        <MDBCol col='10' md='6'>
          <img
            src='https://img.freepik.com/free-vector/people-walking-sitting-hospital-building-city-clinic-glass-exterior-flat-vector-illustration-medical-help-emergency-architecture-healthcare-concept_74855-10130.jpg?w=2000'
            class='img-fluid'
            alt='Sample image'
          />
        </MDBCol>

        <MDBCol col='4' md='6'>
          <MDBInput
            wrapperClass='mb-4'
            label='Email address'
            id='formControlLg'
            type='email'
            size='lg'
            onChange={(e) => setEmail(e.target.value)}
          />
          <MDBInput
            wrapperClass='mb-4'
            label='Password'
            id='formControlLg'
            type='password'
            size='lg'
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className='d-flex justify-content-between mb-4'>
            <MDBCheckbox
              name='flexCheck'
              value=''
              id='flexCheckDefault'
              label='Remember me'
            />
            <a href='!#'>Forgot password?</a>
          </div>

          <div className='text-center text-md-start mt-4 pt-2'>
            <MDBBtn className='mb-0 px-5' size='lg' onClick={handleLogin}>
              Login
            </MDBBtn>
            <p className='small fw-bold mt-2 pt-1 mb-2'>
              Don't have an account?{' '}
              <Link to='/HospitalSignUp' className='link-danger'>
                Register
              </Link>
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default HospitalLogin;
