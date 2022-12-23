import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import dogIcon from '../multimedia/pet_types/dog.png';

const AccoDetails = () => {
  const location = useLocation();

  const accommodation = location?.state?.accommodation;

  return (
    <div className="flex flex-col items-center pt-6 px-8">
      <h2 className="text-start">{accommodation.description.slice(0, 20)}</h2>
      <div className="flex gap-6">
          <Carousel showThumbs={false} showStatus={false} className="aspect-square w-[50%] h-full">
            {accommodation.photos.map((photo) => (
              <div key={photo}>
                <img src={photo} alt="" />
              </div>
            ))}
          </Carousel>
        <div className="flex flex-col w-[50%]">
          <p>
            {accommodation.location.country}
            ,
            {accommodation.location.city}
          </p>
            <div>
              <span>{accommodation.pets.length}</span>
              <img src={dogIcon} alt="" />
            </div>

            <div>
              <h3>Description</h3>
              <p>{accommodation.description}</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>{accommodation.address}</p>
            </div>
        </div>
      </div>
      <div>
        <h3>PawPals</h3>
        {accommodation.pets.map((pet) => (
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
