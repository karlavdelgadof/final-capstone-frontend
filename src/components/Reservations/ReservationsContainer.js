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
      <div className="flex flex-col pt-12">
        <h2 className="text-lg">Check your reservations</h2>
        <div className="flex flex-wrap p-8 gap-6 justify-around">
          {reservations.map((reservation) => (
            <SingleReservation reservation={reservation} key={reservation.id} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ReservationsContainer;
