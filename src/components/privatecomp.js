import React from 'react'
import {Navigate,Outlet} from 'react-router-dom';
const PrivateComp = () => {
    const auth=localStorage.getItem('items');

  return  auth?<Outlet/>:<Navigate to="/signUp1"/>
}

export default PrivateComp