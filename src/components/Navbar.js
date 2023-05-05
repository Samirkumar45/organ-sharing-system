import React from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const auth = localStorage.getItem('items');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/');
  };
  return (
    <div>
      {/* <img alt="logo"
          className="logo"
          src="./Logo.jpeg"></img> */}
      <h3 className='logo'>Organ Donation</h3>
      {auth ? (
        <nav>
          {/* <Navbar.Brand href='#'>Organ Donation</Navbar.Brand> */}

          {/* <NavLink to='/Header1'>Home</NavLink> */}
          <NavLink to='/Abouts'>About us</NavLink>
          <NavLink to='/list'>Hospitals</NavLink>
          <NavLink to='/Contact'>Contact</NavLink>
          {/* <NavLink to='/list'>Donations</NavLink> */}
          <NavLink to='/' onClick={logout}>
            Welcome,{JSON.parse(auth).firstName} Logout{' '}
          </NavLink>
        </nav>
      ) : (
        <nav className='nav-right'>
          <NavLink to='/Signin1'>Login</NavLink>
          <NavLink to='/DonarLogin'>DonarLogin</NavLink>
          <NavLink to='/HospitalLogin'>HospitalLogin</NavLink>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
