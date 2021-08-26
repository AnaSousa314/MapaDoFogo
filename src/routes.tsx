import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Fire from './pages/Fire';
import Sobre from './pages/Sobre';

function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Fire}/>
        <Route path="/sobre" component={Sobre}/>
      </Switch>
    </BrowserRouter>
  ); 
}

export default Routes;