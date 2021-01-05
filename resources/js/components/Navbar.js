import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () =>{
  return(
    <>
      {/* header */}
      {/* home-header-activeはクリック時に発火 */}
      <header className="home-header ">
        <div className="home-header-inner">
          <div className="home-header-logo">
            <Link to="/">
              <span>CHOICE FLAVOR</span>
            </Link>
          </div>
          <div className="home-header-menuTrigger">
            <div className="menu-Trigger">=</div>
          </div>
        </div>
      </header>
         {/* ここからactiveなMenubar */}
        {/* header_floatMenu_activeにdisplay:none & usualにdisplay:noneあり*/}
      <div className="header_floatMenu_active header_floatMenu_usual">
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