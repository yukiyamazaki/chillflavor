import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch, HashRouter} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Searchflavors from './Searchflavors';
import Flavorlist from './Flavorlist';
import Flavor from './Flavor';
import Roulette from './Roulette';
import Magazines from './Magazines';
import Magazine from './Magazine';


const App = () => {
  return(
    <BrowserRouter>
    <HashRouter>
    <React.Fragment>
      <Switch>
        <Route path="/" exact component={GlobalNav} />
        <Route path="/searchflavors" exact component={Searchflavors} />
        <Route path="/Flavorlist" exact component={Flavorlist} />
        <Route path="/Flavor/:id" exact component={Flavor} />
        <Route path="/Roulette" exact component={Roulette} />
        <Route path="/Magazines" exact component={Magazines} />
        <Route path="/Magazine" exact component={Magazine} />
      </Switch>
    </React.Fragment>
    </HashRouter>
    </BrowserRouter>
  )
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));
}