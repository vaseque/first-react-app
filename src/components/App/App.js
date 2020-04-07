import React from 'react';
import Home from '../Home/HomeContainer.js';
import Info from '../Info/Info.js';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout.js';

const App = () => (
  
  
  <BrowserRouter>
    <MainLayout>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
      </Switch>
    </MainLayout>
  </BrowserRouter>
  
);

export default App;