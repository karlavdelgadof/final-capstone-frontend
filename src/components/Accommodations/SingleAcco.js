import React from 'react';
import PropTypes from 'prop-types';
import dogIcon from '../../multimedia/pet_types/dog.png';

const SingleAccommodation = (props) => {
  const { accommodation } = props;
  return (
    <div>
      <div>
        <img src={accommodation.photos[0]} alt="" className="w-full" />
      </div>
      <div>
        <h3>{accommodation.description.slice(0, 30) + "..."}</h3>
        <p>
          {accommodation.location.country}
          ,
          {accommodation.location.city}
        </p>
      </div>
      <div className="flex gap-4 text-base">
        <span>{accommodation.pets.length}</span>
        <img src={dogIcon} alt="" className="h-6"/>
      </div>
    </div>
  );
};

SingleAccommodation.propTypes = {
  accommodation: PropTypes.shape({
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string
    }),
    description: PropTypes.string,
    photos: PropTypes.instanceOf(Array).isRequired,
    pets: PropTypes.instanceOf(Array).isRequired,
    symbol: PropTypes.string,
  }).isRequired,
};
export default SingleAccommodation;
