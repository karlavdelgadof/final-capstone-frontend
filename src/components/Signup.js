/* eslint-disable react/prop-types */
import { useRef } from 'react';

const Signup = ({ setCurrentUser, setShow }) => {
  const formRef = useRef();
  const signup = async (userInfo, setCurrentUser) => {
    const url = 'http://127.0.0.1:3001/signup';
    try {
      const response = await fetch(url, {
        method: 'post',
        headers: {
          'content-type': 'application/json',
          accept: 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const data = await response.json();
      if (!response.ok) throw data.error;

      localStorage.setItem('token', response.headers.get('Authorization'));
      setCurrentUser(data);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData);
    const userInfo = {
      user: { email: data.email, password: data.password, name: data.name },
    };
    signup(userInfo, setCurrentUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(true);
  };
  return (
    <div>
      <form ref={formRef} onSubmit={handleSubmit}>
        Name:
        {' '}
        <input type="text" name="name" placeholder="name" />
        <br />
        Email:
        {' '}
        <input type="email" name="email" placeholder="email" />
        <br />
        Password:
        {' '}
        <input type="password" name="password" placeholder="password" />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div>
        Already registered,
        <a href="#login" onClick={handleClick}>Login</a>
        {' '}
        here.
      </div>
    </div>
  );
};

export default Signup;
