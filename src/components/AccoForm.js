// import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function AccommodationsForm() {
  const locations = useSelector((state) => state.locations);
  const dispatch = useDispatch();
  const [description, setDescription] = useState(null);
  const [address, setAddress] = useState(null);
  const [location, setLocation] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(description, address, location);
    dispatch(reserve({
      id: Math.floor(Math.random() * 10) + 1,
      description: description,
      address: address,
      location: location,
      rented: false
    }));
    setDescription(null);
    setAddress(null)
    setLocation(null)

    // send the form data to the server to reserve the appointment

  }

  return (
    <>

      <h1>Add a new Accommodation</h1>
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
              <option value={location.id}>{[location.country, location.city]}</option>
            ))}
          </select>
        <br />
        <button type="submit" onClick={handleSubmit}>
            Create Accommodation
        </button>
      </form>
    </>
  );
}

export default AccommodationsForm;
