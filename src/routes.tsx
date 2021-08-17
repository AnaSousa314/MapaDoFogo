import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fire from './pages/Fire';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Fire}/>
      </Switch>
    </BrowserRouter>
  ); 
}

export default Routes;