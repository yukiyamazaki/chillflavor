import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch, HashRouter} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Home from './Home';
import Searchflavors from './Searchflavors';


const App = () => {
  return(
    <HashRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={GlobalNav} />
        <Route path="/searchflavors" exact component={Searchflavors} />
      </Switch>
    </React.Fragment>
    </HashRouter>
  )
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));
}