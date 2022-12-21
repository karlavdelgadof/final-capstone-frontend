// import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';


function ReserveForm() {
  const dispatch = useDispatch();
  const location = useLocation();
  const accommodation = location?.state?.accommodation;
  const [start, setStart] = useState(null);
  const [end, setEnd] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(start, end);
    dispatch(reserve({
      id: Math.floor(Math.random() * 10) + 1,
      start_date: start,
      end_date: end,
    }));
    setStart(null);
    setEnd(null)
    // send the form data to the server to reserve the appointment

  }

  return (
    <>
    <div style={{ background: `url(${accommodation.photos[0]}) no-repeat`, backgroundSize: '100%' }}>
      <h1>{accommodation.description.slice(0, 30)}</h1>
      <span>{accommodation.location.country}, {accommodation.location.city}</span>
      <form onSubmit={handleSubmit}>
        <LocalizationProvider
        dateAdapter={AdapterLuxon}
        >
          <DatePicker
            label="Check-in"
            value={start}
            onChange={(newStart) => {
              setStart(newStart);
            }}
            renderInput={(startProps) => <TextField {...startProps} />}
          />
          <Box sx={{ mx: 2 }}> to </Box>
          <DatePicker
            label="Check-out"
            value={end}
            onChange={(newEnd) => {
              setEnd(newEnd);
            }}
            renderInput={(endProps) => <TextField {...endProps} />}
          />
        </LocalizationProvider>
        <br />
        <button type="submit" onClick={handleSubmit}>
            Reserve
        </button>
      </form>
    </div>
    </>
  );
}

export default ReserveForm;
