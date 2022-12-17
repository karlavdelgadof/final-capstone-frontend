/* eslint-disable react/prop-types */

import { useRef } from 'react';

const Login = ({ setCurrentUser, setShow }) => {
  const formRef = useRef();
  const login = async (userInfo, setCurrentUser) => {
    const url = 'http://127.0.0.1:3001/login';
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

      localStorage.setItem('token', response.headers.get('Authrization'));
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
      user: {
        email: data.email, password: data.password,
      },
    };
    login(userInfo, setCurrentUser);
    e.target.reset();
  };
  const handleClick = (e) => {
    e.preventDefault();
    setShow(false);
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
        <input type="submit" value="Login" />
      </form>
      <br />
      <div>
        Not registered yet,
        <a href="#signup" onClick={handleClick}>Signup</a>
      </div>
    </div>
  );
};

export default Login;
