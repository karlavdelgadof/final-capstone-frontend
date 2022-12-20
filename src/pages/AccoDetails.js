import React from 'react';
import { useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import dogIcon from '../multimedia/pet_types/dog.png';


const AccoDetails = () => {
  const location = useLocation();

  const accommodation = location?.state?.accommodation;

  return (
    <div>
      <h2>{accommodation.description.slice(0, 20)}</h2>
      <p>{accommodation.location.country},{accommodation.location.city}</p>
      <div>
        <span>{accommodation.pets.length}</span>
        <img src={dogIcon}/>
      </div>
      <div>
        <Carousel>
        {accommodation.photos.map((photo, i) => (
          <div>
            <img src={photo} />
            <p className="legend">Legend {i}</p>
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
        {accommodation.pets.map((pet) => (
          <div>
            <h4>{pet.name}</h4>
            <span>{pet.size}</span>
            <Carousel>
              {pet.photos.map((photo) => (
                <div>
                  <img src={photo} />
                  <p className="legend">pet.information</p>
                </div>
              ))}
            </Carousel>
          </div>
        ))}
      </div>
      <button>Reserve</button>
    </div>

  );
};

export default AccoDetails;
