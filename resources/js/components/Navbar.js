import React, { useState } from 'react';
import {Link} from 'react-router-dom';


const Navbar = () =>{
  const [modalMenu,setNav] = useState(false);

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
            <Link to="/">
              <span>CHOICE FLAVOR</span>
            </Link>
          </div>
          <button 
            className="home-header-menuTrigger"
            onClick={isMenu_active}
          >
            <div className="menu-Trigger">=</div>
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
              <a>マイページ</a>
            </li>
            <li>
              <a>登録情報の変更</a>
            </li>
            <li>
              <a>ログアウト</a>
            </li>
          </div>
          <li>
            <div></div>
          </li>
          <li>
            <a>運営会社</a>
          </li>
          <li>
            <a>利用規約</a>
          </li>
          <li>
            <a>プライバシーポリシー</a>
          </li>
          <li>
            <a>お問い合わせ</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Navbar;