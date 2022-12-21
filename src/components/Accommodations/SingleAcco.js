import React from 'react';
import dogIcon from '../../multimedia/pet_types/dog.png';
// import PropTypes from 'prop-types';

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
        <span>{accommodation.user.pets.length}</span>
        <img src={dogIcon} alt="" />
      </div>
    </div>
  );
};

// SingleCollection.propTypes = {
//   accomodation: PropTypes.shape({
//     location: PropTypes.number,
//     something: PropTypes.string,
//     symbol: PropTypes.string,
//   }).isRequired,
// };

export default SingleAccommodation;
