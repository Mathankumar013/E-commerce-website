import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './action';
import { AiFillCheckCircle } from "react-icons/ai";
import './Logout.css';

function Logout() {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user?.username);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <section className='logout-container'>
        <section className='logout-box'>
        <AiFillCheckCircle className='custom'/>
          <h1 className='custom-welcome'>Welcome, {username}!</h1>
          <button onClick={handleLogout} className='logout-button'>Logout</button>
        </section>
      </section>  
    </>
  );
}

export default Logout;
