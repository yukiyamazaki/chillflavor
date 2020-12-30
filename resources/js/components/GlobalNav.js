import React from 'react';
import {Link} from 'react-router-dom';

import Coach from './Coach';

const GlobalNav = () => {
  return(
    <React.Fragment>
      <nav>
        <ul>
          {/* <Link to="/">
            <li>Top</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link> */}
        </ul>
        
        <Coach />
    
      </nav>
    </React.Fragment>
  )
}

export default GlobalNav;