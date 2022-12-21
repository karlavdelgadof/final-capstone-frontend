import React from 'react';
import { useLocation } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import dogIcon from '../multimedia/pet_types/dog.png';
import { Link } from 'react-router-dom';

const AccoDetails = () => {
  const location = useLocation();

  const accommodation = location?.state?.accommodation;

  return (
    <div>
      <h2>{accommodation.description.slice(0, 20)}</h2>
      <p>
        {accommodation.location.country}
        ,
        {accommodation.location.city}
      </p>
      <div>
        <span>{accommodation.user.pets.length}</span>
        <img src={dogIcon} alt="" />
      </div>
      <div>
        <Carousel>
          {accommodation.photos.map((photo, i) => (
            <div key={photo}>
              <img src={photo} alt="" />
              <p className="legend">
                Legend
                {i}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
      <div>
        <h3>Description</h3>
        <p>{accommodation.description}</p>
      </div>
      <div>
        <h3>Address</h3>
        <p>{accommodation.address}</p>
      </div>
      <div>
        <h3>PawPals</h3>
        {accommodation.user.pets.map((pet) => (
          <div key={pet.id}>
            <h4>{pet.name}</h4>
            <span>{pet.size}</span>
            <Carousel>
              {pet.photos.map((photo) => (
                <div key={photo}>
                  <img src={photo} alt="" />
                  <p className="legend">pet.information</p>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
      <Link to="/reserve" state={{ accommodation }}>
        Reserve
      </Link>
    </div>

  );
};

export default AccoDetails;
