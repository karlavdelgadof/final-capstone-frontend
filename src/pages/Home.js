import React from 'react';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { userIsLogged } from '../redux/user/userSlice';
import '../CSS/Home.css';

const Home = () => {
  if (!userIsLogged()) {
    return <Navigate to="/user/login" />;
  }
  return (
    <div>
      <Navbar />
      <main className="App float-right w-3/4">
        <div>
          Accommodations will go in here
        </div>
      </main>
    </div>
  );
};

export default Home;
