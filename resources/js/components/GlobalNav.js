import React,{useState,useEffect} from 'react';
import {Link,useLocation} from 'react-router-dom';
import Navbar from './Navbar';


const GlobalNav = () => {
  const [animetion,setAnimation] = useState(true);
  const location = useLocation();

  //オープンアニメーションを初回だけ表示に制限
  useEffect(() => {
    if(location.state == 'already'){
      setAnimation(false);
    }
  },[]);

  return(
    <React.Fragment>
    <div 
      id={animetion ? "logo_loader" : "none_logo_loader"}
      className="open"
    >
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

        <Link to="/Brand">
          <button className="home-btn">Brand<p>から探す</p></button>
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