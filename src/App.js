import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  return (
    <>
      <Navbar />
      <div className="App float-right w-3/4">
        <Routes>
          <Route path="/" element={<User currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
