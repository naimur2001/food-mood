import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><Link to='/menu'>Menu</Link></li>
        <li tabIndex={0}>
          <Link to='/about' className="justify-between">
          About Us
            
          </Link>
         
        </li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case lg:flex hidden text-xl">FooDMooD</a>
  </div>
<div>
<a href="" className='lg:hidden btn btn-ghost text-xl '>FooDMooD</a>
</div>

  <div className="navbar-center hidden lg:flex font-semibold text-fuchsia-700 ">
    <ul className="menu menu-horizontal px-1 ">
<li>     <Link to='/menu'>Menu</Link></li>
      <li tabIndex={0}>
      <Link to='/about'>About US</Link>
      </li>
      <li><Link to='/contact'>Contact Us</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-rose-400 border-0">Order</a>
  </div>
</div>
    </div>
  );
};

export default Header;