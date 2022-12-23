import React from 'react';
import PropTypes from 'prop-types';
import bellIcon from '../../multimedia/reservation.png';

const SingleReservation = (props) => {
  const { reservation } = props;
  return (
    <div className="p-6 flex gap-6 rounded-lg reservation-item w-[45%]">
      <div>
        <img src={bellIcon} alt="" />
      </div>
      <div className="flex flex-col">
        <h3>{reservation.accommodation.slice(0, 30)}</h3>
        <div className="flex gap-6">
          <span>{reservation.start_date}</span>
          <span>{reservation.end_date}</span>
        </div>
      </div>
    </div>
  );
};
SingleReservation.propTypes = {
  reservation: PropTypes.shape({
    accommodation: PropTypes.string,
    start_date: PropTypes.string,
    end_date: PropTypes.string,
  }).isRequired,
};
export default SingleReservation;
