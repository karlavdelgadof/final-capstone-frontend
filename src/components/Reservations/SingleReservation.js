import React from 'react';
// import PropTypes from 'prop-types';
import bellIcon from '../../multimedia/reservation.png';

const SingleReservation = (props) => {
  const { reservation } = props;
  return (
    <div>
      <div>
        <img src={bellIcon} alt="" />
      </div>
      <div>
        <h3>{reservation.accommodation.slice(0, 30)}</h3>
        <span>{reservation.start_date}</span>
        <span>{reservation.end_date}</span>
      </div>
    </div>
  );
};

export default SingleReservation;