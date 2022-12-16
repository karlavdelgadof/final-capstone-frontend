import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './Footernav';

const Navbar = () => {
  // const location = useLocation();

  return (
    <nav className="navbar flex flex-col justify-around h-screen loat-left w-1/4">
      <div className="brand text-center">
        <div id="app-logo" />
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
      </ul>

      <Footer />
    </nav>
  );
};

export default Navbar;
