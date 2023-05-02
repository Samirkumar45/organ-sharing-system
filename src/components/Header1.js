import React from 'react';
import { NavLink } from 'react-router-dom';
// import { btn } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Header1() {
  return (
    <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <h1>
          <strong className='brand-name'>Orgon Donation</strong>
        </h1>

        <h2 className='my-3'>Save Lives</h2>
        <div className='mt-3'>
          {/* <NavLink to='/Signin1' className='btn-get-started'>
            Login as Patient
          </NavLink> */}
          <ButtonGroup size='lg' className='mb-2'>
            <Button>
              <NavLink to='/Signin1' className='btngo'>
                Login as Patient
              </NavLink>
            </Button>
            <Button>
            <NavLink to='/DonarLogin' className='btngo'>
                Login as Donar
              </NavLink>
            </Button>
            <Button><NavLink to='/HospitalLogin' className='btngo'>
                Login as HospitalLogin
              </NavLink></Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='col-lg-6 order-1 order-lg-2 header-img'>
        <img
          src='https://unos.org/wp-content/uploads/header-transplant-510x288@2x.png'
          className='img-fluid animated'
          alt='home img'
        />
        
      </div>
    </div>
  );
}

export default Header1;
