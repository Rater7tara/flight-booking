import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {


    const navOptions =
    <>
      <Link to="/booking" className='rounded-md font-bold text-yellow-400 hover:text-yellow-600 text-center p-3 me-2'>My Bookings</Link>
      <Link to="" className='navlink rounded-md text-yellow-400 hover:text-yellow-600 font-bold  text-center p-3 me-2'>Verification</Link>
      <Link to="" className='navlink rounded-md text-yellow-400 hover:text-yellow-600 font-bold  text-center p-3 me-2'>Sign Up</Link>
      <Link to="" className='navlink rounded-md text-yellow-400 hover:text-yellow-600 font-bold  text-center p-3 me-2'>Login</Link>
      <Link to="" className='navlink rounded-md text-yellow-400 hover:text-yellow-600 font-bold text-center p-3 me-2'>Help</Link>
    </>


    return (
        <div className="navbar bg-base-navbar max-w-screen-2xl  text-white ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navOptions}
      </ul>
    </div>
    <a href='/' className="btn btn-ghost text-2xl text-yellow-500">CozyInn</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOptions}
    </ul>
  </div>

</div>
    );
};

export default NavBar;