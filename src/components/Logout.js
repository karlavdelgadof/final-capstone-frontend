/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOutUser } from '../redux/user/userSlice';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    dispatch(logOutUser());
    console.log('LogOut clicked');
    navigate('/');
  };

  return (
    <div>
      <button type="button" onClick={handleClick}>Log Out</button>
    </div>
  );
};

export default Logout;
