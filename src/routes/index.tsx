import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

import Users from '../pages/Users';
import User from '../pages/User';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/users/:login" component={User} />
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
)

export default Routes;

