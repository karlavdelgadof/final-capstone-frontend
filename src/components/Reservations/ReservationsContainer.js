import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getReservations } from '../../redux/Reservations/reservations';
import SingleReservation from './SingleReservation';

const ReservationsContainer = () => {
  const reservations = useSelector((state) => state.reservations);
  const dispatch = useDispatch();
  useEffect(() => {
    if (reservations.length === 0) {
      dispatch(getReservations());
    }
  });

  return (
    <>
      <div className="accommodations-cont">
        <h2 id="section-title">Check your reservations</h2>
        <div id="collections">
          {reservations.map((reservation) => (
              <SingleReservation reservation={reservation} key={reservation.id}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReservationsContainer;
