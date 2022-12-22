import React from 'react';
import PropTypes from 'prop-types';
import dogIcon from '../../multimedia/pet_types/dog.png';
import pinIcon from '../../multimedia/pin.png';

const SingleAccommodation = (props) => {
  const { accommodation } = props;
  return (
    <div className="flex flex-col gap-4 pb-4 border-4 border-slate-50 border-b-[#e395b7] rounded-lg relative">
      <div>
        <img src={accommodation.photos[0]} alt="" className="w-full h-52" />
      </div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541" className="rounded-full absolute h-12 bottom-[37%] left-3/4" />
      <div className="px-4 text-start flex flex-col gap-4 mt-5">
        <h3>{`${accommodation.description.slice(0, 30)}...`}</h3>
        <div className="flex gap-2 text-sm text-gray-500">
          <img src={pinIcon} className="h-4" />
          <p>
            {accommodation.location.country}
            ,
            {' '}
            {accommodation.location.city}
          </p>
        </div>
      </div>
      <div className="flex gap-2 text-base px-4">
        <span>{accommodation.pets.length}</span>
        <img src={dogIcon} alt="" className="h-6" />
      </div>
    </div>
  );
};

SingleAccommodation.propTypes = {
  accommodation: PropTypes.shape({
    location: PropTypes.shape({
      country: PropTypes.string,
      city: PropTypes.string,
    }),
    description: PropTypes.string,
    photos: PropTypes.instanceOf(Array).isRequired,
    pets: PropTypes.instanceOf(Array).isRequired,
    symbol: PropTypes.string,
  }).isRequired,
};
export default SingleAccommodation;
