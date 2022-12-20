import React from 'react';
import dogIcon from '../multimedia/pet_types/dog.png';
// import PropTypes from 'prop-types';

const SingleAccommodation = (props) => {
  const { accomodation } = props;
  return (
    <div>
      <div>
        <img src={accomodation.photo[0]}/>
      </div>
      <div>
        <h3>{accomodation.description}</h3>
        <p>{accomodation.location.country},{accomodation.location.city}</p>
      </div>
      <div>
        <span>{accomodation.pets.length}</span>
        <img src={dogIcon}/>
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

