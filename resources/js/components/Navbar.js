import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Navbar = () =>{
  const [modalMenu,setNav] = useState(false);

  ////Home画面表示を初回かそれ以降か判断
  const to = {
    pathname:'/',
    state:'already'
  }

  //do the modalMenu ON or OFF
  const isMenu_active = e => {
    e.preventDefault();
    if(!modalMenu){
      setNav(true);
    }else{
      setNav(false);
    }
  }

  return(
    <>
      {/* header */}
      {/* home-header-activeはクリック時に発火 */}
      <header 
        className={modalMenu ? "home-header home-header-active":"home-header "}
      >
        <div className="home-header-inner">
          <div className="home-header-logo">
            <Link to={to}>
              <span>CHOICE FLAVOR</span>
            </Link>
          </div>
          <button 
            className="home-header-menuTrigger"
            onClick={isMenu_active}
          >
            <div className="menu-Trigger_ecole">=</div>
            <div className="menu-Trigger_batu">✕</div>
          </button>
        </div>
      </header>
         {/* ここからactiveなMenubar */}
      <div 
        className={modalMenu ? "header_floatMenu_usual header_floatMenu_active":"header_floatMenu_usual  "}
      >
        <ul className="header_floatMenu_wraper">
          <div>
            <li>
              <Link to="/">TOP</Link>
            </li>
            <li>
              <Link to="/Searchflavors">SEARCH FLAVOR</Link>
            </li>
          </div>
          <li>
            <a>THEAM</a>
          </li>
          <li>
            <a>TERMS OF SERVICE</a>
          </li>
          <li>
            <a>CONTACT</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;