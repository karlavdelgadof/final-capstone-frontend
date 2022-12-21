import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { createUser } from '../../redux/user/userSlice';

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const user = {
      user: { email: data.email, password: data.password, name: data.name },
    };
    dispatch(createUser(user));
    navigate('/');
  };

  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <button type="submit" value="Sign In">Sign Up</button>
      </form>
      <div className="button">
        <Link to="/user/login">Login</Link>
      </div>
    </div>
  );
};

export default Signup;
