import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingUpPage from './pages/user/SignupPage';
import LoginPage from './pages/user/LoginPage';
import AccoDetails from './pages/AccoDetails';
import ReserveForm from './components/Forms/Reserve';
import MyReservations from './pages/MyReservations';
import AccommodationsForm from './components/Forms/AccoForm';
import Navbar from './components/Navbar';
import DeleteAcco from './components/Accommodations/DeleteAcco';

function App() {
  const location = useLocation();
  return (
    <>
      { location.pathname.includes('/user') ? '' : <Navbar />}
      <div className="App w-3/4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<MyReservations />} />
          <Route path="/accomodation-details" element={<AccoDetails />} />
          <Route path="/reserve" element={<ReserveForm />} />
          <Route path="/accomodation/new" element={<AccommodationsForm />} />
          <Route path="/accomodation/delete" element={<DeleteAcco />} />
          <Route path="/user">
            <Route path="login" element={LoginPage} />
            <Route path="signup" element={SingUpPage} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
