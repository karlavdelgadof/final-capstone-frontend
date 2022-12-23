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
      <div className="h-full acco-bg">
        <div className="relative top-1/4 flex flex-col gap-12 items-center">
          <h1 className="text-lg">Add a new House sit</h1>
          <form className="flex flex-col w-8/12 gap-6" onSubmit={handleSubmit}>
            <input value={description} onInput={(e) => setDescription(e.target.value)} placeholder="Add Details about the place..." type="text" className="h-20 p-4 rounded-md" />
            <input value={address} onInput={(e) => setAddress(e.target.value)} placeholder="Address" type="text" className="h-10 p-4 rounded-md" />
            <div className="flex justify-between">
              <select
                id="form-control"
                onChange={(e) => {
                  setLocation(e.target.value);
                }}
                required
                className="w-3/6 p-2 rounded-md"
              >
                <option value="">Location</option>
                {locations.map((location) => (
                  <option value={location.id} key={location.id}>
                    {location.country}
                    ,
                    {location.city}
                  </option>
                ))}
              </select>
              <button type="submit" onClick={handleSubmit} className="p-4 bg-[#9dbda4] rounded-md">
                Create Accommodation
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AccommodationsForm;
