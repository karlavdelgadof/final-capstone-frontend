import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
// Fetch get accommodations
import { getAccommodations } from '../../redux/Accomodations/accommodations';
import SingleAcco from './SingleAcco';

const AccommodationsContainer = () => {
  const location = useLocation();
  const accommodations = useSelector((state) => state.accommodations);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (accommodations.length === 0) {
      dispatch(getAccommodations());
    }
  });

  const filtered = location.pathname.includes('/accommodations/delete') ? accommodations.filter((accommodation) => accommodation.user.id) : accommodations.filter(
    (accommodation) => !search || new RegExp(search, 'ig').test(accommodation.location.country || accommodation.location.city),
  );

  return (
    <>
      <div className="self-end">
        <input
          type="search"
          value={search}
          placeholder="Type a location"
          className="rounded-[50px] border-2 border-[#bedbe4] p-2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <i><img src={searchIcon} alt="" /></i> */}
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg">Choose your next sitting adventure destination</h2>
        <div className="grid grid-cols-3 gap-8">
          {filtered.map((accommodation) => (
            <Link
              to="accomodation-details"
              state={{ accommodation }}
              className="single-collection"
              key={accommodation.id}
            >
              <SingleAcco accommodation={accommodation} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default AccommodationsContainer;
