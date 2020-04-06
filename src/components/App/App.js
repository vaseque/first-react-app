import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';

const App = () => (
  
  <MainLayout>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </BrowserRouter>
  </MainLayout>
);

export default App;