import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// Fetch get accommodations
import { getAccommodations } from '../../redux/Accomodations/accommodations';
import SingleAcco from './SingleAcco';

const AccommodationsContainer = () => {
  const accommodations = useSelector((state) => state.accommodations);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  useEffect(() => {
    if (accommodations.length === 0) {
      dispatch(getAccommodations());
    }
  });

  const filtered = accommodations.filter(
    (accommodation) => !search || new RegExp(search, 'ig').test(accommodation.location.country || accommodation.location.city),
  );

  return (
    <>
      <div id="search">
        <input
          type="search"
          value={search}
          placeholder="Type a Location"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        {/* <i><img src={searchIcon} alt="" /></i> */}
      </div>
      <div className="accommodations-cont">
        <h2 id="section-title">Choose your next sitting adventure destination</h2>
        <div id="collections">
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
