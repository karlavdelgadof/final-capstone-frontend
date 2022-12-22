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
        <div className="py-8 px-7 flex flex-col gap-4">
          <AccommodationsContainer className="flex flex-wrap"/>
        </div>
    </main>
  );
};

export default Home;
