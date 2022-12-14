import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../../redux/user/userSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const getUser = async (user) => {
    await dispatch(logInUser(user));
    navigate('/', { replace: true });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const user = {
      user: {
        email: data.email, password: data.password,
      },
    };
    getUser(user);
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit" value="Login">Login</button>
      </form>
      <div className="button">
        <Link to="/user/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
