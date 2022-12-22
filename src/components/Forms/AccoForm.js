// import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { locations } from '../../redux/Accomodations/accommodations';

function AccommodationsForm() {
  // const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);
  const reserve = () => {
    // cosole.log('Not yet implemented, add in reservations');
  };

  function handleSubmit(event) {
    event.preventDefault();
    dispatch(reserve({
      id: Math.floor(Math.random() * 10) + 1,
      description,
      address,
      location,
      rented: false,
    }));
    setDescription(null);
    setAddress(null);
    setLocation(null);

    // send the form data to the server to reserve the appointment
  }

  return (
    <>
      <div>
        <h1>Add a new House sit</h1>
        <form onSubmit={handleSubmit}>
          <input value={description} onInput={(e) => setDescription(e.target.value)} placeholder="Add Details about the place..." type="text" />
          <input value={address} onInput={(e) => setAddress(e.target.value)} placeholder="Address" type="text" />
          <select
            id="form-control"
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            required
          >
            <option value="">Location</option>
            {locations.map((location) => (
              <option value={location.id} key={location.id}>
                {[location.country, location.city]}
              </option>
            ))}
          </select>
          <br />
          <button type="submit" onClick={handleSubmit}>
            Create Accommodation
          </button>
        </form>
      </div>
    </>
  );
}

export default AccommodationsForm;
