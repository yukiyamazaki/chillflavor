import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Magazines = () => {
  return(
    <>
      <Navbar />
      <div className="magazine_wapper">
        <div className="magazine_contents">
          <h2>マガジン</h2>
          <ul> 
              <Link to="/Magazine">
                <li className="magazin_content">
                  <div className="magazines_img"> 
                    <img src="images/magazines/smoke.svg"/>
                  </div>
                  <div className="magazin_intro_wraper">
                    <div className="magazin_title">aaa</div>
                    <div className="magazin_description">bbbbbbbbbbbbbbbbbbbbbbbb</div>
                    <p className="magazin_created_at">2020.01.01</p>
                  </div>
                </li>
              </Link>

              <Link to="/Magazine">
                <li className="magazin_content">
                  <div className="magazines_img"> 
                    <img src="images/magazines/smoke.svg"/>
                  </div>
                  <div className="magazin_intro_wraper">
                    <div className="magazin_title">bbb</div>
                    <div className="magazin_description">dddddddddddddddddddddddddd</div>
                    <p className="magazin_created_at">2020.01.01</p>
                  </div>
                </li>
              </Link>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Magazines;