import React from 'react';
import {Link} from 'react-router-dom';

const GlobalNav = () => {
  return(
    <React.Fragment>
      <nav>
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/searchflavors">
            <li>Searchflavors</li>
          </Link>
        </ul>
      </nav>
    </React.Fragment>
  )
}

export default GlobalNav;