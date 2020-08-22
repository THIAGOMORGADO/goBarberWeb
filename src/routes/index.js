import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

// importando telas

import SignIn from '../pages/Signin/index';
import SignUp from '../pages/SignUp/index';
import DashBoard from '../pages/DashBoard/index';
import Profile from '../pages/Profile/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/dashboard" component={DashBoard} isPrivate />
      <Route path="/profile" component={Profile} isPrivate />
    </Switch>
  );
}
