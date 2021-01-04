import React from 'react';
import Navbar from './Navbar';

const Searchflavors = () => {
  return(
    <>
      {/* header */}
      <div className="contents_header_wrap">
       <Navbar />
        {/* ここからMain */}
        <main>
          <div className="style_wrap_intro">
            <div className="style_topImage">
              <img src="images/design/electnic.svg"></img>
            </div>
            <h2 className="style_title">フレイバーを選ぶ</h2>
            <div className="style_description">あなたのご希望をもとに<span>あなたにおすすめの順に</span>フレイバーを全て表示しています。希望条件が明確な場合は、絞り込んでみましょう。</div>
          </div>
          <div className="style_wrap_search">
            <div className="search_btn_wrap">
              <button className="search_btn_how">
                <img/>
                <span>フレイバの選び方</span>
              </button>
              <button className="search_btn_filter">
                <img/>
                <span>絞り込み</span>
              </button>
            </div>
            <div className="style_count">
              20人
            </div>
          </div>
          {/* ここからコーチの結果を表示 */}
          <ul className="contents_style_ul">
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>
            <li>
              <div className="style_wraper_content">
                <a className="content_main">
                  <div className="style_img">
                    <img src="images/coaches/S__6979644.jpg" alt="" />
                  </div>
                  <div className="style_flavor_text">
                    <div className="style_flavor_name">レモン</div>
                    <div className="style_flavor_discription">
                      すっきりとした口当たりで・・・・
                    </div>
                  </div>
                    
                </a>
              </div>
            </li>

          </ul>
          <div className="style_wrap_more">
            <button>
              もっとコートをみる
              <img src="images/design/cheak_blue.svg"/>
            </button>
          </div>
          <h3 className="style_subTitle">フレイバー選びにお困りですか？</h3>
        </main>
        <footer className="footer_contents_wraper">
          <div className="footer_wave">
            <img />
          </div>
          <div className="footer_contents_main">
            <div className="footer_contents_logo">TARUSHIRU</div>
            <small>©TARUSHIRU inc.</small>
          </div>
        </footer>

      </div>

      {/* main */}
      


      {/* footer */}
    </>
  );
}


export default Searchflavors;