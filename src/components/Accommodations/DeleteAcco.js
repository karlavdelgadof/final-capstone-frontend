import React from 'react';
import AccommodationsContainer from './Accomodations';

const DeleteAcco = () => {

  return (
    <main>
      <div className="py-8 px-7 flex flex-col gap-4">
        <AccommodationsContainer className="flex flex-wrap" />
      </div>
    </main>
  );
};

export default DeleteAcco;
