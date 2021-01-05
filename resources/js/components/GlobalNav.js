import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';


const GlobalNav = () => {
  return(
    <React.Fragment>
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
          <button className="home-btn">ルーレット<p>で探す</p></button>
        </Link>

        <Link to="/Magazines">
         <button className="home-btn">マガジン</button>
        </Link>

      </main>

    </div>
    </React.Fragment>
  )
}

export default GlobalNav;