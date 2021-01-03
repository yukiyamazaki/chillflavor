import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Top from './Top';
import Searchflavors from './Searchflavors';


const App = () => {
  return(
    <BrowserRouter>
    <React.Fragment>
      <GlobalNav />
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/searchflavors" exact component={Searchflavors} />
      </Switch>
    </React.Fragment>
    </BrowserRouter>
  )
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));
}