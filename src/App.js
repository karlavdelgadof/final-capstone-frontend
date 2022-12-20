import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingUpPage from './pages/user/SignupPage';
import LoginPage from './pages/user/LoginPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route path="login" element={LoginPage} />
          <Route path="signup" element={SingUpPage} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
