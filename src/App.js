import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import AccoDetails from './pages/AccoDetails';
import ReserveForm from './components/Forms/Reserve';
import MyReservations from './pages/MyReservations';


function App() {
  return (
    <>
      <Navbar />
      <div className="App float-right w-3/4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/accomodation-details" element={<AccoDetails />} />
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/accomodation/new" element={<AccommodationsForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
