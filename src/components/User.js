/* eslint-disable react/prop-types */

import { useState } from 'react';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';

const User = ({ currentUser, setCurrentUser }) => {
  const [show, setShow] = useState(true);
  if (currentUser) {
    return (
      <main>
        <div>
          Hello
          {currentUser.status.data.user.email}
          <Logout setCurrentUser={setCurrentUser} />
        </div>
      </main>
    );
  }
  return (
    <main>
      <div>
        {show
          ? <Login setCurrentUser={setCurrentUser} setShow={setShow} />
          : <Signup setCurrentUser={setCurrentUser} setShow={setShow} />}
      </div>
    </main>
  );
};

export default User;
