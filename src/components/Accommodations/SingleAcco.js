import React from 'react';
import PropTypes from 'prop-types';
import dogIcon from '../../multimedia/pet_types/dog.png';

const SingleAccommodation = (props) => {
  const { accommodation } = props;
  return (
    <div>
      <div>
        <img src={accommodation.photos[0]} alt="" />
      </div>
      <div>
        <h3>{accommodation.description}</h3>
        <p>
          {accommodation.location.country}
          ,
          {accommodation.location.city}
        </p>
      </div>
      <div>
        <span>{accommodation.pets.length}</span>
        <img src={dogIcon} alt="" />
      </div>
    </div>
  );
};

SingleAccommodation.propTypes = {
  accommodation: PropTypes.shape({
    location: PropTypes.number,
    description: PropTypes.string,
    photos: PropTypes.string,
    pets: PropTypes.string,
    symbol: PropTypes.string,
  }).isRequired,
};
export default SingleAccommodation;
