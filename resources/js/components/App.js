import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch, HashRouter} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Searchflavors from './Searchflavors';
import Flavorlist from './Flavorlist';
import Flavor from './Flavor';



const App = () => {
  return(
    <HashRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={GlobalNav} />
        <Route path="/searchflavors" exact component={Searchflavors} />
        <Route path="/Flavorlist" exact component={Flavorlist} />
        <Route path="/Flavor" exact component={Flavor} />

      </Switch>
    </React.Fragment>
    </HashRouter>
  )
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));
}