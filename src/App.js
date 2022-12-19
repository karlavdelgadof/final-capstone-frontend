import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import User from './components/User';

function App() {
  return (
    <>
      <Navbar />
      <div className="App float-right w-3/4">
        <Routes>
          <Route path="/" element={<User />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
