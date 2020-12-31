import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Top from './Top';
import About from './About';


const App = () => {
  return(
    <BrowserRouter>
    <React.Fragment>
      <GlobalNav />
      <Switch>
        <Route path="/" exact component={Top} />
        <Route path="/about" exact component={About} />
      </Switch>
    </React.Fragment>
    </BrowserRouter>
  )
}

if(document.getElementById('app')){
  ReactDOM.render(<App />, document.getElementById('app'));
}