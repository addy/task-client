import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from '../components/Index';

const Router = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Index} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
