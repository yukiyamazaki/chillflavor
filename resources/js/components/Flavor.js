import React from 'react';
import {Link} from 'react-router-dom';
import Navbar from './Navbar';

const Flavor = () =>{
  return(
    <>
      <Navbar />
      <div className="flavor_main_wrapper">
        <div className="flavor_main_content">
          <div className="content_flavor_name">レモン</div>
          <div className="content_flavor_img">
            <img src="images/flavors/lemon.svg"/>
          </div>

          <div className="content_flavor_detail">
            <div className="content_flavor_feature">
              <h2>特徴</h2>
              <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
            </div>
            <div className="content_flavor_tags">
              <h2>タグ</h2>
              <div className="content_flavor_tag">a</div>
              <div className="content_flavor_tag">b</div>
              <div className="content_flavor_tag">c</div>
            </div>
            <div className="content_flavor_combination">
              <h2>オススメの組み合わせ</h2>
              <ul>
                <li>
                  <Link to="/flavor">
                    <span>▶かぼす</span>
                  </Link>
                </li>
                <li>
                  <Link to="/flavor">
                    <span>▶ダブルアップル</span>
                  </Link>
                </li>
                <li>
                  <Link to="/flavor">
                    <span>▶スイカ</span>
                  </Link>
                </li>
              </ul>           
            </div>
          </div>
        </div>
      </div>
    </>
  )

}

export default Flavor;

