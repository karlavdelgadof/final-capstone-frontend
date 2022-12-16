import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <>
    <Navbar />
    <div className="App float-right w-3/4">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
    </>
  );
}

export default App;
