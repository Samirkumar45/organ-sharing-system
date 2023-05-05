import React from 'react';
import { NavLink } from 'react-router-dom';
// import { btn } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

function Header1() {
  return (
    <div className='row'>
      <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <br />
        <br />
        <h1>
          <strong className='brand-name'>Orgon Donation</strong>
        </h1>

        <h3 className='my-3'>"One Decision Can Change Many Lives - Be an Organ Donor"</h3>
        <em className='my-3'>Organ donation is the process of donating a person's organs or tissues for transplantation into another person who is in need of them. Organ donation can occur after the donor has died or in some cases, while the donor is still alive.</em>
        <div className='mt-3'>
          <br />
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
            <Button>
              <NavLink to='/HospitalLogin' className='btngo'>
                Login as HospitalLogin
              </NavLink>
            </Button>
          </ButtonGroup>
        </div>
      </div>
      <div className='col-lg-6 order-1 order-lg-2 header-img'>
        <br />
        <br />
        <br />
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
