import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


const GlobalNav = () => {
  return(
    <React.Fragment>
    <div id="logo_loader" className="open">
      <div className="f_logo">
        <div src="logo.png" alt="logo">
          <p>CHOICE FLAVOR</p>
        </div>
      </div>
    </div>

    <div className="home-wrap">
      {/* headerコンポーネント */}
      <Navbar />
      <main className="home-main">

        <Link to="/Searchflavors">
          <button className="home-btn">今日の気分<p>から探す</p>
        </button>
        </Link>

        <Link to="/Flavorlist">
          <button className="home-btn">カテゴリ<p>から探す</p></button>
        </Link>

        <Link to="/Roulette">
          <button className="home-btn_dev">開発中</button>
        </Link>

        <Link to="/Magazines">
         <button className="home-btn_dev">開発中</button>
        </Link>

      </main>

    </div>
    </React.Fragment>
  )
}

export default GlobalNav;