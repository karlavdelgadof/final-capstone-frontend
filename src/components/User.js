/* eslint-disable react/prop-types */
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

const User = () => {
  const hello = 1;

  return (
    <main>
      <div className={hello}>
        <Login />
        <Signup />
        <Logout />
      </div>
    </main>
  );
};

export default User;
