import React from 'react';
import { NavLink } from 'react-router-dom';
import Logout from './user/Logout';
import Footer from './Footernav';
import pawLogo from '../multimedia/animal-care.png';

const Navbar = () => (
  <nav className="navbar flex flex-col justify-around h-screen float-left w-1/4 pt-4">
    <div className="brand text-center flex flex-col items-center">
      <div className=""><img src={pawLogo} alt="Pawpal app logo" /></div>
      <h1 className="app-name">PawPal</h1>
    </div>

    <ul className="flex flex-col h-3/5 font-semibold">
      <li id="home" className="p-4"><NavLink to="/">House Sits</NavLink></li>
      {/* /reservations/new */}
      <li className="p-4"><NavLink to="">Reserve</NavLink></li>
      {/* /reservations */}
      <li className="p-4"><NavLink to="">My Reservations</NavLink></li>
      {/* /profile */}
      <li className="p-4"><NavLink to="">My Profile</NavLink></li>
      {/* /accommodations/new */}
      <li className="p-4"><NavLink to="">Add a House sit</NavLink></li>
      {/* /accommodations */}
      <li className="p-4"><NavLink to="">Delete a House sit</NavLink></li>
      <li className="p-4">
        <Logout />
      </li>
    </ul>

    <Footer />
  </nav>
);

export default Navbar;
