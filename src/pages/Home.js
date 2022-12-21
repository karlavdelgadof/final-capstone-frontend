import React from 'react';
import { Navigate } from 'react-router-dom';
import { userIsLogged } from '../redux/user/userSlice';
import AccommodationsContainer from '../components/Accommodations/Accomodations';
import '../CSS/Home.css';

const Home = () => {
  if (!userIsLogged()) {
    return <Navigate to="/user/login" />;
  }
  return (
    <main>
      <div>
        <AccommodationsContainer className="flex flex-wrap" />
      </div>
    </main>
  );
};

export default Home;
